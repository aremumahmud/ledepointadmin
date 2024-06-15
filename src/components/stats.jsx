import "../css/proffesion.css";
import "../css/client.css";
import "../css/stats.css";
import {
 
  FaHandsClapping,
  FaLocationArrow,
 
  FaPerson 
} from "react-icons/fa6";
// import { FaWandMagicSparkles } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

function Stats() {
 
  let [one , setOne] = useState(0)
  let [two , setTwo] = useState(0)
  let [four, setFour] = useState(0);

useEffect(() => {  
  function stopwatch(data) {
    data.forEach((dt) => {
      let { limit, changer } = dt;
      let limit_reached = 0;
      let n = setInterval(() => {
        if (limit === limit_reached ||  limit_reached > limit ) return clearInterval(n);
        changer((prev) => {
          limit_reached++;
          return prev + 1;
        });
      }, 10);
    });
  }

  // 
    // // Configure the scroll reveal animation
    // ScrollReveal().reveal(".up", {
    //   delay: 200,
    //   origin: "bottom",
    //   duration: 800,
    //   scale: 1,
    // });

    ScrollReveal().reveal(".upto", {
      delay: 200,
      origin: "bottom",
      duration: 500,
      scale: 1,
      beforeReveal: ()=> stopwatch([
        { limit: 9, changer: setFour },
        { limit: 200, changer: setOne },
        { limit: 15, changer: setTwo },
      ]),
    });
  }, [])
  return (
    <div className="profession client stat upto">
      <p className="client_title up">Our Professional Statistics.</p>
      <div className="some_summary">
        <div className="some_wrapper stats upto">
          <div className="some">
            <div className="stt">
              <div className="count">{four}+</div>
              <div>
                <FaHandsClapping color="brown" /> Years of Experience
              </div>
            </div>
            
            <div className="stt">
              <div className="count">{one}+</div>
              <div>
                <FaPerson color="green" /> Investment Profesionals
              </div>
            </div>
            <div className="stt">
              <div className="count">{two}+</div>
              <div>
                <FaLocationArrow color="grey" />Locations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
