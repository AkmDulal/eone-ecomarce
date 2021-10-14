import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from 'antd';

import OwlCarousel from 'react-owl-carousel';

// import LogoImg1 from "../assets/images/mail/l01.jpeg"
// import MailImg1 from "../assets/images/mail/m01.jpg"
// import MailImg2 from "../assets/images/mail/m02.jpg"
// import MailImg3 from "../assets/images/mail/m03.jpg"
// import MailImg4 from "../assets/images/mail/m04.jpg"
// import MailImg5 from "../assets/images/mail/m05.jpg"
// import MailImg6 from "../assets/images/mail/m06.jpg"

export class EoneMail extends Component {
    constructor() {
        super()
        this.state = {
            responsive:{
                0: {
                    items: 2,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1280: {
                    items: 5,
                },
                1366: {
                    items: 6,
                },
            },
            mailarray: [
                { "logoimg": "assets/images/mail/l01.jpeg", "image": "assets/images/mail/m01.jpg", "title": "M.M Foods Ltd", "text":"M.M Foods Ltd "  },
                { "logoimg": "assets/images/mail/l01.jpeg", "image": "assets/images/mail/m02.jpg", "title": " S.Hoque International ", "text":" Authentic Pur & Cussons "  },
                { "logoimg": "assets/images/mail/l01.jpeg", "image": "assets/images/mail/m03.jpg", "title": " Kazi & Kazi Tea Ltd ", "text":" Kazi & Kazi Tea Ltd  "  },
                { "logoimg": "assets/images/mail/l01.jpeg", "image": "assets/images/mail/m04.jpg", "title": "Molfix ", "text":" Best Comfort Day & Night  "  },
                { "logoimg": "assets/images/mail/l01.jpeg", "image": "assets/images/mail/m05.jpg", "title": " Adarsha ", "text":" Refreshing Set of Books  "  },
                { "logoimg": "assets/images/mail/l01.jpeg", "image": "assets/images/mail/m06.jpg", "title": "Nestle ", "text":" Good Food, Good Life "  },
            ]
        }
        
    }
    render() {
        const { Search } = Input;
        return (
            <div className="eoan_mail_area">
                <Container>
                    <div className="section_header">
                        <h3> Eone Mall </h3>
                        <div className="section_header_right">
                            <Link className="header__btn" to="/"> View All </Link>
                        </div>
                        <div className="section_header_right">
                            <Search className="location_search" placeholder="Search....." />
                        </div>
                    </div>
                    <div className="email_box">

                    <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={true}
                            autoplay={true}
                            autoplayTimeout={4000}
                            responsive={this.state.responsive}
                        >
                        {this.state.mailarray.map((mail, i) =>
                            <div className="item" key={i}>
                                <Link to="/category" className="e_one_s_box">
                                    <img src={mail.image} alt=""></img>
                                    <img className="logo__mail" src={mail.logoimg} alt=""></img>
                                    <div className="e_one_s_box_text">
                                        <h3>  {mail.title}  </h3>
                                        <p>  {mail.text}  </p>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </OwlCarousel>
                    </div>
                </Container>
            </div>
        )
    }
}

export default EoneMail
