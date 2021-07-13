import { createContext, useState } from "react";

const BookmarkContext = createContext({
  bookmarked: [],
  totalBookmark: 0,
  addBookmark: (bookmarkCourse) => {},
  removeBookmark: (schoolId) => {},
  isBookmark: (schoolId) => {},
});

export function BookmarkContextProvider(props) {
  const [userBookmark, setUserBookmark] = useState([]);

  function addBookmarkHandler(bookmarkCourse) {
    setUserBookmark((prevUserBookmark) => {
      return prevUserBookmark.concat(bookmarkCourse);
    });
  }

  function removeBookmarkHandler(schoolId) {
    setUserBookmark((prevUserBookmark) => {
      return prevUserBookmark.filter((school) => school.id !== schoolId);
    });
  }

  function isBookmarkHandler(schoolId) {
    return userBookmark.some((school) => school.id === schoolId);
  }

  const context = {
    bookmark: userBookmark,
    totalBookmark: userBookmark.length,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    isBookmark: isBookmarkHandler,
  };

  return (
    <BookmarkContext.Provider value={context}>
      {props.children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;
