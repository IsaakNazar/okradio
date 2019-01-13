
$(document).ready(() => {
  let modal = document.getElementById('myModal');

// When the user clicks the button, open the modal

  $("#myBtn").click(() => {
    $("#myModal").css('display', 'block');
  });

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

});
