// const { STATUS_CODES } = require("http");

$("#recipeCarousel").carousel({
  interval: 100000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

// //  Change hero area img
// $(document).ready(function () {
//   var urls = [
//     "../assets/img/road-1.jpg",
//     "../assets/img/road-2.jpg",
//     "../assets/img/road-3.jpg",
//     "../assets/img/road-4.jpg",
//   ];

//   var cout = 1;

//   $(".hero-area").css("background-image", 'url("' + urls[0] + '")');
//   setInterval(function () {
//     $(".hero-area").css("background-image", 'url("' + urls[cout] + '")');
//     cout == urls.length - 1 ? (cout = 0) : cout++;
//   }, 1000);
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
