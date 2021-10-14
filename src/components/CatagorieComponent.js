import React from 'react'
import { Menu } from 'antd';
import {  AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
  }

export default function CatagorieComponent() {
    return (
        <div>
            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
            <h3 className="catagore_title"> <BiMenuAltRight /> ALL CATEGORIES </h3>
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Electronic Accessories">
                    <SubMenu key="sub2" title="Mobile Accessories">
                        <Menu.Item key="1"> <Link to="/category"> Phone Cases & Covers </Link> </Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub3" icon={<SettingOutlined />} title="Electronic Devices">
                    <SubMenu key="sub4" title="Mobile Accessories">
                        <Menu.Item key="3"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub04" icon={<SettingOutlined />} title="TV & Home Appliances">
                    <SubMenu key="sub05" title="Mobile Accessories">
                        <Menu.Item key="4"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub6" icon={<SettingOutlined />} title="Health & Beauty">
                    <SubMenu key="sub7" title="Mobile Accessories">
                        <Menu.Item key="5"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub8" icon={<SettingOutlined />} title="Babies & Toys">
                    <SubMenu key="sub9" title="Mobile Accessories">
                        <Menu.Item key="6"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub10" icon={<SettingOutlined />} title="Groceries & Pets">
                    <SubMenu key="sub11" title="Mobile Accessories">
                        <Menu.Item key="7"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub12" icon={<SettingOutlined />} title="Home & Lifestyle">
                    <SubMenu key="sub13" title="Mobile Accessories">
                        <Menu.Item key="8"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub14" icon={<SettingOutlined />} title="TV & Home Appliances">
                    <SubMenu key="sub15" title="Mobile Accessories">
                        <Menu.Item key="9"><Link to="/category"> Phone Cases & Covers </Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <Link to="/all-categories">
                    <h3 className="all_categories_btn"> View All Categories </h3>
                </Link>
            </Menu>
        </div>
    )
}
