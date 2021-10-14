import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {  Checkbox    } from 'antd';
import { Link } from 'react-router-dom';
import { ImFacebook, ImTwitter, ImYoutube, ImLinkedin2   } from "react-icons/im";
export class Singup extends Component {
    render() {
        return (
            <div className="singup_area login-5">
                <Container>
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center pad-0">
                        <div className="form-section clearfix">
                            <h3 className="from__header">Create An Cccount</h3>
                            <form action="#" method="GET">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group form-box">
                                            <input type="text" className="input-text" placeholder="Full Name"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group form-box">
                                            <input type="text" className="input-text" placeholder="Phone number"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-box">
                                            <input type="email" className="input-text" placeholder="Email Address"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-group form-box">
                                            <input type="date" className="input-text" placeholder="Email Address"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group form-box">
                                            <input type="text" className="input-text" placeholder="Gander"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="form-check checkbox-theme">
                                            <div className="form_group">
                                                <Checkbox >I agree to the <Link to="/"> terms of service </Link> </Checkbox >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-box form__group__new">
                                            <button type="submit" class="btn-md btn__theme float-left">Register</button>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center pad-0">
                        <div className="info clearfix box__info_color">
                            <h3> Eone </h3>
                            <h4>  Welcome to Eone </h4>
                            <div class="social-list"> 
                                <Link to="/"> <ImFacebook className="facebook-bg" /> </Link>
                                <Link to="/"> <ImTwitter className="twitter-bg" /> </Link>
                                <Link to="/">  <ImYoutube className="google-bg" /> </Link>
                                <Link to="/">  <ImLinkedin2 className="linkedin-bg" /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default Singup

