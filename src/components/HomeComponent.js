import React, {useState, useEffect} from 'react'
import FacilitatedComponent from './FacilitatedComponent'
import FlashSaleComponent from './FlashSaleComponent'
import FooterFacilitatedComponent from './FooterFacilitatedComponent'
import JustForYouComponent from './JustForYouComponent'
import MostPopulerComponent from './MostPopulerComponent'
import PopularCategories from './PopularCategories'
import PopupComponent from './PopupComponent'
import SliderComponent from "./SliderComponent"

import { BackTop } from 'antd';
import EoneMail from './EoneMail'

// import LoadingScreenCustom from "./LocationComponent";

function HomeComponent() {
    const [ timedPopup, setTimedPopup ] = useState(false); 
     useEffect(() => {
      setTimeout(()=>{
          setTimedPopup(false);
        }, 1000);
      }, [])


    return (
        <div className="test__">
            <BackTop />
            <PopupComponent trigger={timedPopup} setTrigger={setTimedPopup} />
            <SliderComponent />
            <FacilitatedComponent />
            <PopularCategories />
            <EoneMail />
            <FlashSaleComponent />
            <MostPopulerComponent />
            <JustForYouComponent />
            <FooterFacilitatedComponent />
            
        </div>
    )
}

export default HomeComponent

