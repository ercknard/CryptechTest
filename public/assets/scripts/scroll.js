
  // $(function () {
  //   $(document).scroll(function () {
  //     var $nav = $(".index-navigation");
  //     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  //   });
  // });

  $(function () {
    $(document).scroll(function () {
      var $nav = $("#web_title");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    let image1 = document.getElementById("reload-1");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    image1.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".index-navigation-main");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-footer");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".social-icon__link");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".main-footer");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".for-footer");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".CT-logo");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});