export function Spinner(event) {
    console.log('hi')

  // Get the modal
  var modal = document.getElementById("myModal");

//   // Get the button that opens the modal
//   var btn = document.getElementById("myBtn");

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

if (event.key === 'Enter' ) {
    console.log('hello');
    modal.style.display = "block";
}


//   // When the user clicks the button, open the modal
//   btn.onkeyup = function () {
//     console.log('hello');
//     alert('hi')
//     modal.style.display = "block";
//   };

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//     modal.style.display = "none";
//   };

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   };
}
