import React, {useState} from 'react'

import './Faq.css'

import close from './close.svg'
import open from './open.svg'
const FaqData =[
    {
        id:1,
        question: 'What is school scout all about?',
        answer:`It's a platform that enables you to get information on different schools that you might be interested in, without you going to different websites to search. It gives you all the information you need, all in one place.`
    },
    {
        id:2,
        question:'How does the career advisory work?',
        answer: 'If you don’t have an idea of what course to study at the university, you would answer a few questions about your skills and passion, and what you are good at, and we would suggest some great courses for you.'
    },
    {
        id:3,
        question:'Can I save schools and courses that I have an interest in, to read at a later time?',
        answer: 'Yes, you can save schools and courses by just clicking on the bookmark icons on anything you want to save'
    },
    {
        id:4,
        question:'How do I access my saved pages?',
        answer:'You can access your saved pages from the navbar, and on your profile'
    },
    {
        id:5,
        question:'How do I check for specific scholarships that I may be interested in?',
        answer:'You could use the search button on any page to search for scholarships and other things you want to search for'
    },
    {
        id:6,
        question:'Do I get notifications when new scholarships are posted?',
        answer:'You get notifications for scholarships when you sign up or subscribe to our newsletter'
    },
    {
        id:7,
        question:'How do I leave a review?',
        answer:'You can leave a review by going to the testimonials section of the homepage, clicking it and leaving a review'
    },
]

const Faq = () => {
    return (
        <>
          {FaqData.map((item)=>{
              return(
                  <>
                    <Content key={FaqData.id} {...item}/>
                  </>
              )
          })} 
           </>
    )
}
const Content = (props) => {
    const [isActive, setIsActive] = useState(false)
    const {question, answer} = props
    return(
        <>
        <div className='question' onClick={()=> setIsActive(!isActive)}>
         <h2>{question}</h2>
        <div>{isActive ? <img src={open}/> : <img src={close}/>  }</div>
        </div>
         {isActive && <div className='answer'><p>{answer}</p></div>}
        </>
    )
}

export default Faq
