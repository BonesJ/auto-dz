$("#recipeCarousel").carousel({
  interval: 5000,
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
// Carousel update code
// var item1;

// document.getElementById("carousel-prev-link").onclick = newTitle;
// function newTitle() {
//   item1 = prompt("Enter a new first thing: ");
//   updateList();
// }
// function updateList() {
//   document.getElementById("carousel-card1-title").innerHTML = item1;
// }
