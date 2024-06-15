import footer_img from '../assets/logo99.png'
import footer from '../assets/footer.webp'
import "../css/footer.css";
import Button from "./button";
function Footer() {
  return (
    <div className="footer_wrap" id="contact">
      {" "}
      <div className="footer">
        <div className="section1_">
            <div className='widen'>
               <img src={footer_img} alt="" />
                 <p className="footer_title">
                 Stay ahead with cutting-edge insights
                    </p>
                    <a style={{marginLeft:'0'}} href="https://forms.gle/VknKPZoK4CBnYFLc8"><Button /></a>
            </div>
         
          
            <img src={footer} alt="" />
         
        </div>
       <br />
        <div className="section2_">
          {/* <div className="footer_sec">
            <p className="title">Our Address</p>
            <p>Valentin, Street Road 24, New York, USA - 67452</p>
          </div> */}
          <div className="footer_sec">
            <p className="title">Contact Us</p>
            <p>contact@ledgepointfinance.com</p>
          </div>
          {/* <div className="footer_sec"><p className="title">Our Socials</p></div> */}
        </div>
        {/* <hr /> */}
      </div>
      <hr style={{ margin: "1rem", opacity: ".8" }} />
      <div className="separate" style={{ margin: "1rem", opacity: ".8" }}>
        <p>Copyright © 2023 Ledge Point Finance, All Rights Reserved.</p>
        <p>Terms & Conditions | Private Policy</p>
      </div>
      <br />
    </div>
  );
}

export default Footer;
