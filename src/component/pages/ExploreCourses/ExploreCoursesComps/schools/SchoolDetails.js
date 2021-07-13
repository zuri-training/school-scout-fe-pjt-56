import { useContext } from "react";
import { Link } from "react-router-dom";
import BookmarkContext from "../../../../Bookmark/Bookmark-Context";
import classes from "./ExploreCards.module.css";

import checked from "../Icons/bookmark-solid.svg";

import unchecked from "../Icons/bookmark-solid-unchecked.svg";

function SchoolDetails(props) {
  const bookmarkCtx = useContext(BookmarkContext);
  const isBookmark = bookmarkCtx.isBookmark(props.id);

  function toggleBookmarkHandler() {
    if (isBookmark) {
      bookmarkCtx.removeBookmark(props.id);
    } else {
      bookmarkCtx.addBookmark({
        id: props.id,
        image: props.image,
        bookmarkIcon: props.bookmarkIcon,
        schoolName: props.schoolName,
        course: props.course,
        program: props.program,
        programName: props.programName,
        tuition: props.tuition,
        tuitionPrice: props.tuitionPrice,
        address: props.address,
        addressState: props.addressState,
        duration: props.duration,
        durationYears: props.durationYears,
        button: props.button,
      });
    }
  }

  return (
    <div className={classes.exploreCardContainer}>
      <div className={classes.exploreImageContainer}>
        <div className={classes.exBookmark} onClick={toggleBookmarkHandler}>
          <img
            src={isBookmark ? checked : unchecked}
            alt=""
            className={classes.icon}
          />
        </div>
        <img
          src={props.image}
          alt="Rectangle 134"
          className={classes.exploreCardImage}
        />
      </div>
      <div className={classes.exploreCardDetails}>
        <div className={classes.exploreCardHeader}>
          <h2 className={classes.exploreH2}>{props.schoolName}</h2>
          <h3 className={classes.exploreH3}>{props.course}</h3>
        </div>
        <div className={classes.exploreCardText}>
          <p className={classes.exploreP}>{props.program}</p>
          <h3 className={classes.exploreH3}>{props.programName}</h3>
          <p className={classes.exploreP}>{props.tuition}</p>
          <h3 className={classes.exploreH3}>{props.tuitionPrice}</h3>
          <p className={classes.exploreP}>{props.address}</p>
          <h3 className={classes.exploreH3}>{props.addressState}</h3>
          <p className={classes.exploreP}>{props.duration}</p>
          <h3 className={classes.exploreH3}>{props.durationYears}</h3>
        </div>
      </div>
      <Link
        to={process.env.PUBLIC_URL + "/"}
        className={classes.exploreCompare}
      >
        {props.button}
      </Link>
    </div>
  );
}

export default SchoolDetails;
