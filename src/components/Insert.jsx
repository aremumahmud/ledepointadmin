import Header from "./header";
import '../css/insert.css'
import { useRef } from "react";
import InsertClientData from "../libs/insert_user";
import { useState } from "react";

function Insert (){
    let [on , setOnn] = useState(false)
    let form = useRef()
    let handleSubmit = (event)=>{
        event.preventDefault();
        setOnn(true)
        const formData = new FormData(form.current);
        const jsonData = {};
    
        formData.forEach((value, key) => {
          jsonData[key] = value;
        });

        InsertClientData(jsonData).then(res=>{
            setOnn(false)

            if(res.error) return alert('an unexpected error has occured')
            window.alert('client added successfully')
            location.reload()
        }).catch(err=>{
            alert('an unexpected error has occured')
            setOnn(false)
        })
    }
    return (
        <>
        <Header isAdmin={true}/> <br /><br /><br /><br /><br /><br />
        <div className="insert_new">
           
<p className="title">
    Admin Sector
</p>

<div className="section">
    <p className="subtitle">Insert new Client</p>
    <form ref={form} action="" onSubmit={handleSubmit}>

        <input type="text" name='investor_name' placeholder="Investors Name" required/>
        <input type="text" name="investor_position" placeholder="Investors Position" required  />
        <input type="email" name="investor_email" placeholder="Investors Email" required/>
        <input type="tel" name="investor_phone" placeholder="Investors Phone number" required/>
        <button style={on?{background:'gray'}:{}}>Insert</button>
    </form>
</div>
        </div>
        </>
    )
}

export default Insert