import React, { Component } from 'react'
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
export class CheckOutDetails extends Component {
    render() {
        return (
            <div>
                <div className="checkout_input_file">
                    <div className="user__fild user__fild__cart _area">
                        <div className="form_group form_group_details">
                            <label>Product   <span> Total  </span> </label>
                        </div>
                        <div className="form_group form_group_details f_n_txt">
                            <label>Pink Slim Shirt × 1    <span> $25.10  </span> </label>
                            <label>SLim Fit Jeans × 1     <span> $555.00  </span> </label>
                        </div>
                        <div className="form_group form_group_details f_n_txt">
                            <label> <b> Subtotal   </b>  <span> $380.10  </span> </label>
                        </div>
                        <div className="form_group f_n_txt">
                            <label> <b> Shipping</b>   <span className="f_n_txt__span"> <Checkbox>Free Shipping</Checkbox> </span> </label>
                            <label> <b> Shipping</b>   <span className="f_n_txt__span"> <Checkbox>Radio</Checkbox> </span> </label>
                            <label>    <span className="f_n_txt__span"> <Checkbox >Local Pickup</Checkbox > </span> </label>
                        </div>
                        <div className="form_group f_n_txt f_n_txt_____">
                            <label> <b> Total    </b>  <span className="f_n_txt____"> $620.00  </span> </label>
                            <Checkbox className="f_n_txt_checkBokk" >Check Payments</Checkbox >
                            <Checkbox className="f_n_txt_checkBokk"  >Cash On Delivery</Checkbox >
                            <Checkbox className="f_n_txt_checkBokk"  >PayPal</Checkbox >
                            <Link to="/premente-card">
                                <button> Place Order </button>
                            </Link>
                            {/* <Radio>Local Pickup</Radio>
                            <Radio>Local Pickup</Radio> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckOutDetails
