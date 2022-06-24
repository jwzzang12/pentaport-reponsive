const menu = $("#menu");
const list = $("#gnb .list");
const textLogo = $("#textLogo");
const subContents = $(".subContents");

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
