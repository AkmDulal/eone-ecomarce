import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ImFacebook, ImGoogle   } from "react-icons/im";

export class login extends Component {
    render() {
        return (
            <div className="singup_area login-5">
                <Container>
                <div className="row login-box">
                    <div className="col-lg-7 align-self-center pad-0">
                        <div className="form-section clearfix">
                            <form action="#" method="GET">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group form-box">
                                            <input type="email" className="input-text" placeholder="Email Address"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-box">
                                            <input type="text" className="input-text" placeholder="Password"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="form-check checkbox-theme">
                                            <div className="form_group form_group__login">
                                                New member? <Link to="/singup">  Register here </Link>
                                                {/* <Checkbox >I agree to the <Link to="/"> terms of service </Link> </Checkbox > */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-box form__group__new">
                                            <button type="submit" class="btn-md btn__theme float-left">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 align-self-center pad-0">
                        <div className="info clearfix box__info_color">
                            {/* <h3> Eone </h3> */}
                            <h4>  Or, login with </h4>
                            <div className="login_with_social">
                                <div className="f_social_i">
                                    <ImFacebook />
                                    <span> Facebook </span>
                                </div>
                                <div className="f_social_i f_social_g">
                                    <ImGoogle />
                                    <span> Google </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default login
