import React from 'react'
import './CourseCard.css'

import Art from './artist.svg'
import Science from './healthcare.svg'
import Lawyer from './lawyer.svg'
import Medicine from './save.svg'
import Pharmacist from './pharmacist.svg'
import publicHealth from './save.svg'
import Economics from './recession.svg'
import Engineer from './technician.svg'
import Computer from './engineer.svg'
import Agriculture from './harvest.svg'
import Languages from './languages.svg'

const cardData=[
    {cardText:'Art',Icon: Art},
    {cardText:'Life Sciences',Icon: Science},
    { cardText:'Law',Icon: Lawyer},
    {cardText:'Medicine',Icon: Medicine},
    {cardText:'Pharmacy',Icon: Pharmacist},
    {cardText:'Education',Icon: Art},
    {cardText:'Public Health',Icon: publicHealth},
    {cardText:'Economics', Icon: Economics},
    {cardText:'Computer Science',Icon: Computer},
    {cardText:'Engineering',Icon: Engineer},
    {cardText:'Agriculture',Icon: Agriculture},
    {cardText:'Languages',Icon: Languages},
]
const CourseCard = () => {
    return(
        <>
        {cardData.map((course)=>{
            const {cardText, Icon}=course
            return(
                <>
                <CourseCardItem course={course}/>
                </>
            )
        })}
        </>
    )
 
    
}
const CourseCardItem = (props) => {
    const {cardText,Icon}=props.course
    return(
        <>
            <div className="course-card">
                <div className="card-text">
                    <h6 className='coursename'>{cardText}</h6> 
                </div>
                <div className="card-icon">
                    <img src={Icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default CourseCard
