$(document).ready(function() {
  $("#hamburgerButton").on("click", function(e) {
    $("nav").toggleClass("active");
  });
});
