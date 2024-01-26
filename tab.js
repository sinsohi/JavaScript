var btn = $(".tab-button");
var content = $(".tab-content");

// for (let i = 0; i < 3; i++) {
//   btn.eq(i).on("click", function () {
//     OpenTab(i);
//   });
// }

$(".list").click(function (e) {
  console.log(e.target.dataset.id);
  OpenTab(e.target.dataset.id);
});

function OpenTab(i) {
  btn.removeClass("orange");
  btn.eq(i).addClass("orange");
  content.removeClass("show");
  content.eq(i).addClass("show");
}

var car = ["소나타", 50000, "white"];
var car2 = { name: "bmw", price: 50000 };
car[0] = "아반떼";
var carPrice = 50000;
var carColor = "white";
car2.price = 10000;

console.log(car2["price"]);

$("#name").html(car2.name);
$("#price").html(car2.price);
