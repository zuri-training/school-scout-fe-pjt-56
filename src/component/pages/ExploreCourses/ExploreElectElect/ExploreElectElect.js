import React from "react";
import SchoolLists from "../ExploreCoursesComps/schools/SchoolLists";
import { ScholarshipHeaderBlue } from "./../../../shared/ScholarshipHeaderBlue/ScholarshipHeaderBlue";
import Footer from "./../../../shared/footer/Footer";
import { Header } from "./../ExploreCoursesComps/Header/ExploreHeader";

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
    id: "box30",
    image: cardImage1,
    bookmarkIcon: bookmark,
    schoolName: "Covenant University Ota",
    course: "Electrical and Information Engineering",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$550 per Semester",
    address: "Location",
    addressState: "Ogun State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box31",
    image: cardImage2,
    bookmarkIcon: bookmark,
    schoolName: "University of Ibadan",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$100 per Semester",
    address: "Location",
    addressState: "Oyo State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box32",
    image: cardImage3,
    bookmarkIcon: bookmark,
    schoolName: "University of Ilorin",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Master’s Degree",
    tuition: "Tuition",
    tuitionPrice: "$120 per Semester",
    address: "Location",
    addressState: "Kwara State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box33",
    image: cardImage4,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State University",
    course: "Electronic and Computer Engineering",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$150 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box34",
    image: cardImage5,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State University",
    course: "Electronic and Computer Engineering",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$200 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "24 Months",
    button: "Compare",
  },
  {
    id: "box35",
    image: cardImage6,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State University",
    course: "Electronic and  Computer Engineering",
    program: "Program",
    programName: "Ph.D Degree",
    tuition: "Tuition",
    tuitionPrice: "$200 per Semester",
    address: "Location",
    addressState: "Ondo State",
    duration: "Duration",
    durationYears: "18 Months",
    button: "Compare",
  },
  {
    id: "box36",
    image: cardImage7,
    bookmarkIcon: bookmark,
    schoolName: "Olabisi Onabanjo University",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$200 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box37",
    image: cardImage8,
    bookmarkIcon: bookmark,
    schoolName: "Federal University of Technology Akure",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$100 per Semester",
    address: "Location",
    addressState: "Ondo State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box38",
    image: cardImage9,
    bookmarkIcon: bookmark,
    schoolName: "Federal University of Technology Akure",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Master's Degree",
    tuition: "Tuition",
    tuitionPrice: "$120 per Semester",
    address: "Location",
    addressState: "Ondo State",
    duration: "Duration",
    durationYears: "24 Months",
    button: "Compare",
  },
  {
    id: "box39",
    image: cardImage10,
    bookmarkIcon: bookmark,
    schoolName: "Osun State University",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Bachelor’s Degree",
    tuition: "Tuition",
    tuitionPrice: "$550 per Semester",
    address: "Location",
    addressState: "Osun State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box40",
    image: cardImage11,
    bookmarkIcon: bookmark,
    schoolName: "University of Ibadan",
    course: "Electrical and Electronics Engineering",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$100 per Semester",
    address: "Location",
    addressState: "Oyo State",
    duration: "Duration",
    durationYears: "5 years",
    button: "Compare",
  },
  {
    id: "box41",
    image: cardImage12,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State Polytechnic",
    course: "Electrical and Electronics Engineering",
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

function ExploreElectElect() {
  return (
    <section>
      <ScholarshipHeaderBlue />
      <Header />
      <SchoolLists schools={SCHOOL_DETAILS} />
      <Footer />
    </section>
  );
}

export default ExploreElectElect;
