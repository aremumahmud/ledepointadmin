import '../css/new.css'
import img from '../assets/update.jpg'

function New(){
    return (
        <div className="new_wrap">
                    <div className="new">
            {/* <div className="content">
                <div className="circle">
                    80 <sup>%</sup>
                </div>
                <div className="text">
                Newest Financing
Options
                </div>
            </div> */}
            <img src={img} alt="" />
        </div>
        <div>
            <div className="text_ up">
            <p>We have the latest financing options</p>
            <p>At Ledge Point Finance, we offer the latest financing options tailored to meet your business needs. Our innovative solutions ensure you have access to the best financial resources available, helping you achieve your goals with confidence.</p>
        </div>
        <div className="text_ up">
            <p>Cutting-Edge Financial Solutions</p>
            <p>Stay ahead with Ledge Point Finance&apos;s cutting-edge financial solutions. We continuously update our offerings to provide you with the most advanced and effective financing options, ensuring your business thrives in a competitive market.</p>
        </div>
        </div>
        
        </div>

    )
}

export default New