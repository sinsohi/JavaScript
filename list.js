var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

$("#productName").eq(0).html(products[0].title);
$("#productPrice").eq(0).html(products[0].price);

document.querySelectorAll("#productName")[1].innerHTML = products[1].title;
document.querySelectorAll("#productPrice")[1].innerHTML = products[1].price;

document.querySelectorAll("#productName")[2].innerHTML = products[2].title;
document.querySelectorAll("#productPrice")[2].innerHTML = products[2].price;
