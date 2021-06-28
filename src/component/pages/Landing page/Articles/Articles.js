import React from 'react'
import './Articles.css'

import medicine from './medicine.png'
import schorlaship from './schorlaship.png'

const articlesData=[
    {
        image:medicine,
        title:'Why study medicine',
        content:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim minima eaque suscipit molestiae maiores porro cumque voluptatem corporis illo consequatur!`
    },
    {
        image:schorlaship,
        title:'I got the schorlaship yay!!',
        content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim minima eaque suscipit molestiae maiores porro cumque voluptatem corporis illo consequatur!'
    }

]

const Articles = () => {
    return (
        <>
           {articlesData.map((reads)=>{
               const {image, title,content}=reads
               return(
                   <ArticlesCard reads={reads}/>

               )
           })} 
        </>
    )
}
const ArticlesCard =(props)=>{
    const {image, title,content}=props.reads
    return(
        <>
        <div className='articles-image-text'>
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='content'>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
        </>
    )
}
export default Articles
