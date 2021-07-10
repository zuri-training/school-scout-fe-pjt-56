import React from 'react'
import './LocationCard.css'

import Lagos from './Lagos.png'
import Edo from './Edo.png'
import Osun from './Osun.png'
import Kwara from './Kwara.png'
import arrow from './arrow.svg'

const LocationData=[
    {image:Lagos,
    Location:'Lagos State'},
    {image: Edo,
    Location:'Edo State'},
    {image: Osun,
    Location:'Osun State'},
    {image: Kwara,
    Location:'Kwara State'},
]
 
const LocationCard = () => {
        return(
            <>
           {LocationData.map((places)=>{
               const {image, Location}=places
               return(
                   <Card places={places}/>

               )
           })}
            </>
        )
}
const Card =(props)=>{
    const {image, Location}=props.places
    return(
        <>
        <div className="location-card">
            <img src={image} alt="" />
            <div className='location-lower'>
                <p className='location'>{Location}</p>
                <img src={arrow} alt="" />
            </div>
        </div>
        </> 
    )
}
export default LocationCard
