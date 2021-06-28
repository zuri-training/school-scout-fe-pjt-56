import React from 'react'
import './Articles.css'

import medicine from './medicine.png'
import schorlaship from './schorlaship.png'

const articlesData=[
    {
        image:medicine,
        title:'Why study medicine',
        content:`When I was much younger, I had wanted to study medicine, but then when I grew up, I realized I had an abject fear of blood. Lol. Dont laugh at me please. I don’t know... Read more`
    },
    {
        image:schorlaship,
        title:'I got the schorlaship yay!!',
        content:'I guess you would be wondering why I am this excited. Let me give you gist. By the way, I came with ways on how you can easily get that scholarship. Oh yes, I am that nice. Lol. Back to the gist oo, I have... Read more'
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
