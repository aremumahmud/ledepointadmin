import Header from "./header";
import '../css/send_email.css'
import { useEffect } from "react";
import fetchClients from "../libs/getClients";
import { useState } from "react";
import InsertClientData from "../libs/insert_user";
import { useRef } from "react";
import SendEmail from "../libs/send_email";
function SendEmailToClient(){

    let [userTables , setUserTables] =  useState([])
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
//window.alert(JSON.stringify(jsonData))
        SendEmail(jsonData).then(res=>{
            setOnn(false)

            if(res.error) return alert('an unexpected error has occured')
            window.alert('client added successfully')
            location.reload()
        }).catch(err=>{
            alert('an unexpected error has occured')
            setOnn(false)
        })
    }


  useEffect(()=>{
    fetchClients().then(res=>{
      setUserTables(res)
    }).catch(err=>{
      alert('An unexcpected error occured')
      location.reload()
    })
  } , [])
    return (
        <>
        <Header isAdmin={true}/>
        <br /><br /><br /><br /><br /><br />
        
         <div className="send_email">
<p className="title">
    Send Email to client
</p>

<form action=""  ref={form} onSubmit={handleSubmit}>
    <input type="email" placeholder="Clients Email" name="email" required/>
    <input type="text" placeholder="Clients Name" name="client_name" required/>
    <select name="investorID" id="">
        <option value="">Select Client</option>
        {
            userTables.map((data, i)=>{
                return  <option key={i} value={data._id}>{data.investor_name}</option>
            })

        }
    </select>
    <button style={on?{background:'gray'}:{}}>
        Send Email
    </button>
</form>
        </div>
        </>
       
    )
}

export default SendEmailToClient
