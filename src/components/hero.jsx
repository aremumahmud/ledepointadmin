import '../css/hero.css'
import { cn } from '../utils/cn'

import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/ab.jpg'
import { FlipWords } from './slider'
import Button from './button'


const words = [`
Experience unparalleled wealth management with our dedicated team of professionals.`,
`Optimize your investments with the strategic expertise of our financial advisors.`,
`Secure your financial future with the guidance of our seasoned experts.`]

function  Hero(){
    return (
        <div className="hero_T">
<div className="hero_txt">
      
        <FlipWords duration={5000} className={'flipper'} words={words} /> <br />
        <a href="https://forms.gle/VknKPZoK4CBnYFLc8"><Button /></a>
        </div> </div>
    )
}

export default Hero

