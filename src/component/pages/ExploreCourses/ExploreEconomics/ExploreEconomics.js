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
    id: "box14",
    image: cardImage1,
    bookmarkIcon: bookmark,
    schoolName: "Babcock University Llishan Remo",
    course: "Economics",
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
    id: "box15",
    image: cardImage2,
    bookmarkIcon: bookmark,
    schoolName: "Babcock University Llishan Remo",
    course: "Economics",
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
    id: "box16",
    image: cardImage3,
    bookmarkIcon: bookmark,
    schoolName: "Covenant University Ota",
    course: "Economics",
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
    id: "box17",
    image: cardImage4,
    bookmarkIcon: bookmark,
    schoolName: "Covenant University Ota",
    course: "Economics",
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
    id: "box18",
    image: cardImage5,
    bookmarkIcon: bookmark,
    schoolName: "Federal University of science and Technology Akure",
    course: "Economics",
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
    id: "box19",
    image: cardImage6,
    bookmarkIcon: bookmark,
    schoolName: "Federal University of science and Technology Akure",
    course: "Economics",
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
    id: "box20",
    image: cardImage7,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State university ",
    course: "Economics",
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
    id: "box21",
    image: cardImage8,
    bookmarkIcon: bookmark,
    schoolName: "Lagos State university",
    course: "Economics",
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
    id: "box22",
    image: cardImage9,
    bookmarkIcon: bookmark,
    schoolName: "University of Ilorin",
    course: "Economics",
    program: "Program",
    programName: "Bachelor's Degree",
    tuition: "Tuition",
    tuitionPrice: "$80 per Semester",
    address: "Location",
    addressState: "Lagos State",
    duration: "Duration",
    durationYears: "2 years",
    button: "Compare",
  },
  {
    id: "box23",
    image: cardImage10,
    bookmarkIcon: bookmark,
    schoolName: "Osun State University Osogbo",
    course: "Economics",
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
    id: "box24",
    image: cardImage11,
    bookmarkIcon: bookmark,
    schoolName: "Osun State university Osogbo",
    course: "Economics",
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
    id: "box25",
    image: cardImage12,
    bookmarkIcon: bookmark,
    schoolName: "Osun state Polytechnic Iree",
    course: "Economics",
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

function ExploreComputerScience() {
  return (
    <section>
      <ScholarshipHeaderBlue />
      <Header />
      <SchoolLists schools={SCHOOL_DETAILS} />
      <Footer />
    </section>
  );
}

export default ExploreComputerScience;
