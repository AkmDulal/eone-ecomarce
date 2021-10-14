import React, { Component } from 'react'

// Icon
import { BiMenuAltRight } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
// VscClose
import { Drawer, Menu  } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

// Images 
import Logo from "../assets/images/logo.gif";
import LocationComponent from './LocationComponent';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export class RasponsiveCatagores extends Component {
    state = { visible: false, placement: 'left' };

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
    handleClick = e => {
        console.log('click ', e);
      };
    render() {
        const { placement, visible } = this.state;
        return (
            <div className="rasponsive_catagore_area">
                <p onClick={this.showDrawer}> <BiMenuAltRight className="catagore__icon" />  <span className="cataGG_Txt"> ALL CATEGORIES </span>  </p>
                <Drawer
                        placement={placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={visible}
                        key={placement}
                        className="rasponsive_catagore_area_two"
                        
                    >
                      <div className="drower_raspon_logo">
                        <img src={Logo} alt="logo"></img>
                        <VscClose onClick={this.onClose} />
                        <div className="drower_location_search">
                          <LocationComponent />
                        </div>
                      </div>
                        <Menu
                            onClick={this.handleClick}
                            defaultSelectedKeys={['1']}
                            mode="inline"
                        >
                            
                            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Electronic Accessories">
                              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Submenu">
                                  <Menu.Item key="7">  <Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link> </Menu.Item>
                                  <Menu.Item key="8"> <Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link> </Menu.Item>
                              </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Electronic Devices">
                              <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Submenu">
                                  <Menu.Item key="7"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                                  <Menu.Item key="8"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                              </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub5" icon={<AppstoreOutlined />} title="TV & Home Appliances">
                              <SubMenu key="sub6" icon={<AppstoreOutlined />} title="Submenu">
                                  <Menu.Item key="7"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                                  <Menu.Item key="8"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                              </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub7" icon={<AppstoreOutlined />} title="Health & Beauty">
                              <SubMenu key="sub8" icon={<AppstoreOutlined />} title="Submenu">
                                  <Menu.Item key="7"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                                  <Menu.Item key="8"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                              </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub9" icon={<AppstoreOutlined />} title="Babies & Toys">
                              <SubMenu key="sub10" icon={<AppstoreOutlined />} title="Submenu">
                                  <Menu.Item key="7"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                                  <Menu.Item key="8"><Link to="/category" onClick={this.onClose}>  Phone Cases & Covers  </Link></Menu.Item>
                              </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Drawer>
            </div>
        )
    }
}

export default RasponsiveCatagores
