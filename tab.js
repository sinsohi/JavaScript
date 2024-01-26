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
