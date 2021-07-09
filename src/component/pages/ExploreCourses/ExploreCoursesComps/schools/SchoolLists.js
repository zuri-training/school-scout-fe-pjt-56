import SchoolDetails from "./SchoolDetails";
import classes from "./schoolList.module.css";

function SchoolLists(props) {
  return (
    <div className={classes.exploreFlex}>
      {props.schools.map((school) => (
        <SchoolDetails
          key={school.id}
          id={school.id}
          image={school.image}
          bookmarkIcon={school.bookmarkIcon}
          schoolName={school.schoolName}
          course={school.course}
          program={school.program}
          programName={school.programName}
          tuition={school.tuition}
          tuitionPrice={school.tuitionPrice}
          address={school.address}
          addressState={school.addressState}
          duration={school.duration}
          durationYears={school.durationYears}
          button={school.button}
        />
      ))}
    </div>
  );
}
export default SchoolLists;
