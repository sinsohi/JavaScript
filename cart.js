var SavedProduct = localStorage.getItem("cart");
console.log(SavedProduct);

var 상품명 = `<p>상품</p>`;

if (SavedProduct != null) {
  var productsArray = JSON.parse(SavedProduct);
  $("#cartList").html("");

  for (var i = 0; i < productsArray.length; i++) {
    $("#cartList").append(상품명);
    $("#cartList p").eq(i).html(productsArray[i]);
  }
}
