  //Copy to clipboard functions
  function copytoclip1() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  function copytoclip2() {
    var copyText = document.getElementById("myInput2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copied!";
  }

  function outFunc2() {
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
  }

  //Swiper Function
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    keyboard: {
      enabled: true,
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  //Animation on scroll initialize
  AOS.init();

  //Hide navbar on scroll down

  let navBar = document.querySelector("#navbar");
  let lastScrollY = window.scrollY;
  let backToTop = document.querySelector(".btt-button");

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      navBar.classList.add("hidden-navbar")
      lastScrollY = window.scrollY;
    } else {
      navBar.classList.remove("hidden-navbar")
      lastScrollY = window.scrollY;
    }

    //Hide back to top button on welcome section
    if (window.scrollY > 812) {
      backToTop.classList.remove("hidden-button")
    } else {
      backToTop.classList.add("hidden-button")
    }
  })

  //hamburger menu
  let hamButton = document.querySelector(".ham-icon")
  let mobileNav = document.querySelector(".mobile-nav")
  //toggle te navbar on the button's click
  function showNav() {
    if (mobileNav.classList.contains("mobile-nav-hidden")) {
      mobileNav.classList.replace("mobile-nav-hidden", "mobile-nav-shown")
      hamButton.classList.replace("fa-bars", "fa-xmark")
    } else {
      mobileNav.classList.replace("mobile-nav-shown", "mobile-nav-hidden")
      hamButton.classList.replace("fa-xmark", "fa-bars")
    }
  }

  //Hide navbar when a link is clicked
  function hideNav() {
    mobileNav.classList.replace("mobile-nav-shown", "mobile-nav-hidden")
    hamButton.classList.replace("fa-xmark", "fa-bars")
  }

  //Loading Screen
  
  window.addEventListener('load', function(load) {
  let loader = document.getElementById("preloader");
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},1000); //Establish a min duration for the loading screen

},false);
  