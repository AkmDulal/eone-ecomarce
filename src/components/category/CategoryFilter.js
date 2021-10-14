import React, { Component } from 'react'
import { Drawer } from 'antd';
import { VscFilter } from "react-icons/vsc";
import { Rate, Radio } from 'antd';
import { BiCaretRight } from "react-icons/bi";
import { Link } from 'react-router-dom';



export class CategoryFilter extends Component {
    state = { visible: false, placement: 'right' };
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };

    render() {
        const { placement, visible } = this.state;
        return (
            <div className="c_filter_area">
                <VscFilter onClick={this.showDrawer} />


                <Drawer
                  placement={placement}
                  closable={false}
                  onClose={this.onClose}
                  visible={visible}
                  key={placement}
                >
          <div className="categore_filter_area">
                <div className="price_filter">
                    <h3> Price </h3>
                    <input type="number" className=""></input>
                    <span> - </span>
                    <input type="number" className=""></input>
                    <BiCaretRight className="price_filter_btn" />
                </div>
                <div className="price_filter">
                    <h3> Service </h3>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio className="s_width" value={1}>Cash On Delivery</Radio>
                        <Radio className="s_width" value={2}>Fulfilled By Eone</Radio>
                    </Radio.Group>
                </div>
                <div className="price_filter">
                    <h3> Color Family </h3>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio className="s_width" value={1}>Pink</Radio>
                        <Radio className="s_width" value={2}>Green</Radio>
                        <Radio className="s_width" value={3}>Lemon Yellow</Radio>
                    </Radio.Group>
                </div>
                <div className="price_filter price_filter_bttm">
                    <h3> Rating </h3>
                    <Rate className="s_width" allowHalf defaultValue={5} />
                    <Rate className="s_width" allowHalf defaultValue={4.5} />
                    <Rate className="s_width" allowHalf defaultValue={3.5} />
                    <Rate className="s_width" allowHalf defaultValue={2.5} />
                    <Rate className="s_width" allowHalf defaultValue={1.5} />
                </div>
                <div className="fillter__btn_area">
                    <Link className="fillter__btn_area_btn" to=""> Reset </Link>
                    <Link className="fillter__btn_area_btn" to=""> Done </Link>
                </div>
            </div>
        </Drawer>
            </div>
        )
    }
}

export default CategoryFilter
