// 버튼0 누르면
$(".tab-button")
  .eq(0)
  .on("click", function () {
    // 모든 버튼에 붙은 orange 클래스명 제거
    document.getElementsByClassName("tab-button")[0].classList.remove("orange");
    document.getElementsByClassName("tab-button")[1].classList.remove("orange");
    document.getElementsByClassName("tab-button")[2].classList.remove("orange");

    // 버튼0에 orange 클래스명 추가
    document.getElementsByClassName("tab-button")[0].classList.add("orange");

    // 모든 div에 붙은 show 클래스명 제거
    document.getElementsByClassName("tab-content")[0].classList.remove("show");
    document.getElementsByClassName("tab-content")[1].classList.remove("show");
    document.getElementsByClassName("tab-content")[2].classList.remove("show");

    // div0에 show 클래스명 추가
    document.getElementsByClassName("tab-content")[0].classList.add("show");
  });

// 버튼1 누르면
$(".tab-button")
  .eq(1)
  .on("click", function () {
    // 모든 버튼에 붙은 orange 클래스명 제거
    document.getElementsByClassName("tab-button")[0].classList.remove("orange");
    document.getElementsByClassName("tab-button")[1].classList.remove("orange");
    document.getElementsByClassName("tab-button")[2].classList.remove("orange");

    // 버튼1에 orange 클래스명 추가
    document.getElementsByClassName("tab-button")[1].classList.add("orange");

    // 모든 div에 붙은 show 클래스명 제거
    document.getElementsByClassName("tab-content")[0].classList.remove("show");
    document.getElementsByClassName("tab-content")[1].classList.remove("show");
    document.getElementsByClassName("tab-content")[2].classList.remove("show");

    // div0에 show 클래스명 추가
    document.getElementsByClassName("tab-content")[1].classList.add("show");
  });

// 버튼2 누르면
$(".tab-button")
  .eq(2)
  .on("click", function () {
    // 모든 버튼에 붙은 orange 클래스명 제거
    document.getElementsByClassName("tab-button")[0].classList.remove("orange");
    document.getElementsByClassName("tab-button")[1].classList.remove("orange");
    document.getElementsByClassName("tab-button")[2].classList.remove("orange");

    // 버튼0에 orange 클래스명 추가
    document.getElementsByClassName("tab-button")[2].classList.add("orange");

    // 모든 div에 붙은 show 클래스명 제거
    document.getElementsByClassName("tab-content")[0].classList.remove("show");
    document.getElementsByClassName("tab-content")[1].classList.remove("show");
    document.getElementsByClassName("tab-content")[2].classList.remove("show");

    // div0에 show 클래스명 추가
    document.getElementsByClassName("tab-content")[2].classList.add("show");
  });
