import React from 'react'

import './SchoolCard.css'

import ui from './ui.png'
import ilorin from './uni ilorin.png'
import lasu from './lasu.png'
import cu from './covenant uni.png'

const cardData=[
    {image:ui,
    schoolName:'University of Ibadan, Oyo State'},
    {image: ilorin,
    schoolName:'University of Ilorin, Kwara State'},
    {image: lasu,
    schoolName:'Lagos State University, Lagos State'},
    {image: cu,
    schoolName:'Covenant University, Ogun State'},
]

const SchoolCard = () => {
        return(
            <>
           {cardData.map((cardItem)=>{
               const {image, schoolName}=cardItem
               return(
                   <Card cardItem={cardItem}/>

               )
           })}
            </>
        )
}
const Card =(props)=>{
    const {image, schoolName}=props.cardItem
    return(
        <>
        <div className="school-card">
        <img src={image} alt="" />
        <p className='school'>{schoolName}</p>
        </div>
        
        </>
    )
}
export default SchoolCard
