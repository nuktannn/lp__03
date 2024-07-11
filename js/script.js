//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
const height = $(".js-header").height();
$("main").css("margin-top", height);
});

//スムーススクロール
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

 //ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});
