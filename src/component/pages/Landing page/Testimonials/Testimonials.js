import React from 'react'
import './Testimonials.css'

import testimonial1 from './testimonial 1.png'
import testimonial2 from './testimonial 2.png'

const testimonialData=[
    {
        testimony:'I love the idea that this platform has birthed. You don’t know how stressful it is to search dozens of platform without actually knowing what you are looking for. Thank you school scout',
        names:'Edijana George',
        status:'Student,Lagos State University',
        image:testimonial1
    },
    {
        testimony:'The career advice is exceptional. It gives you a list of courses that would be great for you. I had a course to study in mind, but I just needed to test that feature. And the course I had in mind was part of the 3 suggestions given.',
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
            <p className="testimony">{testimony}</p>
        </div>
        <div className='testimonial-card-bottom'>
            <div className="tst-crd">
                <p className="testimony-name">{names}</p>
                <p>{status}</p>
            </div>
            <div className="testimony-profile-container">
                <img className="testimonial-profile" src={image} alt="" />
            </div>
        </div>
    </div>
    </>
    )
}
export default Testimonials
