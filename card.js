// 스크롤 높이에 따라 변하는 opacity
$(window).scroll(function () {
  var 높이 = $(window).scrollTop();
  //   console.log(높이);
  // 620쯤 스크롤하면 opacity:1
  // 1030쯤 스크롤하면 opacity:0
  // 620 ~ 1030까지 스크롤바를 내리면, 첫째카드의 opacity 1~0으로 서서히 변경해주셈
  var y = (-1 / 410) * 높이 + (1 + 62 / 41); // 스크롤 높이에 따라 변하는 값
  $(".card-box").eq(0).css("opacity", y);

  // 620 ~ 1030까지 스크롤바를 내리면, 첫째카드의 scale 1~0.9 로 서서히 변경
  var z = (-1 / 4100) * 높이 + (1 + 62 / 410);
  $(".card-box").eq(0).css("transform", `scale(${z})`);
});
