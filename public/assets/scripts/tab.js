var slideIndexleads = 0;
carouselleads();

function carouselleads() {
  var i;
  var x = document.getElementsByClassName("mySlides-leads");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexleads++;
  if (slideIndexleads > x.length) {
    slideIndexleads = 1;
  }
  x[slideIndexleads - 1].style.display = "block";
}

function plusSlidesleads(n) {
  showSlideleads((slideIndexleads += n));
}
function currentSlideleads(n) {
  showSlideleads((slideIndexleads = n));
}

function showSlideleads(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-leads");
  if (n > slides.length) {
    slideIndexleads = 1;
  }
  if (n < 1) {
    slideIndexleads = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexleads - 1].style.display = "block";
}

var btnContainerleads = document.getElementById("leads-active-btn");

var btnsleads = btnContainerleads.getElementsByClassName("leads-buttons");

for (var i = 0; i < btnsleads.length; i++) {
  btnsleads[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-leads");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-leads", "");
    }

    this.className += " active-leads";
  });
}

var slideIndexcoins = 0;
carouselcoins();

function carouselcoins() {
  var i;
  var x = document.getElementsByClassName("mySlides-coin");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function plusSlidescoins(n) {
  showSlidecoins((slideIndexcoins += n));
}

function currentSlidecoins(n) {
  showSlidecoins((slideIndexcoins = n));
}

function showSlidecoins(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-coin");
  if (n > slides.length) {
    slideIndexcoins = 1;
  }
  if (n < 1) {
    slideIndexcoins = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexcoins - 1].style.display = "block";
}

// function copy(el) {
//   var address = el.innerText;
//   if (address.length == 0) return;
//   var tmp = document.createElement("textarea");
//   tmp.setAttribute("type", "hidden");
//   tmp.value = address;
//   document.body.appendChild(tmp);
//   tmp.select();
//   document.execCommand("copy");
//   document.body.removeChild(tmp);
//   alert("Copied: " + tmp.value);
// }

var btnContainercoin = document.getElementById("coin-active-btn");

var btnscoin = btnContainercoin.getElementsByClassName("coin-buttons");

for (var i = 0; i < btnscoin.length; i++) {
  btnscoin[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-coin");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-coin", "");
    }

    this.className += " active-coin";
  });
}

// var elementlsky = document.getElementById("left-valve-sky");
// elementlsky.addEventListener("click", function() {
//   elementlsky.classList.toggle("close");
// });

// var elementrsky = document.getElementById("right-valve-sky");
// elementrsky.addEventListener("click", function() {
//   elementrsky.classList.toggle("close-right");
// });

// var elementl = document.getElementById("left-valve");
// elementl.addEventListener("click", function() {
//   elementl.classList.toggle("close");
// });

// var elementr = document.getElementById("right-valve");
// elementr.addEventListener("click", function() {
//   elementr.classList.toggle("close-right");
// });

// var elementladmin = document.getElementById("left-valve-admin");
// elementladmin.addEventListener("click", function() {
//   elementladmin.classList.toggle("close");
// });

// var elementradmin = document.getElementById("right-valve-admin");
// elementradmin.addEventListener("click", function() {
//   elementradmin.classList.toggle("close-right");
// });

// var elementlcoin = document.getElementById("left-valve-coin");
// elementlcoin.addEventListener("click", function() {
//   elementlcoin.classList.toggle("close");
// });

// var elementrcoin = document.getElementById("right-valve-coin");
// elementrcoin.addEventListener("click", function() {
//   elementrcoin.classList.toggle("close-right");
// });

var slideIndexfeeds = 1;
carouselfeeds();

function carouselfeeds() {
  var i;
  var x = document.getElementsByClassName("mySlides-feeds");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexfeeds++;
  if (slideIndexfeeds > x.length) {
    slideIndexfeeds = 1;
  }
  x[slideIndexfeeds - 1].style.display = "block";
}

function plusSlidesfeeds(n) {
  showSlidefeeds((slideIndexfeeds += n));
}
function currentSlidefeeds(n) {
  showSlidefeeds((slideIndexfeeds = n));
}

function showSlidefeeds(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-feeds");
  if (n > slides.length) {
    slideIndexfeeds = 1;
  }
  if (n < 1) {
    slideIndexfeeds = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexfeeds - 1].style.display = "block";
}

var btnContainerfeed = document.getElementById("feed-active-btn");

var btnsfeed = btnContainerfeed.getElementsByClassName("feed-buttons");

for (var i = 0; i < btnsfeed.length; i++) {
  btnsfeed[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-feed");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-feed", "");
    }

    this.className += " active-feed";
  });
}

var slideIndexships = 0;
carouselships();

function carouselships() {
  var i;
  var x = document.getElementsByClassName("mySlides-ships");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexships++;
  if (slideIndexships > x.length) {
    slideIndexships = 1;
  }
  x[slideIndexships - 1].style.display = "block";
}

function plusSlidesships(n) {
  showSlideships((slideIndexships += n));
}
function currentSlideships(n) {
  showSlideships((slideIndexships = n));
}

function showSlideships(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-ships");
  if (n > slides.length) {
    slideIndexships = 1;
  }
  if (n < 1) {
    slideIndexships = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexships - 1].style.display = "block";
}

var btnContainerships = document.getElementById("ships-active-btn");

var btnsships = btnContainerships.getElementsByClassName("ships-buttons");

for (var i = 0; i < btnsships.length; i++) {
  btnsships[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-ships");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-ships", "");
    }

    this.className += " active-ships";
  });
}
