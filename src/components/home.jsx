import '../css/home.css'
import '../App.css'
import Header from './header'
import Hero from './hero'
import Marquee from './marquee'
import About from './about'
import Services from './services'
import New from './new'
import Team from './ourteam'
import Stats from './stats'
import Review from './our_reviews'
import Footer from './footer'
import Questions from './questions'
import ScrollIndicator from './scrollindicator'
import Contact from './contact'
// import copy from '../assets/copy.svg'

// import { FaBars, FaClipboard, FaClipboardCheck, FaHouse, FaPerson, FaPhone, FaPowerOff } from "react-icons/fa6";



function Home(){

    return (
        <>
<ScrollIndicator />
        <Header />
       <Hero />
        <Marquee /> 
        <About />
        <Services />
        <New />
        <Team />
      <Stats />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <Review />
       <Questions />
       <Contact />
      <Footer />  {/**/}
      </>
    )
}


export default Home