export function Spinner(event) {
    console.log('hi')

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the value of the input element on the last form page
  let text = document.getElementsByClassName('a5-cap-input')[0].value

//   // Get the button that opens the modal
//   var btn = document.getElementById("myBtn");

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

if (event.key === 'Enter' ) {
  // document.parentElement.style.background = 'white';
    localStorage.setItem('interests', text)
    console.log('localstorage:', Object.entries(localStorage));
    Object.entries(localStorage).forEach(item => console.log(item[0], item[1]))

    modal.style.display = "block";
    modal.style.background = '#ffffffcc';
}

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   };
}
