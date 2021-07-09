import React from 'react'
import './SiteOption.css'

//images
import career from './career advisory.png'
import compare from './compare schools.png'
import explore from './Explore schools.png'
import schorlaship from './find schorlaship.png'
import arrow from './arrow.svg'
import { Link } from 'react-router-dom'


//data
const optionData = [
    {image:explore,option:'Explore Schools', path: process.env.PUBLIC_URL + '/explore-schools'},
    {image:compare,option:'Compare Schools', path: process.env.PUBLIC_URL + '/compare-school'},
    {image:career,option:'Career Advisory', path: process.env.PUBLIC_URL + '/career-advisory'},
    {image:schorlaship,option:'Find Schorlaship', path: process.env.PUBLIC_URL + '/scholarship'},
]
const SiteOptions = () => {
    return (
        <>
        {optionData.map((options)=>{
            const {image,option, path}=options
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
    const {image, option, path} =props.options
    return(
        <>
            <div className="option-card">
                <img src={image} alt="" />
                <div className="lower">
                    <Link className="lower-link" to={ path }>
                        <p>{option}</p>
                        <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SiteOptions
