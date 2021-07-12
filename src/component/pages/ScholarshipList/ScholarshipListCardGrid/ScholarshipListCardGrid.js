import React from 'react';
import { ScholarshipListCard } from "../ScholarshipListCard/ScholarshipListCard";
import '../../Scholarship/Scholarship.css'

export const ScholarshipListCardGrid = () => {
    return (
        <div className="block grid schlshp-lst-card-grid">
            <ScholarshipListCard />
        </div>
    )
}

export default ScholarshipListCardGrid
