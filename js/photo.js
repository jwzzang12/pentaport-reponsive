const menu = $("#menu");
const list = $("#gnb .list");
const textLogo = $("#textLogo");
const subContents = $(".subContents");
const circleBox = $(".circleBox");
const circleImg = $(".circleBox img");

$("img").on("dragstart", false);

// circleBox.hover(
//   function () {
//     // let idx = circleBox.index($(this));
//     // let imgH = circleImg.eq(idx).height();
//     const scrollY = $(window).scrollTop();
//     const h = $(window).height();
//     const imgPosition = scrollY + h / 2 - h / 4;
//     $(this).addClass("pop");
//     circleImg.css("top", imgPosition);
//   },
//   function () {
//     $(this).removeClass("pop");
//     circleImg.css("top", "");
//   }
// );

//혼자서 해보려고 시도 했던 것....^^
// const gallery2021 = $("#gallery2021");
// $.each(function (idx, item) {
//   tempHtml += `<li class="circleBox">
//   <a href="../images/gallery/2021/"${item}" data-fancybox="image">
//     <img src="../images/gallery/2021/"${item}" alt="" />
//   </a>
// </li>`;
// });
// gallery2021.html(tempHtml);

menu.on("click", function () {
  list.toggleClass("open");
  menu.toggleClass("open");
  return false;
});

$(window).on("scroll", function () {
  const scrollY = $(window).scrollTop();
  const subContentsY = subContents.offset().top;
  if (subContentsY < scrollY) {
    textLogo.addClass("none");
  } else {
    textLogo.removeClass("none");
  }
});
const gallery2021 = $("#gallery2021 ul");
const gallery2019 = $("#gallery2019 ul");
const gallery2018 = $("#gallery2018 ul");
const tabMenu = $("#photo .tab .tabMenu li");
const tabContents = $("#photo .tab .tabContents .contentsBox");
tabMenu.on("click", function () {
  const idx = $(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  tabContents.eq(idx).show().siblings().hide();
  return false;
});
tabMenu.eq(0).trigger("click");

$.ajax({ url: "../data/photo.json" }).done(function (response) {
  const imageFolder = response.imageFolder;
  const first = response.first;
  const second = response.second;
  const third = response.third;
  let tempHtml = "";

  $.each(first, function (idx, item) {
    tempHtml += `<li class="circleBox">
    <a href="../${imageFolder}2021/${item.img}" data-fancybox="gallery"><img src="../${imageFolder}2021/${item.img}" alt="" /></a>
  </li>`;
  });
  gallery2021.html(tempHtml);
  tempHtml = "";

  $.each(second, function (idx, item) {
    tempHtml += `<li class="circleBox">
    <a href="../${imageFolder}2019/${item.img}" data-fancybox="gallery"><img src="../${imageFolder}2019/${item.img}" alt="" /></a>
  </li>`;
  });
  gallery2019.html(tempHtml);
  tempHtml = "";

  $.each(third, function (idx, item) {
    tempHtml += `<li class="circleBox">
    <a href="../${imageFolder}2018/${item.img}" data-fancybox="gallery"><img src="../${imageFolder}2018/${item.img}" alt="" /></a>
  </li>`;
  });
  gallery2018.html(tempHtml);
});
