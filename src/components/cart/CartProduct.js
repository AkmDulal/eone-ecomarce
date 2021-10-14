import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { VscClose, VscArrowLeft } from "react-icons/vsc";

import CartImg from "../../assets/images/cart1.jpg"
import CartImg2 from "../../assets/images/cart2.jpg"
import CartImg3 from "../../assets/images/cart3.jpg"

export class CartProduct extends Component {
    render() {
        return (
            <div className="cart__table_area">
                <table class="table">
                    <thead>
                        <tr className="cart__product_table_header">
                            <th scope="col"> 
                                <h2> Product </h2>
                             </th>
                            <th scope="col"><h2> Price </h2></th>
                            <th scope="col"><h2> Quantity </h2></th>
                            <th scope="col"><h2> Subtotal </h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="c_p_t_img">
                                    <Link to="/">
                                        <img src={CartImg2} alt="img"></img>
                                        <VscClose />
                                        <h5> Classic Simple Backpack  </h5>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                <h5> $40.00  </h5>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                    <div className="card_box_text">
                                        <p> 
                                            <span> - </span> 
                                                <input type="text" value="1"></input>
                                            <span> + </span> 
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                <h5> $40.00  </h5>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="c_p_t_img">
                                    <Link to="/">
                                        <img src={CartImg3} alt="img"></img>
                                        <VscClose />
                                        <h5> Classic Simple Backpack  </h5>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                <h5> $40.00  </h5>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                    <div className="card_box_text">
                                        <p> 
                                            <span> - </span> 
                                                <input type="text" value="1"></input>
                                            <span> + </span> 
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                <h5> $40.00  </h5>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="c_p_t_img">
                                    <Link to="/">
                                        <img src={CartImg} alt="img"></img>
                                        <VscClose />
                                        <h5> Classic Simple Backpack  </h5>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                <h5> $40.00  </h5>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                    <div className="card_box_text">
                                        <p> 
                                            <span> - </span> 
                                                <input type="text" value="1"></input>
                                            <span> + </span> 
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="c_p_t_img">
                                <h5> $40.00  </h5>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="cart__table_footer_area">
                    <Link to="/">
                        <h3 className="continue_shoping_btn"> <VscArrowLeft /> Continue Shopping </h3>
                    </Link>
                    <div className="cart__table_footer_right">
                    <Link to="/">
                        <h3 className="continue_shoping_btn"> Cleare Cart </h3>
                    </Link>
                    <Link to="">
                        <h3 className="continue_shoping_btn continue_shoping_btn_last_child "> Update Cart </h3>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartProduct
