import React from "react";
import { ScholarshipHeaderBlue } from "./../../../shared/ScholarshipHeaderBlue/ScholarshipHeaderBlue";
import Footer from "./../../../shared/footer/Footer";
import { Header } from "./../ExploreCoursesComps/Header/ExploreHeader";
import SchoolLists from "./../ExploreCoursesComps/schools/SchoolLists";

// Card Images
import cardImage1 from "./CardsImages/Rectangle 134.png";
import cardImage2 from "./CardsImages/Rectangle 134-1.png";
import cardImage3 from "./CardsImages/Rectangle 134-2.png";
import cardImage4 from "./CardsImages/Rectangle 134-3.png";
import cardImage5 from "./CardsImages/Rectangle 134-4.png";
import cardImage6 from "./CardsImages/Rectangle 134-5.png";
import cardImage7 from "./CardsImages/Rectangle 134-6.png";
import cardImage8 from "./CardsImages/Rectangle 134-7.png";
import cardImage9 from "./CardsImages/Rectangle 134-8.png";
import cardImage10 from "./CardsImages/Rectangle 134-9.png";
import cardImage11 from "./CardsImages/Rectangle 134-10.png";
import cardImage12 from "./CardsImages/Rectangle 134-11.png";
import bookmark from "../ExploreCoursesComps/Icons/bookmark-solid.svg";

const SCHOOL_DETAILS = [
  {
    id: "box44",
    image: cardImage1,
    bookmarkIcon: bookmark,
    schoolName: "Babcock University Llishan Remo",
    course: "Computer Science",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$210 per Semester",
    address: "Location",
    addressState: "Ogun State",
    duration: "Duration",
    durationYears: "4 years",
    button: "Compare",
  },
  {
    id: "box45",
    image: cardImage2,
    bookmarkIcon: bookmark,
    schoolName: "Babcock University Llishan Remo",
    course: "Computer Science",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$250 per Semester",
    address: "Location",
    addressState: "Ogun State",
    duration: "Duration",
    durationYears: "24 Months",
    button: "Compare",
  },
  {
    id: "box46",
    image: cardImage3,
    bookmarkIcon: bookmark,
    schoolName: "Covenant University Ota",
    course: "Computer Science",
    program: "Program",
    programName: "Master’s Degree",
    tuition: "Tuition",
    tuitionPrice: "$800 per Semester",
    address: "Location",
    addressState: "Ogun State",
    duration: "Duration",
    durationYears: "4 years",
    button: "Compare",
  },
  {
    id: "box47",
    image: cardImage4,
    bookmarkIcon: bookmark,
    schoolName: "Covenant University Ota",
    course: "Computer Science",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$800 per Semester",
    address: "Location",
    addressState: "Ogun State",
    duration: "Duration",
    durationYears: "4 years",
    button: "Compare",
  },
  {
    id: "box48",
    image: cardImage5,
    bookmarkIcon: bookmark,
    schoolName: "Federal University of science and Technology Akure",
    course: "Computer Science",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$150 per Semester",
    address: "Location",
    addressState: "Ondo State",
    duration: "Duration",
    durationYears: "4 years",
    button: "Compare",
  },
  {
    id: "box49",
    image: cardImage6,
    bookmarkIcon: bookmark,
    schoolName: "Federal University of science and Technology Akure",
    course: "Computer Science",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$200 per Semester",
    address: "Location",
    addressState: "Ondo State",
    duration: "Duration",
    durationYears: "24 Months",
    button: "Compare",
  },
  {
    id: "box50",
    image: cardImage7,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State university ",
    course: "Computer Science",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$250 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "4 years",
    button: "Compare",
  },
  {
    id: "box51",
    image: cardImage8,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State university",
    course: "Computer Science",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$300 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "24 Months",
    button: "Compare",
  },
  {
    id: "box52",
    image: cardImage9,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State Polytechnic",
    course: "Computer Science",
    program: "Program",
    programName: "Higher Diploma",
    tuition: "Tuition",
    tuitionPrice: "$80 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "2 years",
    button: "Compare",
  },
  {
    id: "box53",
    image: cardImage10,
    bookmarkIcon: bookmark,
    schoolName: "Osun State University Osogbo",
    course: "Computer Science",
    program: "Program",
    programName: "Bachelor’s Degree",
    tuition: "Tuition",
    tuitionPrice: "$200 per Semester",
    address: "Location",
    addressState: "Osun State",
    duration: "Duration",
    durationYears: "4 years",
    button: "Compare",
  },
  {
    id: "box54",
    image: cardImage11,
    bookmarkIcon: bookmark,
    schoolName: "Osun State university Osogbo",
    course: "Computer Science",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$250 per Semester",
    address: "Location",
    addressState: "Osun State",
    duration: "Duration",
    durationYears: "24 Months",
    button: "Compare",
  },
  {
    id: "box55",
    image: cardImage12,
    bookmarkIcon: bookmark,
    schoolName: "Osun state Polytechnic Iree",
    course: "Computer Science",
    program: "Program",
    programName: "National diploma",
    tuition: "Tuition",
    tuitionPrice: "$50 per Semester",
    address: "Location",
    addressState: "Osun State",
    duration: "Duration",
    durationYears: "2 years",
    button: "Compare",
  },
];

function ExploreMBBS() {
  return (
    <section>
      <ScholarshipHeaderBlue />
      <Header />
      <SchoolLists schools={SCHOOL_DETAILS} />
      <Footer />
    </section>
  );
}

export default ExploreMBBS;
