import React, { Component } from 'react';
import "../assets/css/comingsoon.css";
export class ComingSoon extends Component {
    render() {
        return (
            <div className="coming_soon_area header">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <div className="countdown">
                                    <span id="clock"></span>
                                </div> 

                                <h1>Project Coming Soon</h1>
                                <p className="p-large">We love to create dependable business solutions for companies of all sizes and any industry. Our goal is to improve accuracy and efficiency to reduce operational costs</p>
                                
                                <form id="signUpForm">
                                    <div className="form-group">
                                        <input type="email" className="form-control-input" id="semail" required></input>
                                        <label className="label-control" for="semail">Email address</label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button">SIGN UP</button>
                                    </div>
                                </form>

                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        )
    }
}

export default ComingSoon
