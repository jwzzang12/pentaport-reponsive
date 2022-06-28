const menu = $("#menu");
const list = $("#gnb .list");
const textLogo = $("#textLogo");
const subContents = $(".subContents");
const circleBox = $(".circleBox");
const circleImg = $(".circleBox img");

$("img").on("dragstart", false);

circleBox.hover(
  function () {
    // let idx = circleBox.index($(this));
    // let imgH = circleImg.eq(idx).height();
    const scrollY = $(window).scrollTop();
    const h = $(window).height();
    const imgPosition = scrollY + h / 2 - h / 4;
    $(this).addClass("pop");
    circleImg.css("top", imgPosition);
  },
  function () {
    $(this).removeClass("pop");
    circleImg.css("top", "");
  }
);

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

const tabMenu = $("#photo .tab .tabMenu li");
const tabContents = $("#photo .tab .tabContents .contentsBox");
tabMenu.on("click", function () {
  const idx = $(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  tabContents.eq(idx).show().siblings().hide();
  return false;
});
tabMenu.eq(0).trigger("click");
