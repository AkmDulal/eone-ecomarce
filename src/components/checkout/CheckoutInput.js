import React, { Component } from 'react'
import {  Checkbox    } from 'antd';
export class CheckoutInput extends Component {
    render() {
        return (
            <div className="checkout_input_file">
                <div className="user__fild user__fild__cart _area">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form_group">
                                <label>First Name </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form_group">
                            <label> Last Name </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <label> Country </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <label> Address </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <label>  Town/City  </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <label>   State / County   </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <label>    Postal Code   </label>
                                <input type="text" class="form-control" placeholder=""></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                                <Checkbox >Create An Account?</Checkbox >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutInput
