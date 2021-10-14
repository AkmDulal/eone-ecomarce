import React from 'react'
import { Radio } from 'antd';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;
function CartTotals() {
    return (
        <div className="cart_totals_area">
            <div className="cart_totals_header">
                <h3> Cart Totals </h3>
                <p> Subtotal <span>  $100.00 </span>  </p>
            </div>
            <div className="price_filter">
                <h3> Shipping </h3>
                <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio className="s_width" value={1}>Free Shipping</Radio>
                    <Radio className="s_width" value={2}>Local Pickup</Radio>
                    <Radio className="s_width" value={3}>Flat rate: $5.00</Radio>
                </Radio.Group>
            </div>
            <div className="price_filter price_total__btn">
                <h3> Shipping to BD. </h3>
                <Select className="cart_c__" defaultValue="Bangladesh(BD)" >
                    <Option value="jack">Dhaka</Option>
                    <Option value="lucy">Khulna</Option>
                </Select>
                <div className="user__fild user__fild__cart _area">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form_group">
                                <input type="text" class="form-control" placeholder="Town / City"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                                <input type="text" class="form-control" placeholder="Zip"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price_filter price_total__btn">
                <p> Subtotal <span>  $100.00 </span>  </p>
                <Link to="/checkout">
                    <button> Proceed to checkout </button>
                </Link> 
            </div>
        </div>
    )
}

export default CartTotals
