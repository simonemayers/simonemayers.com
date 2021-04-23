$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNavbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
       });
      });

var fav = prompt("Please Enter Your Favorite Candy"); {
    alert("Awesome! " + fav + " is our favorite candy too!" );
}