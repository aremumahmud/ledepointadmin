import { FaBars } from 'react-icons/fa6'
import header_img from '../assets/logo100.png'
import { useEffect, useState } from 'react'

function Header ({isAdmin}){

    let [on , setOn] =  useState(false)
    
    let resize_effect =  ()=>{
          setOn(false)
        }

    useEffect(()=>{
        window.addEventListener('resize' ,resize_effect)

        return ()=>{
          window.removeEventListener('resize',resize_effect)
        }
    },[])

    return (
        <div className="landing-page">
        <header>

          <div className="container non_header" >
            <img className='img_header' src={header_img} alt="" />
           { !isAdmin && <ul className="links">
             <li> <a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contacts">Contact Us</a></li>
              {/* <li><a href="/login">Login</a></li> */}
              <li><a href="/register">Get Started</a></li>
            </ul>}
            <div className="hamburger" onClick={()=>setOn(r=>!r)}>
              <FaBars />
            </div>
          </div>
          {
              on && <div className="menu">
          {!isAdmin && <ul className="links_menu">
            <a onClick={()=>setOn(r=>false)} href="/">  <li>Home</li></a>
              <a onClick={()=>setOn(false)} href="#about"><li>About Us</li></a>
             <a onClick={()=>setOn(false)} href="#contacts"> <li>Contact Us</li></a>
              {/* <li><a href="/login">Login</a></li> */}
             <a onClick={()=>setOn(false)} href="/register"> <li>Get Started</li></a>
            </ul>}
          </div>
          }
         
        </header>
       
      </div>
    )
}


export default Header