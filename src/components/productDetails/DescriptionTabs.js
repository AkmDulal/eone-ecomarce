import React, { Component } from 'react'
import { Tabs } from 'antd';
import { VscCheck } from "react-icons/vsc";

import DesImg from "../../assets/images/des_img.jpg" 
import VendorImg from "../../assets/images/vendor_img.jpg" 
import VendorLogo from "../../assets/images/vendor_logo.jpg" 
// Rate 
import { Rate, Progress, Checkbox    } from 'antd';
export class DescriptionTabs extends Component {
    render() {
        const { TabPane } = Tabs;
        return (
            <div className="description_area">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Description" key="1">
                        <div className="description__cont_area">
                            <h4>  Details </h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="description__text">
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt arcu cursus vitae congue mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus pelle Vel pretium lectus quam id leo in vitae turpis massa. </p>
                                        <p className="description_text__title"> <VscCheck /> Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.  </p>
                                        <p className="description_text__title"> <VscCheck /> Vivamus finibus vel mauris ut vehicula.  </p>
                                        <p className="description_text__title"> <VscCheck /> Nullam a magna porttitor, dictum risus nec, faucibus sapien.   </p>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6">
                                    <div className="description__text">
                                       <img src={DesImg} alt="images"></img>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="description__text">
                                        <h4> <span> 1 </span> Free Shipping & Return </h4>
                                        <p className="description__text_padding"> We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US. </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="description__text">
                                        <h4> <span> 2 </span> Free and Easy Returns </h4>
                                        <p className="description__text_padding"> We guarantee our products and you could get back all of your money anytime you want in 30 days. </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="description__text">
                                        <h4> <span> 3 </span> Special Financing  </h4>
                                        <p className="description__text_padding"> Get 20%-50% off items over 50$ for a month or over 250$ for a year with our special credit card. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Specification" key="2">
                        <div className="description__cont_area">
                            <p> Model  <span> Skysuite 320 </span> </p>
                            <p> Color  <span> Black </span> </p>
                            <p> Size  <span> Large, Small </span> </p>
                            <p> Guarantee Time  <span> 3 Months </span> </p>
                        </div>
                    </TabPane>
                    <TabPane tab="Vendor Info" key="3">
                        <div className="description__cont_area">
                            <h4>  Details </h4>
                            <div className="row">
                            <div className="col-lg-6">
                                    <div className="description__text">
                                       <img src={VendorImg} alt="images"></img>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="description__text">
                                        <div className="vandor_frofile">
                                            <img src={VendorLogo} alt="images"></img>
                                            <div className="vandor_frofile_nme">
                                                <h3> Jone Doe </h3>
                                                <Rate allowHalf defaultValue={3.5} />
                                            </div>
                                        </div>
                                        <p> Store Name:  <span>  Steven Street, El Carjon, CA 92020, United States (US) </span> </p>
                                        <p> Address:  <span> Black </span> </p>
                                        <p> Phone:  <span> 1234567890 </span> </p>
                                    </div>
                                    
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="description__text">
                                        
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis. Vel pretium lectus quam id leo in vitae turpis massa. Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam id diam maecenas ultricies mi eget mauris. Volutpat ac tincidunt vitae semper quis lectus. Vestibulum mattis ullamcorper velit sed. A arcu cursus vitae congue mauris. 
                                             <br></br> 
                                             <br></br> 

                                             A arcu cursus vitae congue mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Diam in arcu cursus euismod quis. Eget sit amet tellus cras adipiscing enim eu. In fermentum et sollicitudin ac orci phasellus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem fringilla.   
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Customer Reviews (3)" key="4">
                    <div className="description__cont_area">
                            <h4>  Details </h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="description__text">
                                      <div className="average_rating">
                                        <h2> 3.3 </h2>
                                            <div className="vandor_frofile_nme">
                                                <h3> Average Rating </h3>
                                                <Rate allowHalf defaultValue={3.5} /> <span className="vandor_frofile_nme_span">  (3 Reviews) </span>
                                            </div>
                                      </div>
                                      <div className="recomment_box">
                                          <h5>  66.7% <span>  Recommended(2 of 3) </span>  </h5>
                                      </div>
                                      <div className="average_rating">
                                            <Rate allowHalf defaultValue={5} />
                                            <div className="vandor_frofile_nme">
                                                <div style={{ width: 170 }}>
                                                    <Progress percent={60} size="small" />
                                                </div>
                                            </div>
                                      </div>
                                      <div className="average_rating">
                                            <Rate allowHalf defaultValue={4.5} />
                                            <div className="vandor_frofile_nme">
                                                <div style={{ width: 170 }}>
                                                    <Progress percent={40} size="small" />
                                                </div>
                                            </div>
                                      </div>
                                      <div className="average_rating">
                                            <Rate allowHalf defaultValue={3.5} />
                                            <div className="vandor_frofile_nme">
                                                <div style={{ width: 170 }}>
                                                    <Progress percent={30} size="small" />
                                                </div>
                                            </div>
                                      </div>
                                      <div className="average_rating">
                                            <Rate allowHalf defaultValue={2.5} />
                                            <div className="vandor_frofile_nme">
                                                <div style={{ width: 170 }}>
                                                    <Progress percent={0} size="small" />
                                                </div>
                                            </div>
                                      </div>
                                      <div className="average_rating">
                                            <Rate allowHalf defaultValue={1.5} />
                                            <div className="vandor_frofile_nme">
                                                <div style={{ width: 170 }}>
                                                    <Progress percent={0} size="small" />
                                                </div>
                                            </div>
                                      </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-8">
                                    <div className="description__text">
                                       <div className="review_submit_area">
                                           <div className="review_submit_area_header">
                                               <h3> Submit Your Review </h3>
                                               <p> Your email address will not be published. Required fields are marked * </p>
                                           </div>
                                           <div className="average_rating">
                                              <span className="average_rating___span">   Your Rating Of This Product :  </span>  <Rate allowHalf defaultValue={.5} />
                                            </div>
                                            <div className="user__fild_area">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <textarea placeholder="Write Your Review Here..." class="form-control textarea__text"></textarea>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form_group">
                                                            <input type="text" class="form-control" placeholder="Your Name"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form_group">
                                                            <input type="text" class="form-control" placeholder="Your Email"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form_group">
                                                        <Checkbox >Save my name, email, and website in this browser for the next time I comment.</Checkbox >
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="submit_btn" type="submit"> Submit Review </button>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default DescriptionTabs





