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
var car2 = { name: "bmw", price: [50000, 33000, 4000] };
car[0] = "아반떼";
var carPrice = 50000;
var carColor = "white";

console.log(car2["price"]);

$("#name").html(car2.name);
$("#price").html(car2.price[1]);

// var pantsSize = `<option>28</option>
//       <option>30</option>`;
var pants = [28, 30, 32];

var shirtSize = `<option>90</option>
      <option>95</option>
      <option>100</option>
;`;

// var shirts = [95, 100, 105];

document
  .querySelectorAll(".form-select")[0]
  .addEventListener("input", function () {
    if ($(".form-select").eq(0).val() == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html(shirtSize);
    } else if ($(".form-select").eq(0).val() == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      pants.forEach((data) => {
        $(".form-select").eq(1).append(`<option>${data}</option>`);
      });
    }
  });

document
  .querySelectorAll(".form-select")[0]
  .addEventListener("input", function () {
    if ($(".form-select").eq(0).val() == "모자") {
      $(".form-select").eq(1).addClass("form-hide");
    }
  });

// var a = document.createElement("p");
// a.innerHTML = "안녕";
// document.querySelector("#test").appendChild(a);

var 템플릿 = "<p>안녕</p>";
// document.querySelector("#test").insertAdjacentHTML("beforeend", 템플릿);
$("#test").append(템플릿);

var obj = { name: "sin", age: 21 };
for (var key in obj) {
  console.log(obj[key]);
}
