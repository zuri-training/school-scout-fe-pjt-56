import React from 'react'
import './SiteOption.css'

//images
import career from './career advisory.png'
import compare from './compare schools.png'
import explore from './Explore schools.png'
import schorlaship from './find schorlaship.png'
import arrow from './arrow.svg'


//data
const optionData = [
    {image:explore,option:'Explore Schools'},
    {image:compare,option:'Compare Schools'},
    {image:career,option:'Career Advisory'},
    {image:schorlaship,option:'Find Schorlaship'},
]
const SiteOptions = () => {
    return (
        <>
        {optionData.map((options)=>{
            const {image,option}=options
            return(
                <>
                    <OptionCard options={options}/>
                </>
            )
        })}
        </>
    )
}
const OptionCard = (props) =>{
    const {image, option} =props.options
    return(
        <>
            <div className="option-card">
                <img src={image} alt="" />
                <div className="lower">
                    <p>{option}</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </>
    )
}

export default SiteOptions
