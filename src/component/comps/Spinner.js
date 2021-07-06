export function Spinner(event) {
  console.log("hi");

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the value of the input element on the last form page
  let text = document.getElementsByClassName("a5-cap-input")[0].value;

  let newlink = document.getElementById('cap-link-to-login');

  if (event.key === "Enter") {
    // document.parentElement.style.background = 'white';
    localStorage.setItem("interests", text);
    console.log("localstorage:", Object.entries(localStorage));
    Object.entries(localStorage).forEach((item) =>
      console.log(item[0], item[1])
    );

    modal.style.display = "block";
    modal.style.background = "#ffffffcc";

    // check if the user is looged in
    if (localStorage.getItem("key")) {
      console.log("user is logged in");
    } else {
      console.log("not logged in");
      setTimeout(() => {
        newlink.click();
      }, 3000)
    }
  }

  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function (event) {
  //     if (event.target === modal) {
  //       modal.style.display = "none";
  //     }
  //   };
}
