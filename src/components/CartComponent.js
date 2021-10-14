import React, { useState } from 'react';
import { Drawer } from 'antd';

// React Icon 
import { BiCart, BiShoppingBag } from "react-icons/bi";
import { VscClose } from 'react-icons/vsc';

// Card Images
import CarImg1 from "../assets/images/car_1.jpg" 
import CardBoxEdit from './CardBoxEdit';
import { Link } from 'react-router-dom';


export default function CartComponent() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    return (
        <div>
            <div className="header_card_box" onClick={showDrawer}>
              
                <span className="header_card_box_span"> ৳17.79 </span>
                <div className="card__icon">
                    <BiCart />
                    <p className="card_number">3</p>
                </div>

                <div className="raspon__footer___btm" to="/">
                    <BiShoppingBag className="registrison_icon m_t_b" />
                    <p> Cart </p>
                    <span className="raspon__footer___btm_span"> 3 </span>
                </div>
            </div>
      <Drawer
      width={400}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className="drower_raspon_logo">
          <h3> My Cart </h3>
          <VscClose onClick={onClose} />
        </div>
        <div className="card__box_design_area">
          <div className="card_single_box">
            <img src={CarImg1} alt="okk"></img>
            <div className="card_box_text">
                <Link to="/product-details">  <h4 onClick={onClose}>Women fashion shoes</h4> </Link>
                <h6> ৳80 <del> ৳120.00  </del>  </h6>
                <p> 
                  <span> - </span> 
                  <input type="text" value="1"></input>
                  <span> + </span> 
                  
                </p>
                <div className="card_box_edit">
                  <CardBoxEdit />
                </div>
            </div>
          </div>
          <div className="card_single_box">
            <img src={CarImg1} alt="okk"></img>
            <div className="card_box_text">
            <Link to="/product-details">  <h4 onClick={onClose}>Women fashion shoes</h4> </Link>
                <h6> ৳80 <del> ৳120.00  </del>  </h6>
                <p> 
                  <span> - </span> 
                  <input type="text" value="1"></input>
                  <span> + </span> 
                  
                </p>
                <div className="card_box_edit">
                  <CardBoxEdit />
                </div>
            </div>
          </div>
          <div className="card_single_box">
            <img src={CarImg1} alt="okk"></img>
            <div className="card_box_text">
            <Link to="/product-details">  <h4 onClick={onClose}>Women fashion shoes</h4> </Link>
                <h6> ৳80 <del> ৳120.00  </del>  </h6>
                <p> 
                  <span> - </span> 
                  <input type="text" value="1"></input>
                  <span> + </span> 
                  
                </p>
                <div className="card_box_edit">
                  <CardBoxEdit />
                </div>
            </div>
          </div>
          <div className="card_single_box">
            <img src={CarImg1} alt="okk"></img>
            <div className="card_box_text">
            <Link to="/product-details">  <h4 onClick={onClose}>Women fashion shoes</h4> </Link>
                <h6> ৳80 <del> ৳120.00  </del>  </h6>
                <p> 
                  <span> - </span> 
                  <input type="text" value="1"></input>
                  <span> + </span> 
                  
                </p>
                <div className="card_box_edit">
                  <CardBoxEdit />
                </div>
            </div>
          </div>
          <div className="card_single_box">
            <img src={CarImg1} alt="okk"></img>
            <div className="card_box_text">
            <Link to="/product-details">  <h4 onClick={onClose}>Women fashion shoes</h4> </Link>
                <h6> ৳80 <del> ৳120.00  </del>  </h6>
                <p> 
                  <span> - </span> 
                  <input type="text" value="1"></input>
                  <span> + </span> 
                  
                </p>
                <div className="card_box_edit">
                  <CardBoxEdit />
                </div>
            </div>
          </div>
        </div>
        <div className="cart_total">
        <p>
          subtotal : <span>৳1050.00</span>
        </p>
        <p>
          shpping <span>free</span>
        </p>
        <p>
          taxes <span>৳0.00</span>
        </p>
        <p>
          <div className="total">
            total<span>৳1050.00</span>
          </div>
        </p>
        <p>
          <div className="buttons">
            <Link to="/cart"> <p onClick={onClose} className="btn btn-solid btn-block btn-md">View cart</p> </Link>
            <Link to="/checkout"> <p onClick={onClose} className="btn btn-solid btn-block btn-md">Checkout</p> </Link>
          </div>
        </p>
      </div>
      </Drawer>
        </div>
    )
}
