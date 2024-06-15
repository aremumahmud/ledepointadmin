import '../css/about.css'
import '../css/services.css'
import img from '../assets/a1.jpg'
import img1 from '../assets/a2.jpg'
import img2 from '../assets/a3.jpg'
import { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

function Services (){

    useEffect(() => {  
          ScrollReveal({
            origin: 'bottom',
            distance: '100px',
            duration: 800,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.8,
            reset: false,
          }).reveal(".up", {
            
            interval:200,
           
        })}, [])

    return (
        <div className="about services">
<div className="text">
    <p>Services</p>
    <p>At Ledge Point Finance, we provide comprehensive financial services to support your business at every stage. Our tailored loan solutions, innovative funding options, and expert financial guidance are designed to help you navigate complex financial landscapes and achieve your growth goals. Trust us to deliver the tools and support necessary for your business to thrive.
    </p>
</div>
<div className="services_">
   
   <div className="service_card up" >
    <img src={img} alt="" />
    <p>Wealth Management</p>
   </div>
   <div className="service_card up">
    <img src={img1} alt="" />
    <p>Portfolio Management</p>
   </div>
   <div className="service_card up">
    <img src={img2} alt="" />
    <p>Tax Planning</p>
   </div>
   
</div>
        </div>
    )
}

export default Services