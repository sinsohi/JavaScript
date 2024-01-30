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

// 34강 숙제 Q1
var 출석부 = ["홍민", "영희", "철수", "재석"];
function 이름찾기(name) {
  for (var i = 0; i < 출석부.length; i++) {
    if (출석부[i] == name) {
      console.log("있어요");
    } else {
      console.log("");
    }
  }
}

이름찾기("명수");

// 34강 숙제 Q2
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    console.log(i * j);
  }
}

// 34강 숙제 Q3
function avgCal(arr, x) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;

  if (x > avg) {
    console.log(`평균보다 ${x - avg}점이 올랐네요`);
  } else {
    console.log(`평균보다 ${avg - x}점이 떨어졌네요 재수추천`);
  }
}

avgCal([10, 20, 30, 40, 50], 40);
avgCal([40, 40, 40], 20);
