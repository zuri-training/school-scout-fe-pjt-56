import React from 'react'
import './Testimonials.css'

import testimonial1 from './testimonial 1.png'
import testimonial2 from './testimonial 2.png'

const testimonialData=[
    {
        testimony:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem possimus inventore a officiis nisi, ad nulla et ea aperiam.',
        names:'Edijana George',
        status:'Student,Lagos State University',
        image:testimonial1
    },
    {
        testimony:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem possimus inventore a officiis nisi, ad nulla et ea aperiam.',
        names:'Yosef Otu',
        status:'Secondary school graduate',
        image:testimonial2
    }
]

const Testimonials = () => {
    return (
        <>
            {testimonialData.map((testament)=>{
                const {testimony,name,status,image}=testament
                return(
                    <TestimonialCard testament={testament}/>
                )
            })}
        </>
    )
}

const TestimonialCard =(props) =>{
    const {testimony,names,status,image}=props.testament
    return(
    <>
    <div className='testimonial-container'>
        <div>
            <p>{testimony}</p>
        </div>
        <div className='testimonial-card-bottom'>
            <div>
                <p>{names}</p>
                <p>{status}</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
    </>
    )
}
export default Testimonials
