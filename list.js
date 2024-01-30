var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

var card = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>Card title</h5>
        <p>가격 : 70000</p>
        <button class="buy">구매</button>
      </div>
`;

// console.log(products.length);
for (var i = 0; i < products.length; i++) {
  $(".row").append(card);

  $(".col-sm-4 h5").eq(i).html(products[i].title);
  $(".col-sm-4 p").eq(i).html(products[i].price);
}

// 더보기 버튼
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

// 가격순 정렬
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

// 상품 다나가순 정렬
$("#sort").click(function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1; // a -> '가', b -> '다' 일 경우 return 양수
    } else {
      return -1; // a -> '다', b -> '나' 일 경우 return 음수
    }
  });
  console.log(products);
  $(".row").html("");

  for (var i = 0; i < products.length; i++) {
    $(".row").append(card);
    $(".col-sm-4 h5").eq(i).html(products[i].title);
    $(".col-sm-4 p").eq(i).html(products[i].price);
  }
});

// 6만원 이하 상품보기
$("#priceFilter").click(function () {
  var NewArray = products.filter(function (a) {
    return a.price <= 60000;
  });
  console.log(NewArray);
  $(".row").html("");

  for (var i = 0; i < NewArray.length; i++) {
    $(".row").append(card);
    $(".col-sm-4 h5").eq(i).html(NewArray[i].title);
    $(".col-sm-4 p").eq(i).html(NewArray[i].price);
  }
});

localStorage.setItem("num", [1, 2, 3]);
console.log(localStorage.getItem("이름"));
localStorage.removeItem("이름");

// localStorage에 array, object 저장하려면
var arr = [1, 2, 3];
var newArr = JSON.stringify(arr);
localStorage.setItem("num", newArr);
var 꺼낸거 = localStorage.getItem("num");
console.log(JSON.parse(꺼낸거));

// 구매 버튼 누르면 상품명을 장바구니 목록에 넣기
$(".buy").click(function (e) {
  var arr = [];
  var cartList = $(e.target).siblings("h5").text(); // 누른 구매 버튼을 포함한 카드의 타이틀 변수에 저장
  var SavedProduct = localStorage.getItem("cart"); //로컬저장소에서 cart를 key로 가지는 값을 받아옴

  if (SavedProduct == null) {
    console.log("장바구니 비어있음");
    arr.push(cartList);
    var newArr = JSON.stringify(arr);
    localStorage.setItem("cart", newArr);
  } else {
    console.log("장바구니에 뭐 있음");
    arr = localStorage.getItem("cart");
    arr = JSON.parse(arr);
    arr.push(cartList);
    var newArr = JSON.stringify(arr);
    localStorage.setItem("cart", newArr);
  }
});

// 장바구니 보러가기
$("#cart").onclick = "location.href='cart.html'";
