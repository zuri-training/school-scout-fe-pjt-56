import { useContext } from "react";
import BookmarkContext from "./Bookmark-Context";
import SchoolLists from "../pages/ExploreCourses/ExploreCoursesComps/schools/SchoolLists";
import { ScholarshipHeaderBlue } from "../pages/ExploreCourses/ExploreCoursesComps/ScholarshipHeaderBlue/ScholarshipHeaderBlue";
import Footer from "../pages/ExploreCourses/ExploreCoursesComps/footer/Footer";
import classes from "../pages/ExploreCourses/ExploreCoursesComps/schools/schoolList.module.css";

function BookmarkPage() {
  const bookmarkCtx = useContext(BookmarkContext);

  let content;
  if (bookmarkCtx.totalBookmark === 0) {
    content = <h3 className={classes.bookmarkH3}>Bookmark list is empty</h3>;
  } else {
    content = <SchoolLists schools={bookmarkCtx.bookmark} />;
  }

  return (
    <section>
      <ScholarshipHeaderBlue />
      <h1 className={classes.bookmarkH2}>Bookmarks</h1>
      {content}
      <Footer />
    </section>
  );
}

export default BookmarkPage;
