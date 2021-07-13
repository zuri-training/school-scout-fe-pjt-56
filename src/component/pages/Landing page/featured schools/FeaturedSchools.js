import React from 'react'

import ui from './ui.png'
import ilorin from './uni ilorin.png'
import lasu from './lasu.png'
import cu from './covenant uni.png'


const schoolData=[
    {image:ui,
        schoolName:'University of Ibadan, Oyo State'},
        {image: ilorin,
        schoolName:'University of Ilorin, Kwara State'},
        {image: lasu,
        schoolName:'Lagos State University, Lagos State'},
        {image: cu,
        schoolName:'Covenant University, Ogun State'}
]

const FeaturedSchools = () => {
    return (
        <>
        {schoolData.map((school)=>{
            const {image,schoolName}=school
            return(
                <FeaturedCard school={school}/>
            )
        })}
        </>
    )
}
const FeaturedCard = (props) =>{
    const {image,schoolName} =props.school
    return(
        <>
        <div className='feature-text'>
            <img src={image} alt="" />
            <p>{schoolName}</p>
        </div>
        </>
    )
}
export default FeaturedSchools
