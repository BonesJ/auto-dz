// const { STATUS_CODES } = require("http");

// //  Change hero area img
// $(document).ready(function () {
//   var urls = [
//     "../assets/img/road-1.jpg",
//     "../assets/img/road-2.jpg",
//     "../assets/img/road-3.jpg",
//     "../assets/img/road-4.jpg",
//   ];

//   varcout = 1;

//   $("div.top-half").css("background-image", 'url("' + urls[0] + '")');
//   setInterval(function () {
//     $("div.top-half").css("background-image", 'url("' + urls[cout] + '")');
//     cout == urls.length - 1 ? (cout = 0) : cout++;
//   }, 5000);
// });

// $(document).on("click", ".nav-link.active", function () {
//   var href = $(this).attr("href").substring(1);
//   alert("href");
//   console.log("href");
//   $(this).removeClass("active");
//   $('.tab-pane[id="' + href + '"]').removeClass("active");
// });
$(document).mouseup(function (e) {
  var container = $(".hero-area"); // target ID or class
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    // get Event here
    $(".hero-area .active").removeClass("active");
  }
});

// $("#recipeCarousel").carousel({
//   interval: 10000,
// });

// $(".carousel .carousel-item").each(function () {
//   var minPerSlide = 3;
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));

//   for (var i = 0; i < minPerSlide; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }

//     next.children(":first-child").clone().appendTo($(this));
//   }
// });

// Good Code

// app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/sprites'));

// to be used with
// <svg style="color: red;">
//     <use xlink:href="solid.svg#ad"></use>
// </svg>

// // Carousel update code
// // var item1;

// // document.getElementById("carousel-prev-link").onclick = newTitle;
// // function newTitle() {
// //   item1 = prompt("Enter a new first thing: ");
// //   updateList();
// // }
// // function updateList() {
// //   document.getElementById("carousel-card1-title").innerHTML = item1;
// // }
