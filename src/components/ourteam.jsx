
import img from '../assets/team1.jpg'
import img1 from '../assets/team2.jpg'
import img2 from '../assets/team3.jpg'
import img3 from '../assets/team4.jpg'

function Team (){
    return (
        <div className="about services">
<div className="text">
    <p>Our Team of Experts</p>
    <p></p>
    
</div>
<div className="services_ team" style={{    gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
   
   <div className="service_card up">
    <img src={img} alt="" />
    <p>Christia Mauman</p>
    <p>Chief Excecuting Officer</p>
   </div>
   <div className="service_card up">
    <img src={img1} alt="" />
    <p>Laurie Willsberg</p>
    <p>Head of Acquisitions</p>
   </div>
   <div className="service_card up">
    <img src={img2} alt="" />
    <p>Ronald White</p>
    <p>Managing Partner, Washington</p>
   </div>
   <div className="service_card up">
    <img src={img3} alt="" />
    <p>Stephen Lyde</p>
    <p>Managing Partner, Austrailia</p>
   </div>
   
</div>
        </div>
    )
}

export default Team