import '../css/companyvalues.css'
import '../css/review.css'
import svg1 from '../assets/testimonial-01-150x150.jpg'
import svg2 from '../assets/testimonial-02-150x150.jpg'
import svg3 from '../assets/testimonial-03-150x150.jpg'

import { FaStar } from 'react-icons/fa6'

function Review(){
  
    return (
<div className="values_wrap">
<p className="title_v up">Our Customer Reviews</p>
<div className="values">
    <div className="value up">
     <div className="user">
       <div className="userImg">
        <img src={svg1} alt="" />
       </div>
       <div className="info">
        <p>Revia Connors</p>
        <p>SATISFIED CLIENT</p>
       </div>
     </div>
     <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
     </div>
     <div className="text_">
     I cannot recommend Ledge Point FinanceE enough! From the very beginning, their team provided exceptional guidance and support. They understood our business needs and offered tailored solutions that helped us secure the funding we needed to expand. Their expertise and dedication have been invaluable to our success. Thank you, Ledge Point FinanceE!
     </div>
    </div>
    <div className="value up">
    <div className="user">
       <div className="userImg">
       <img src={svg2} alt="" />
       </div>
       <div className="info">
        <p>Ben Whitefield</p>
        <p>CHIEF FINANCE</p>
       </div>
     </div>
     <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
     </div>
     <div className="text_">
     As the CFO of a growing company, partnering with Ledge Point FinanceE was one of the best decisions we've made. Their deep understanding of financial intricacies and their innovative funding solutions have significantly improved our cash flow management. The professionalism and reliability of the Ledge Point FinanceE team are unparalleled. They truly are a trusted financial partner.
     </div>
    </div>
    <div className="value up">
    <div className="user">
       <div className="userImg"> <img src={svg3} alt="" /></div>
       <div className="info">
        <p>Emma Greed</p>
        <p>LEGAL ADVISOR</p>
       </div>
     </div>
     <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
     </div>
     <div className="text_">
     Working with Ledge Point FinanceE has been a seamless experience from a legal perspective. Their transparent processes and commitment to compliance ensured that all funding arrangements were handled with utmost care and legality. Their team's attention to detail and thorough understanding of financial regulations gave us complete confidence. I highly recommend Ledge Point FinanceE for their exceptional service and integrity.
     </div>
    </div>
   
</div>
</div>
    )
}

export default Review