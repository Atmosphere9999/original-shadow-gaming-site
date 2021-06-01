/* 
  Followed the JavaScript code in the book/file in Lessons. 
  I also added different class selectors for them so I had to re-write this anyway. 
 */

var navButton = document.querySelector(".nav-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}
