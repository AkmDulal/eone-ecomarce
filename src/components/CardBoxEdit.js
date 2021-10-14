import React from 'react'
import { BiLinkExternal, BiTrashAlt } from 'react-icons/bi'
import { Modal, Radio } from 'antd';

import CarImg1 from "../assets/images/car_1.jpg" 



function CardBoxEdit() {
    const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  // const [modalText, setModalText] = React.useState('Content of the modal');


  
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
    return (
        <div>
            <BiLinkExternal onClick={showModal} />
                  <BiTrashAlt />
                <Modal
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <div className="cart__edit__area">
                      <div className="cart__edit__images">
                          <img src={CarImg1} alt=""></img>
                          <h4>Women fashion shoes</h4>
                          <h6> ৳80   </h6>
                      </div>
                      <div className="cart__edit__qulity">
                          <h4>Select Size</h4>
                          <div className="card_box_text">
                          <Radio.Group buttonStyle="solid">
                            <Radio.Button className="card_box_sizee" value="a">S</Radio.Button>
                            <Radio.Button className="card_box_sizee" value="b">M</Radio.Button>
                            <Radio.Button className="card_box_sizee" value="c">XS</Radio.Button>
                            <Radio.Button className="card_box_sizee" value="d">XL</Radio.Button>
                            <Radio.Button className="card_box_sizee" value="e">Ml</Radio.Button>
                          </Radio.Group>
                        </div>
                      </div>
                      <div className="cart__edit__qulity">
                          <h4>Select color</h4>
                          <div className="card_box_text">
                          <Radio.Group name="radiogroup" defaultValue={1}>
                            <Radio className="bg_color" value={1}></Radio>
                            <Radio className="bg_color1" value={2}></Radio>
                            <Radio className="bg_color2" value={3}></Radio>
                            <Radio className="bg_color3" value={4}></Radio>
                            <Radio className="bg_color2" value={5}></Radio>
                            <Radio className="bg_color3" value={6}></Radio>
                          </Radio.Group>
                        </div>
                      </div>
                      <div className="cart__edit__qulity">
                          <h4>Quantity</h4>
                          <div className="card_box_text">
                            <p> 
                              <span> - </span> 
                              <input type="text" value="1"></input>
                              <span> + </span> 
                            </p>
                        </div>
                      </div>
                      <div className="buttons cart_edit_buttons">
                        <p >add to cart</p>
                        <p >more detail</p>
                      </div>
                    </div>
                </Modal>
        </div>
    )
}

export default CardBoxEdit
