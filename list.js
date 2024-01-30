var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

var card = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>Card title</h5>
        <p>가격 : 70000</p>
      </div>
`;
// console.log(products.length);
for (var i = 0; i < products.length; i++) {
  $(".row").append(card);

  $(".col-sm-4 h5").eq(i).html(products[i].title);
  $(".col-sm-4 p").eq(i).html(products[i].price);
}

var clickCount = 0;
$("#more").click(function () {
  clickCount++;
  if (clickCount == 1) {
    $.get("https://codingapple1.github.io/js/more1.json").done((data) => {
      // console.log(data);
      // console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        $(".row").append(card);
        //  console.log(data[i].title);
        $(".col-sm-4 h5")
          .eq(products.length + i)
          .html(data[i].title);
        $(".col-sm-4 p")
          .eq(products.length + i)
          .html(data[i].price);
      }
      products.length += data.length;
    });
  } else if (clickCount == 2) {
    $.get("https://codingapple1.github.io/js/more2.json").done((data) => {
      for (var i = 0; i < data.length; i++) {
        $(".row").append(card);
        $(".col-sm-4 h5")
          .eq(products.length + i)
          .html(data[i].title);
        $(".col-sm-4 p")
          .eq(products.length + i)
          .html(data[i].price);
      }
      products.length += data.length;
      $("#more").html("닫기");
    });
  } else if (clickCount == 3) {
    clickCount = 0;
    products.length = 3;
    $(".row").html("");
    for (var i = 0; i < products.length; i++) {
      $(".row").append(card);
      $(".col-sm-4 h5").eq(i).html(products[i].title);
      $(".col-sm-4 p").eq(i).html(products[i].price);
    }
    $("#more").html("더보기");
  }
});

var array = [7, 3, 5, 2, 40];
var NewArray = array.map(function (a) {
  return a * 4;
});
console.log(NewArray);

array.sort(function (a, b) {
  return a - b;
});
console.log(array);

$("#price").click(function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(products);
  $(".row").html("");

  for (var i = 0; i < products.length; i++) {
    $(".row").append(card);
    $(".col-sm-4 h5").eq(i).html(products[i].title);
    $(".col-sm-4 p").eq(i).html(products[i].price);
  }
});
