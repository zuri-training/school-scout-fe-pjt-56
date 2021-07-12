import './ScholarshipDetails.css'
import ScholarshipDetailsList from './ScholarshipDetailsList';
import ScholarshipLikeGrid from './ScholarshipLikeGrid';
import { useState } from 'react';
import adImage from './images/adImage.png';
import schDetailsMain from './images/schDetailsMain.png';
import student from '../Scholarship/images/student.jpg'
import campus from '../Scholarship/images/campus.png'
import enrollees from '../Scholarship/images/enrollees.png'

const ScholarshipDetails = () => {

    const [ScholarshipDetailsData, setScholarshipDetailsData] = useState([
        {
            id: 1, 
            heading: 'Dare undergraduate scholarship scheme for Oyo state indigenes', 
            image: schDetailsMain, 
            p1: 'As part of the activities marking the 55th birthday celebrations of the Honourable Minister for youth and sports development, Chief Sunday Akin Dare, we are pleased to announce scholarship opportunities for indigent undergraduate students of Oyo state, under the Dare Undergraduate Scholarship Scheme (DUGSS). \n\nThis is in furtherance of the Minister\'s penchant for youth development and growth as well as providing support for indigent students of Oyo state.', 
            l1: 'https://www.google.com', 
            p2: 'Eligibility: The applicant must be an indigene of Oyo state \n- He/She must be a student of any University or Polytechnic in Nigeria. \n- Only applicants in 200L and 300L with CGPA of 3.5 and above are eligible to apply. \n\nSubmission: Applicants should attach an introductory or cover letter to the under listed documents which should be sent to dugscholarship@gmail.com \n1. Admission Letter. \n2. Authorized Letter affirming GPA. \n3. Certificate of State of Origin. \n4. Passport photograph. \n\nDuly qualified applicants will be contacted. \n\nThe duly completed application form must be filled and submitted online latest 29th June 2021 at https://forms.gle/nCUPMdiKVN9cw6ac8.', 
            imageSide: adImage
        }
    ])

    const [ScholarshipLikeCardList, setScholarshipLikeCardList] = useState([
        {
            id: 1,
            image: student,
            title: 'Study in Nigeria: EduGrant Scholarship for Excellence 2021'
        },
        {
            id: 2,
            image: campus,
            title: 'Corporate Scholarships at Wavecrest College of Hospitality, Nigeria 2021'
        },
        {
            id: 3,
            image: enrollees,
            title: '2021 High-Potential Scholarships at MCI Enterpreneurial school, Austria'
        },
    ])

    return (
        <>
            <ScholarshipDetailsList schDetMain={ScholarshipDetailsData} />
            <div className="sch-det-like-section sch-det-padding">
                <p className="sch-det-like-heading">You may also like</p>
                <div className="sch-like-grid max-width">
                    <ScholarshipLikeGrid schDetLike={ScholarshipLikeCardList}/>
                </div>
            </div>
        </>
    );
}
 
export default ScholarshipDetails;