import React from 'react'
import '../../Scholarship/Scholarship.css'
import { ScholarshipAsideCardData } from '../../Scholarship/Card/Card'


export const ScholarshipAsideCard = () => {
    return (
        ScholarshipAsideCardData.map(item => {
            return (
                <div className="schlshp-asd-card-container">
                    <h2 className="schlshp-asd-card-header">{ item.heading }</h2>
                    <div className="schlshp-asd-card-body">
                        <a href="./">
                            <div className="schlshp-asd-card-img">
                                <img src={ item.img } alt="" />
                            </div>
                            <p className="schlshp-asd-card-title">{ item.caption }</p>
                        </a>
                    </div>
                </div>
            )
        })
    )
}
