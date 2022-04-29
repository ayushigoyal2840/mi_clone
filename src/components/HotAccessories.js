import React from 'react'
import HotItemCard from "./HotItemCard.js"
// import "../styles/HotAccessories.css"


const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
    return (
        <div  className="HotAccessories">

             <div>
                 <img src={musicCover} alt="cover" />
                  
                            
              </div>
                <div>
                    {
                        music.map((item,index)=>(
                            <HotItemCard key={item.image} name={item.name} image={item.image} index={index} />
                        ))
                    }
                </div>
        </div>
    )
}

export default HotAccessories