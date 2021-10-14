import React from 'react'

import Bgrond from "../assets/images/popup_bg.jpg" 
import { VscClose } from "react-icons/vsc";
function PopupComponent(props) {
   
    

    return (props.trigger) ? (
        <div className="popup_com_area">
            <div className="popup">
                <div className="popup-inner">
                    <p className="close-btn" onClick={()=>props.setTrigger(false)}> <VscClose /> </p>
                    {/* <p className="close-btn" onClick={()=>props.setTimedPopup(false)}> <VscClose /> </p> */}
                    <div className="rainbow">
                        <span></span>
                        <span></span>
                    </div>
            <div class="offer-content ">
                <img class="img-fluid bg-img" src={Bgrond} alt=""></img>
                <div className="offer_content_text">
                     <h2><span>up to </span>80%</h2>
                     <div class="lable">get  30% off + free shipping</div>
                     <h3>black friday</h3>
                     <div class="timer">
                        <p>
                            <span className="full_timer_box">126<span class="timer-cal">Days</span></span>
                            <span className="full_timer_box">6<span class="timer-cal">Hrs</span></span>
                            <span className="full_timer_box">22<span class="timer-cal">Min</span></span>
                            <span className="full_timer_box">53<span class="timer-cal">Sec</span></span> 
                        </p>
                     </div>
                     <h4 className="offer_date">Friday, 26 November 2021</h4>
                  </div>

            </div>

                </div>
            </div>
        </div>
    ) : "";
}

export default PopupComponent

// import React from 'react'

// function PopupComponent() {
//     return (
//         <div className="popup_com_area">
//             <h1> My newsletter Area </h1>
//         </div>
//     )
// }

// export default PopupComponent

