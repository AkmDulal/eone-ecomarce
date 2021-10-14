import React, { useState } from 'react';
import { Modal, Input } from 'antd';
// Icon 
import { VscChevronDown } from "react-icons/vsc";

export default function LocationComponent() {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Search } = Input;
    return (
        <div>
            <div className="location_btn" onClick={showModal}>
                <span className="location-description">Your Location</span>
                <div className="location_text">Select a Location</div>
                <VscChevronDown className="location_icon" />
            </div>
            <Modal visible={isModalVisible} onCancel={handleCancel}>
                <h3 className="entry-title"> Choose your Delivery Location </h3>
                <h5 className="entry-description"> Enter your address and we will specify the offer for your area. </h5>
                <div className="location_details">
                    <Search className="location_search" placeholder="Search your area" />
                    <div className="all_location_name">
                        <div  className="location_name" >
                            <p onClick={handleOk}>Select Your Location <span>  clear All </span> </p>
                        </div>
                        <div  className="location_name" >
                            <p onClick={handleOk}>Dhaka 01 <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name">
                            <p onClick={handleOk}>Chittagong <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name">
                            <p onClick={handleOk}>Rangpur  <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name">
                            <p onClick={handleOk}>Rajshahi  <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name">
                            <p onClick={handleOk}>Jashore  <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name">
                            <p onClick={handleOk}>Sylhet  <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name">
                            <p onClick={handleOk}>Dinajpur  <span>  min: $130 </span> </p>
                        </div>
                        <div className="location_name" >
                            <p onClick={handleOk}>Mymensingh  <span>  min: $130 </span> </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
