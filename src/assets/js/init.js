(function ($) {
  gsap.registerPlugin(ScrollTrigger);
  function defaultAnimationGsap() {
    // if ($(".anim-item-y").length) {
    //   gsap.set(".anim-item-y", { opacity: 0, y: 150 });
    //   ScrollTrigger.batch(".anim-item-y", {
    //     start: "top bottom",
    //     //markers: true,
    //     once: true,
    //     onEnter: (batch) =>
    //       gsap.to(batch, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.6,
    //         stagger: { each: 0.15 },
    //         overwrite: true,
    //       }),
    //     // onLeave: (batch) =>
    //     //   gsap.set(batch, { opacity: 0, y: -150, overwrite: true }),
    //     // onEnterBack: (batch) =>
    //     //   gsap.to(batch, {
    //     //     opacity: 1,
    //     //     y: 0,
    //     //     duration: 1,
    //     //     stagger: 0.15,
    //     //     overwrite: true,
    //     //   }),
    //     // onLeaveBack: (batch) =>
    //     //   gsap.set(batch, { opacity: 0, y: 150, overwrite: true }),
    //   });
    //   // ScrollTrigger.addEventListener("refreshInit", () =>
    //   //   gsap.set(".anim-item-y", { opacity: 1, y: 0 })
    //   // );
    // }

    if ($(".anim-item-top").length) {
      gsap.set(".anim-item-top", { opacity: 0, y: -250 });
      ScrollTrigger.batch(".anim-item-top", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, { opacity: 0, y: 250, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, y: -250, overwrite: true }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-top", { opacity: 1, y: 0 })
      );
    }

    if ($(".anim-item-left").length) {
      gsap.set(".anim-item-left", { opacity: 0, x: -150 });
      ScrollTrigger.batch(".anim-item-left", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            duration: 1.3,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, { opacity: 0, x: 250, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            duration: 1.3,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, x: -150, overwrite: true }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-left", { opacity: 1, x: 0 })
      );
    }

    if ($(".anim-item-right").length) {
      gsap.set(".anim-item-right", { opacity: 0, x: 150 });
      ScrollTrigger.batch(".anim-item-right", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            duration: 1.3,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, { opacity: 0, x: -250, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            duration: 1.3,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, x: 150, overwrite: true }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-right", { opacity: 1, x: 0 })
      );
    }

    if ($(".anim-item-clipRight").length) {
      gsap.set(".anim-item-clipRight", {
        opacity: 1,
        clipPath: "inset(0% 100% 0 0)",
      });
      ScrollTrigger.batch(".anim-item-clipRight", {
        //start: "top 75%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.to(batch, {
        //     opacity: 0,
        //     clipPath: "inset(0% 100% 0% 0%)",
        //     overwrite: true,
        //   }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            clipPath: "inset(0% 100% 0% 0%)",
            overwrite: true,
          }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-clipRight", {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        })
      );
    }

    if ($(".anim-item-clipLeft").length) {
      gsap.set(".anim-item-clipLeft", {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 100%)",
      });
      ScrollTrigger.batch(".anim-item-clipLeft", {
        // start: "top 75%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.to(batch, {
        //     opacity: 0,
        //     clipPath: "inset(0% 0% 0% 100%)",
        //     overwrite: true,
        //   }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 100%)",
            overwrite: true,
          }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-clipLeft", {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        })
      );
    }

    if ($(".anim-item-clipDown").length) {
      gsap.set(".anim-item-clipDown", {
        opacity: 1,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      ScrollTrigger.batch(".anim-item-clipDown", {
        //start: "top 80%",
        //end: "bottom top",
        //markers:true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, {
        //     opacity: 0,
        //     clipPath: "inset(0% 0% 100% 0% )",
        //     overwrite: true,
        //   }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, {
            opacity: 1,
            clipPath: "inset(0% 0% 100% 0%)",
            overwrite: true,
          }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-clipDown", {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        })
      );
    }

    if ($(".anim-item-zoomIn").length) {
      gsap.set(".anim-item-zoomIn", { opacity: 1, scale: 1.3 });
      ScrollTrigger.batch(".anim-item-zoomIn", {
        //start: "top 75%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            duration: 1.3,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, { opacity: 1, scale: 1.3, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            duration: 1.3,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 1, scale: 1.3, overwrite: true }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-zoomIn", { opacity: 1, scale: 1 })
      );
    }

    if ($(".anim-item-zoomOut").length) {
      gsap.set(".anim-item-zoomOut", { opacity: 1, scale: 0 });
      ScrollTrigger.batch(".anim-item-zoomOut", {
        start: "top 75%",
        //end: "bottom top",
        //markers:true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: { each: 0.15 },
            overwrite: true,
          }),
        // onLeave: (batch) =>
        //   gsap.set(batch, { opacity: 1, scale: 0, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 1, scale: 0, overwrite: true }),
      });
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-zoomOut", { opacity: 1, scale: 1 })
      );
    }
  }

  let Wwidth = $(window).width();
  let WHeight = $(window).height();

  // if (typeof Splide === "undefined") {
  //   console.error("Splide.js is not loaded!");
  //   return;
  // }
  // else {
  //   // Store different extensions in window.splide
  //   window.splide.ExtensionsGrid = { Grid: window.splide.Extensions.Grid }; // Grid Extension
  //   window.splide.ExtensionsAutoScroll = { AutoScroll: window.splide.Extensions.AutoScroll }; // AutoScroll Extension
  // }

  // SCROLL TO TOP.
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".scrollup").addClass("active");
    } else {
      $(".scrollup").removeClass("active");
    }
  });
  $(".scrollup").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // start ---- document.ready ----------
  $(document).ready(function () {
    defaultAnimationGsap();

    // if ($("[data-fancybox='partnerStory-video']").length > 0) {
    //   Fancybox.bind(
    //     "[data-fancybox='partnerStory-video']",
    //     {}
    //   );
    // }

    // =========== start Navbar
    $("<span class='clickD'></span>").insertAfter(
      ".mobile-header-menu .menu li.menu-item-has-children > a"
    );
    $(".mobile-header-menu .menu li .clickD").click(function (e) {
      e.preventDefault();
      var $this = $(this);

      if ($this.next().hasClass("show")) {
        $this.next().removeClass("show");
        $this.removeClass("toggled");
      } else {
        $this.parent().parent().find(".sub-menu").removeClass("show");
        $this.parent().parent().find(".toggled").removeClass("toggled");
        $this.next().toggleClass("show");
        $this.toggleClass("toggled");
      }
    });

    $(window).on("resize", function () {
      let win = $(this); //this = window
      // if (win.width() < 1025) {
      $("html").click(function () {
        $(".mobile-header-menu .menu li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(document).click(function () {
        $(".mobile-header-menu .menu li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(".mobile-header-menu .menu").click(function (e) {
        e.stopPropagation();
      });
      // }
    });
    // Navbar end

    $(".toggle-mobile-menu").on("click", function () {
      if ($(".wraper-mobile-header").hasClass("open-mMenu")) {
        $(".wraper-mobile-header").removeClass("open-mMenu");
        $("body").removeClass("lockScroll");
        $(".mobile-header-backdrop").remove();
      } else {
        $(".wraper-mobile-header").addClass("open-mMenu");
        $("body").addClass("lockScroll");
        $("body").append('<div class="mobile-header-backdrop"></div>');
      }

      if ($(".mobile-header-backdrop").length > 0) {
        $(".mobile-header-backdrop").on("click", function () {
          if ($(".wraper-mobile-header").hasClass("open-mMenu")) {
            $(".wraper-mobile-header").removeClass("open-mMenu");
            $("body").removeClass("lockScroll");
            $(".mobile-header-backdrop").remove();
          } else {
            $(".wraper-mobile-header").addClass("open-mMenu");
            $("body").addClass("lockScroll");
            $("body").append('<div class="mobile-header-backdrop"></div>');
          }
        });
      }
    });

    // ========= dropdown ======

    $(".onhover-dropdown").on("click", function (e) {
      e.stopPropagation();
      $(this).children(".onhover-show-div").toggleClass("active");
    });
    $("body").on("click", function (e) {
      if (
        !$(".onhover-dropdown").is(e.target) &&
        $(".onhover-show-div").has(e.target).length === 0 &&
        $(".onhover-show-div.active").has(e.target).length === 0
      ) {
        $(".onhover-show-div").removeClass("active");
      }
    });

    // ============ start for footer ===========
    // if (Wwidth < 768) {
    //   $(".footer-menu-block .headingText").on("click", function () {
    //     if (
    //       $(this).closest(".footer-content-block").hasClass("open-footer-menu")
    //     ) {
    //       $(this)
    //         .closest(".footer-content-block")
    //         .removeClass("open-footer-menu");
    //       $(".footer-content-block .menu").slideUp();
    //       $(".footer-content-block").removeClass("open-footer-menu");
    //       $(this).next(".menu").slideUp();
    //       // $('body').removeClass('lockScroll');
    //     } else {
    //       $(".footer-content-block .menu").slideUp();
    //       $(".footer-content-block").removeClass("open-footer-menu");
    //       $(this).closest(".footer-content-block").addClass("open-footer-menu");
    //       $(this).next(".menu").slideDown();
    //     }
    //   });
    // }

    // ============ end for footer ===========

    // ------------- counter up ------------
    if ($(".counter").length > 0) {
      var counts = [];

      $(".statvalue").each(function (i) {
        var num = $(this).attr("numx"); //end count
        var nuen = $(this).text();
        if (nuen === "") {
          nuen = 0;
        }

        let options = {
          startVal: 1,
          duration: 2,
        };

        //counts.push(new CountUp('statvalue_1', 7753, options));
        counts.push(new countUp.CountUp(this, num, options));
        counts[i].start();
      });

      var waypoint1 = new Waypoint({
        element: document.getElementById("statistics"),
        handler: function (direction) {
          if (direction == "up") {
            // for (var i = 0; i < counts.length; i++) {
            //   counts[i].reset();
            //   counts[i].start();
            // }
          } else {
            for (var i = 0; i < counts.length; i++) {
              counts[i].reset();
              counts[i].start();
            }
          }
        },
        offset: "10%",
      });
    }

    // if (document.querySelectorAll(".split_text").length > 0) {
    //   document.querySelectorAll(".split_text").forEach((splitText) => {
    //     new SplitType(splitText, {
    //       types: "words",
    //     });

    //     gsap.to(".split_text", {
    //       opacity: 1,
    //     });
    //     gsap.to(".word", {
    //       y: 0,
    //       stagger: 0.06,
    //       delay: 0.2,
    //       duration: 0.1,
    //       opacity: 1,
    //     });
    //   });
    // }
  });
  // end ---- document.ready
})(jQuery);
// ------------ javascript ------------
document.addEventListener("DOMContentLoaded", () => {
  let wdWidth = window.innerWidth;
  let wdHeight = window.innerHeight;
  const header = document.querySelector(".wraper-header");
  const headerHeight = document.querySelector(".wraper-header").innerHeight;

  function stickyHeader() {
    if (window.scrollY > 0) {
      header.classList.add("i-am-sticky");
    } else {
      header.classList.remove("i-am-sticky");
    }
  }
  stickyHeader();
  window.addEventListener("scroll", () => {
    stickyHeader();
  });

  // ------------ hero image flip animation ------------

  function homePageBannerAnimation() {
    // Get the element with the data-images attribute
    const imageContainer = document.getElementById(
      "home-banner-grid-container"
    );

    if (imageContainer) {
      // Retrieve the data attribute value and parse it into an array
      const imageList = JSON.parse(
        imageContainer.getAttribute("data-home-page-banner-images")
      );

      // const imageList = [
      //   "assets/images/home/hero-banner-img1.jpg",
      //   "assets/images/home/hero-banner-img2.jpg",
      //   "assets/images/home/hero-banner-img3.jpg",
      // ];

      const tiles = imageContainer.querySelectorAll(".tile");
      let currentImageIndex = 0;

      // Track state per tile
      const tileVisibleFace = new Array(tiles.length).fill("front");
      const tileImageIndices = new Array(tiles.length).fill(0);

      function setTileFace(tile, imageUrl, faceClass, index) {
        const col = index % 4;
        const row = Math.floor(index / 4);
        const face = tile.querySelector(`.${faceClass}`);
        face.style.backgroundImage = `url(${imageUrl})`;
        face.style.backgroundPosition = `${col * 33.333}% ${row * 50}%`;
      }

      function initTiles() {
        tiles.forEach((tile, index) => {
          const inner = tile.querySelector(".inner");
          setTileFace(tile, imageList[currentImageIndex], "front", index);
          setTileFace(
            tile,
            imageList[(currentImageIndex + 1) % imageList.length],
            "back",
            index
          );
          inner.classList.remove("flipped");
          tileVisibleFace[index] = "front";
          tileImageIndices[index] = currentImageIndex;
        });
      }

      function flipTile(tile, index, nextImageIndex) {
        if (tileImageIndices[index] === nextImageIndex) return;

        const inner = tile.querySelector(".inner");
        const currentFace = tileVisibleFace[index];
        const hiddenFace = currentFace === "front" ? "back" : "front";

        // Set next image on hidden face
        setTileFace(tile, imageList[nextImageIndex], hiddenFace, index);

        // Trigger flip
        inner.classList.toggle("flipped");

        // Update state
        tileVisibleFace[index] = hiddenFace;
        tileImageIndices[index] = nextImageIndex;
      }

      function startSequentialFlip() {
        const nextImageIndex = (currentImageIndex + 1) % imageList.length;
        const shuffledTiles = Array.from(tiles)
          .map((tile, i) => ({ tile, index: i }))
          .sort(() => Math.random() - 0.5);

        let i = 0;
        const interval = setInterval(() => {
          if (i >= shuffledTiles.length) {
            clearInterval(interval);
            currentImageIndex = nextImageIndex;
            return;
          }

          const { tile, index } = shuffledTiles[i];
          flipTile(tile, index, nextImageIndex);
          i++;
        }, 300);
      }

      initTiles();
      setInterval(startSequentialFlip, 8000); // one full image flip every 5 seconds
    }
  }
  homePageBannerAnimation();
  // ------- end hero-slider-block-animation ---------

  // logo_slider
  if (typeof Splide === "undefined") {
    console.error("Splide.js is not loaded!");
    return;
  } else {
    window.splide.ExtensionsAutoScroll = {
      AutoScroll: window.splide.Extensions.AutoScroll,
    }; // AutoScroll Extension
  }

  let logoSlider;
  let logoSlider_elms = document.querySelectorAll(".logo_slider");
  if (logoSlider_elms) {
    for (var i = 0; i < logoSlider_elms.length; i++) {
      logoSlider = new Splide(logoSlider_elms[i], {
        autoWidth: true,
        perMove: 2,
        gap: "30px",
        mediaQuery: "min",
        speed: 1400,
        arrows: false,
        pagination: false,
        drag: true,
        type: "loop",
        clones: 50,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          576: {
            gap: "40px",
          },
          768: {
            gap: "50px",
          },
          1200: {
            gap: "64px",
          },
        },
      });

      logoSlider.mount(window.splide.ExtensionsAutoScroll);
    }
    // ------- gradient animation for header top --------
  }

  function gradientShiftSmooth() {
    const element = document.querySelector(".bannerCtaSection");
    const base = 74; // midpoint of the gradient stop range
    const range = 15; // how much it swings on each side (e.g., ±5%)
    const speed = 0.002; // lower = slower

    function animateGradient(timestamp) {
      const stop = base + range * Math.sin(timestamp * speed);
      element.style.background = `linear-gradient(-90deg, #000000 ${stop}%, #f15a29 100%)`;
      requestAnimationFrame(animateGradient);
    }

    requestAnimationFrame(animateGradient);
  }
  gradientShiftSmooth();

  // ------- flex-card -------

  // Get all elements with the class 'flex_card_group'
  const flexCardGroups = document.getElementsByClassName("flex_card_group");

  Array.from(flexCardGroups).forEach(function (flexCardModule) {
    // Get all elements with the 'flex_card_is_hoverable' class within this group
    const hoverableCards = flexCardModule.getElementsByClassName(
      "flex_card_is_hoverable"
    );

    // Loop through each hoverable card and attach event listeners
    Array.from(hoverableCards).forEach(function (hoverableCard) {
      hoverableCard.addEventListener("mouseover", function () {
        // Find the first element with the 'always_hovered' class in the current group
        const flexCard_firstBox =
          flexCardModule.getElementsByClassName("always_hovered")[0];
        if (flexCard_firstBox) {
          flexCard_firstBox.classList.remove("is_hovered");
        }
      });

      hoverableCard.addEventListener("mouseout", function () {
        // Find the first element with the 'always_hovered' class in the current group
        const flexCard_firstBox =
          flexCardModule.getElementsByClassName("always_hovered")[0];
        if (flexCard_firstBox) {
          flexCard_firstBox.classList.add("is_hovered");
        }
      });
    });
  });

  // ========= start iws_slider =========

  // --------- iws_slider_main ----------

  if (document.querySelector("#iws_slider_main")) {
    let iws_slider_main = new Splide("#iws_slider_main", {
      type: "slide",
      rewind: true,
      pagination: false,
      arrows: false,
      cover: true,
      autoplay: true,
      interval: 4000,
      speed: 1500,
    });

    let iws_thumb_slider = new Splide("#iws_thumb_slider", {
      //height: 180,
      gap: 0,
      rewind: true,
      pagination: false,
      isNavigation: true,
      focus: "center",
      arrows: false,
      mediaQuery: "min",
      breakpoints: {
        0: {
          fixedWidth: "100%",
          //height: 100,
        },
        768: {
          fixedWidth: "25%",
          //fixedWidth: 200,
          //height: 100,
        },
      },
    });

    iws_slider_main.sync(iws_thumb_slider);
    iws_slider_main.mount();
    iws_thumb_slider.mount();
  }

  // ========= end iws_slider =========

  // =========== start roles_slider ===========

  // function isThumbSliderOverflowing(sliderElement) {
  //   const track = sliderElement.querySelector(".splide__track");
  //   const list = track.querySelector(".splide__list");
  //   console.log(list.scrollWidth , track.clientWidth)
  //   return list.scrollWidth > track.clientWidth;
  // }

  if (document.querySelector("#roles-thumb-slider")) {
    // Thumb slider (master)
    const thumbSliderEl = document.querySelector("#roles-thumb-slider");

    const thumbSlider = new Splide("#roles-thumb-slider", {
      autoWidth: true,
      gap: 18,
      rewind: true,
      pagination: false,
      isNavigation: true,
      //focus: "center",
      arrows: false,
      drag: false,
      speed: 1500,
      focus: 0,
      mediaQuery: "min",
      breakpoints: {
        768: { fixedWidth: 200, autoWidth: false },
        1200: { fixedWidth: 170 },
        1400: { fixedWidth: 190 },
        1800: { fixedWidth: 257 },
      },
    });

    // When Splide is fully mounted
    thumbSlider.on("mounted", function () {
      const track = thumbSliderEl.querySelector(".splide__track");
      const list = track.querySelector(".splide__list");

      const overflow = list.scrollWidth > track.clientWidth;

      if (overflow) {
        // Dynamically enable drag if needed
        thumbSlider.options = { drag: true };
      } else {
        thumbSlider.options = { drag: false };
      }
    });

    // Content slider (slave)
    const contentSlider = new Splide("#roles-main-content-slider", {
      type: "slide",
      rewind: true,
      pagination: false,
      arrows: false,
      speed: 1000,
      drag: false,
      autoplay: true,
      interval: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1500,
    });

    // Image slider (slave)
    const imageSlider = new Splide("#roles-main-image-slider", {
      type: "slide",
      rewind: true,
      pagination: false,
      arrows: true,
      speed: 1000,
      drag: false,
      classes: {
        arrows: "splide__arrows simple_splide__arrows",
      },
      autoplay: true,
      interval: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1500,
    });

    // Sync all to the thumbSlider
    thumbSlider.sync(contentSlider);
    thumbSlider.sync(imageSlider);

    // Mount all — master last
    contentSlider.mount();
    imageSlider.mount();
    thumbSlider.mount();

    // Underline animation
    function animateUnderline(index) {
      document
        .querySelectorAll(".roles_thumb_slider .underline")
        .forEach((el, i) => {
          el.style.transition = "none";
          el.style.transform = "scaleX(0)";
          if (i === index) {
            setTimeout(() => {
              el.style.transition = "transform 5.5s linear";
              el.style.transform = "scaleX(1)";
            }, 10);
          }
        });
    }

    thumbSlider.on("mounted move", function () {
      animateUnderline(thumbSlider.index);
    });
  }

  // =========== end roles_slider ===========

  // ===== testimonial_slider ======
  if (document.querySelector("#testimonial_review_slider")) {
    let testimonial_image_slider = new Splide("#testimonial_image_slider", {
      type: "slide",
      pagination: false,
      arrows: false,
      drag: true,
      speed: 1200,
      gap: 0,
    });

    let testimonial_review_slider = new Splide("#testimonial_review_slider", {
      type: "slide",
      pagination: false,
      arrows: false,
      drag: true,
      speed: 1200,
    });

    // Sync sliders
    testimonial_image_slider.sync(testimonial_review_slider);
    const testimonial_nextBtn = document.querySelector(
      ".testimonial_splide_arrows .splide__arrow--next"
    );
    const testimonial_prevBtn = document.querySelector(
      ".testimonial_splide_arrows .splide__arrow--prev"
    );
    function updateButtons() {
      const index = testimonial_review_slider.index;
      const lastIndex = testimonial_review_slider.length - 1;

      testimonial_prevBtn.disabled = index === 0;
      testimonial_nextBtn.disabled = index === lastIndex;
    }

    // Update slide number on move
    testimonial_review_slider.on("mounted", function () {
      updateButtons();
      let totalSlides =
        testimonial_review_slider.Components.Slides.get().length;
      document.querySelector(".testimonial-slide-number .total").textContent =
        "/" + totalSlides;
    });

    testimonial_review_slider.on("move", function (newIndex) {
      updateButtons();
      document.getElementById("testimonial-current-slide").textContent =
        newIndex + 1;
    });

    testimonial_image_slider.mount();
    testimonial_review_slider.mount();

    document
      .querySelector(".testimonial_splide_arrows .splide__arrow--prev")
      .addEventListener("click", () => {
        testimonial_review_slider.go("<");
      });
    document
      .querySelector(".testimonial_splide_arrows .splide__arrow--next")
      .addEventListener("click", () => {
        testimonial_review_slider.go(">");
      });
  }

  // --------  resources_tab_slider ---------------

  document
    .querySelectorAll(".resources_tab_slider")
    .forEach(function (sliderEl) {
      let totalSlides = sliderEl.querySelectorAll(
        ".resources_tab_slider .splide__slide"
      ).length;

      if (wdWidth >= 1200) {
        let firstSlide = sliderEl.querySelector(".splide__slide");
        if (firstSlide) {
          firstSlide.classList.add("custom-large-slide");
        }
      }

      let splideInstance = new Splide(sliderEl, {
        perPage: 1,
        mediaQuery: "min",
        gap: "24px",
        pagination: false,
        arrows: totalSlides > 1,
        classes: {
          arrows:
            "splide__arrows comn_boxstyle_splide__arrows ms-auto me-auto mt-4",
        },
        breakpoints: {
          768: {
            perPage: 2,
            drag: totalSlides > 2,
            arrows: totalSlides > 2,
          },
          992: {
            perPage: 3,
            drag: totalSlides > 3,
            arrows: totalSlides > 3,
          },
          1200: {
            perPage: "auto",
            drag: totalSlides > 3,
            arrows: totalSlides > 3,
            gap: "36px",
          },
        },
      });

      splideInstance.mount();
    });

  // for truncateText

  function truncateText(el, lines) {
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * lines;

    while (el.scrollHeight > maxHeight) {
      el.textContent = el.textContent.replace(/\W*\s(\S)*$/, "...");
    }
  }

  if (navigator.userAgent.toLowerCase().includes("firefox")) {
    const elements = document.querySelectorAll(".multi-2-line-ellipsis");
    elements.forEach((el) => truncateText(el, 2));
  }

  // function createMasonryLayout() {
  //   const container = document.querySelector(".msn_block_items_holder");
  //   const boxes = Array.from(container.querySelectorAll(".msn_block_item"));

  //   // Ensure the container has a known width
  //   const containerWidth = container.offsetWidth;

  //   // Percentage width of each box (48% in this case, you can adjust as needed)
  //   const boxWidthPercentage = 50;
  //   const gap = 36; // Define the gap between boxes (in pixels)

  //   // Calculate the box width based on container width and percentage
  //   const columnWidth = containerWidth * (boxWidthPercentage / 100) - gap;

  //   // Determine the number of columns based on the container width
  //   const columns = Math.floor(containerWidth / (columnWidth + gap));

  //   // Array to track the height of each column
  //   let columnHeights = Array(columns).fill(0);

  //   // Make sure the container has a position: relative
  //   container.style.position = "relative";

  //   // Place boxes dynamically
  //   boxes.forEach((box) => {
  //     // Ensure each box's height is properly calculated after all content is loaded
  //     const boxHeight = box.offsetHeight;

  //     // Find the column with the smallest height
  //     const minHeight = Math.min(...columnHeights);
  //     const columnIndex = columnHeights.indexOf(minHeight);

  //     // Position the box in the column with the smallest height
  //     const leftPosition = columnIndex * (columnWidth + gap); // Account for the gap
  //     const topPosition = columnHeights[columnIndex];

  //     // Apply the calculated positioning
  //     box.style.left = `${leftPosition}px`;
  //     box.style.top = `${topPosition}px`;

  //     // Update the column height after placing the box
  //     columnHeights[columnIndex] += boxHeight + gap; // Add the height of the box plus the gap
  //   });

  //   // Adjust the container's height to match the tallest column
  //   const maxColumnHeight = Math.max(...columnHeights);
  //   container.style.height = `${maxColumnHeight}px`;
  // }

  // if (document.querySelector(".msn_block_items_holder ")) {

  //   if (wdWidth >= 992) {
  //     createMasonryLayout();
  //   }
  //   window.addEventListener("resize", function () {
  //     if (wdWidth >= 992) {
  //       createMasonryLayout();
  //     }
  //   });
  // }

  function createMasonryLayout(container) {
    const boxes = Array.from(container.querySelectorAll(".msn_block_item"));

    // Ensure the container has a known width
    const containerWidth = container.offsetWidth;

    if (containerWidth <= 0) {
      console.error("Container width is invalid:", containerWidth);
      return; // Exit the function if the container width is not valid
    }

    // Percentage width of each box (48% in this case, you can adjust as needed)
    const boxWidthPercentage = 50;
    const gap = 36; // Define the gap between boxes (in pixels)

    // Calculate the box width based on container width and percentage
    const columnWidth = containerWidth * (boxWidthPercentage / 100) - gap;

    if (columnWidth <= 0) {
      console.error("Column width is invalid:", columnWidth);
      return; // Exit if the column width is invalid
    }

    // Determine the number of columns based on the container width
    const columns = Math.floor(containerWidth / (columnWidth + gap));

    if (columns <= 0) {
      console.error("Invalid number of columns:", columns);
      return; // Exit if the number of columns is zero or negative
    }

    // Array to track the height of each column
    let columnHeights = Array(columns).fill(0);

    // Make sure the container has a position: relative
    container.style.position = "relative";

    // Place boxes dynamically
    boxes.forEach((box) => {
      // Ensure each box's height is properly calculated after all content is loaded
      const boxHeight = box.offsetHeight;

      // Find the column with the smallest height
      const minHeight = Math.min(...columnHeights);
      const columnIndex = columnHeights.indexOf(minHeight);

      // Position the box in the column with the smallest height
      const leftPosition = columnIndex * (columnWidth + gap); // Account for the gap
      const topPosition = columnHeights[columnIndex];

      // Apply the calculated positioning
      box.style.left = `${leftPosition}px`;
      box.style.top = `${topPosition}px`;

      // Update the column height after placing the box
      columnHeights[columnIndex] += boxHeight + gap; // Add the height of the box plus the gap
    });

    // Adjust the container's height to match the tallest column
    const maxColumnHeight = Math.max(...columnHeights);
    container.style.height = `${maxColumnHeight}px`;
  }

  if (document.querySelector(".msn_block_items_holder")) {
    // Ensure the layout is recalculated for each container when the window is resized
    const msnContainers = document.querySelectorAll(".msn_block_items_holder");

    if (wdWidth >= 992) {
      msnContainers.forEach((container) => {
        createMasonryLayout(container);
      });
    } else {
      console.log("first load");
      console.log(wdWidth);
      msnContainers.forEach((container) => {
        container.style.height = "auto";
      });
    }

    window.addEventListener("resize", function () {
      setTimeout(function () {
        console.log("load");
        console.log(wdWidth);
        if (wdWidth >= 992) {
          msnContainers.forEach((container) => {
            createMasonryLayout(container);
          });
        } else {
          console.log("load 2");
          console.log(wdWidth);

          msnContainers.forEach((container) => {
            container.style.height = "auto";
          });
        }
      }, 600);
    });
  }

  // ============ block ===========
  if (document.querySelector(".home_data_into_action_sec")) {
    const navLinks = document.querySelectorAll(
      ".home_data_into_action_nav .nav-link"
    );
    const blocks = document.querySelectorAll(".dia_block");

    const sidebar = document.querySelector(".dia_right_content_wrap");

    function checkIfFinished() {
      const lastBlock = blocks[blocks.length - 1];
      const lastBlockRect = lastBlock.getBoundingClientRect();

      // If the bottom of the last block is within the viewport (or above), we're at the end
      if (lastBlockRect.bottom <= window.innerHeight + 10) {
        sidebar.classList.add("finished");
      } else {
        sidebar.classList.remove("finished");
      }
    }

    navLinks.forEach((link, i) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetBlock = document.getElementById(targetId);

        // Scroll window so block is at the top
        const y =
          targetBlock.getBoundingClientRect().top + window.pageYOffset - 70;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      });
    });

    window.addEventListener("scroll", () => {
      let closestIndex = 0;
      let minDistance = Infinity;
      blocks.forEach((block, i) => {
        block.classList.remove("active");
      });
      blocks.forEach((block, i) => {
        const rect = block.getBoundingClientRect();
        const distance = Math.abs(rect.top - 70); // 20px offset for padding

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
          block.classList.add("active");
        }
      });
      navLinks.forEach((l) => l.classList.remove("active"));
      if (navLinks[closestIndex]) {
        navLinks[closestIndex].classList.add("active");
      }

      // Check if finished
      //checkIfFinished();
    });
    //checkIfFinished();

    // window.onload = createMasonryLayout;
    // window.addEventListener("resize", createMasonryLayout);

    // --------- dia_content_slider -------------
    if (document.querySelector(".dia_content_slider")) {
      let dia_content_slider = new Splide(".dia_content_slider", {
        gap: "13px",
        rewind: false,
        pagination: true,
        // focus: "center",
        arrows: false,
        mediaQuery: "min",
        breakpoints: {
          0: {
            fixedWidth: "320px",
            padding: { left: "15px", right: "15px" },
            //height: 100,
          },
          576: {
            fixedWidth: "320px",
            padding: { left: "15px", right: "15px" },
            //fixedWidth: 200,
            //height: 100,
          },
        },
      });
      dia_content_slider.mount();
    }
  }

  // SplitText
  document.querySelectorAll(".split_text").forEach((splitText) => {
    let split_text = new SplitType(splitText, {
      types: "words",
      tagName: "span",
    });
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 85%",
      //markers:true,
      onEnter: () => timeline.play(),
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    // ScrollTrigger.create({
    //   trigger: triggerElement,
    //   start: "top 50%",
    //   markers:true,
    //   onEnter: () => timeline.play(),
    // });
  }

  $(".words_slide_from_right").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      x: "1em",
      duration: 0.8,
      ease: "power2.out",
      stagger: { amount: 0.3 },
    });
    createScrollTrigger($(this), tl);
  });

  // ======= svgZoom ===========

  function svgZoom() {
    const svgElement = document.getElementById("mySvg");
    const toggleBtn = document.getElementById("toggleZoomBtn");
    const toggleBtnText = toggleBtn.querySelector("span");

    const panZoomInstance = svgPanZoom(svgElement, {
      zoomEnabled: true, // required for methods to work
      controlIconsEnabled: false,
      fit: true,
      center: true,
      minZoom: 1,
      maxZoom: 10,
    });

    // Immediately disable interactivity
    panZoomInstance.disableZoom();
    panZoomInstance.disablePan();

    let zoomEnabled = false;

    toggleBtn.addEventListener("click", () => {
      zoomEnabled = !zoomEnabled;

      if (zoomEnabled) {
        panZoomInstance.enableZoom();
        panZoomInstance.enablePan();
        toggleBtnText.textContent = "Zoom Out";
      } else {
        panZoomInstance.disableZoom();
        panZoomInstance.disablePan();
        panZoomInstance.resetZoom();
        panZoomInstance.center();
        toggleBtnText.textContent = "Zoom In";
      }
    });
  }

  if (document.querySelector("#mySvg")) {
    svgZoom();
  }

  function updateTargetPosition() {
    const reference = document.querySelector(".client_logo_divider_line");
    const target = document.getElementById("home_hero_img");

    if (target) {
      const refWidth = reference.getBoundingClientRect().left;
      // Set left gap as half of reference's width
      const gap = refWidth * 2;
      // Apply new position to target element
      target.style.width = `${gap}px`;
    }
  }
  if (wdWidth > 991) {
    updateTargetPosition();
    // Update on window resize
  }
  window.addEventListener("resize", function () {
    if (wdWidth > 991) {
      updateTargetPosition();
    }
  });

  /////////////////////////////////////////////////////////////////////////////

  // ========================= ////// start blog page Js \\\\\\\\ =====================

  if (document.querySelector(".bloglisting_featured_blog_slider")) {
    let bloglisting_featured_blog_slider = new Splide(
      ".bloglisting_featured_blog_slider",
      {
        type: "slide",
        rewind: true,
        pagination: false,
        arrows: true,
        classes: {
          arrows: "splide__arrows comn_boxstyle_splide__arrows",
        },
        //cover: true,
        autoplay: true,
        interval: 4000,
        speed: 1500,
      }
    );
    bloglisting_featured_blog_slider.mount();
  }

  if (document.querySelector(".wi_list")) {
    let wiLists = document.querySelectorAll(".wi_list");
    console.log(wiLists.offsetWidth);
    wiLists.forEach(function (wiList) {
      if (wiList && wiList.offsetWidth > 0 && wiList.offsetHeight > 0) {
        const wi_list_navLinks = wiList.querySelectorAll("li a");

        console.log(wi_list_navLinks);

        // Add click event listener for each navigation link
        wi_list_navLinks.forEach((link, i) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            const wi_list_targetId = this.getAttribute("href").substring(1);
            const wi_list_targetHeading =
              document.getElementById(wi_list_targetId);

            // Scroll window so heading is at the top with some offset (e.g., 70px)
            const y =
              wi_list_targetHeading.getBoundingClientRect().top +
              window.pageYOffset -
              70;

            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          });
        });

        // Add scroll event listener to highlight active section based on scroll position
        window.addEventListener("scroll", () => {
          let wi_list_closestIndex = 0;
          let wi_list_minDistance = Infinity;

          wi_list_navLinks.forEach((link, i) => {
            const wi_list_targetId = link.getAttribute("href").substring(1);
            const wi_list_targetHeading =
              document.getElementById(wi_list_targetId);

            // Get the heading’s position relative to the viewport
            const wi_list_rect = wi_list_targetHeading.getBoundingClientRect();
            const wi_list_distance = Math.abs(wi_list_rect.top - 70); // 70px offset to account for fixed header or padding

            if (wi_list_distance < wi_list_minDistance) {
              wi_list_minDistance = wi_list_distance;
              wi_list_closestIndex = i;
            }
          });

          // Remove active class from all links and add it to the closest section link
          wi_list_navLinks.forEach((l) => l.classList.remove("active"));
          if (wi_list_navLinks[wi_list_closestIndex]) {
            wi_list_navLinks[wi_list_closestIndex].classList.add("active");
          }
        });
      }
    });
  }

  if (document.querySelector(".more_blog_slider")) {
    let totalSlides = document.querySelectorAll(
      ".more_blog_slider .splide__slide"
    ).length;
    let sliderElement = document.querySelector(".more_blog_slider");
    let more_blog_Slider = new Splide(".more_blog_slider", {
      //autoWidth: true,
      gap: 25,
      rewind: false,
      pagination: false,
      //focus: "center",
      arrow: totalSlides > 2 ? true : false,
      drag: totalSlides > 2 ? true : false,
      classes: {
        arrows: "splide__arrows comn_boxstyle_vcenter_splide__arrows",
      },
      speed: 1500,
      padding: { right: "5px" },
      mediaQuery: "min",
      breakpoints: {
        0: { fixedWidth: 320, autoWidth: false },
        768: { fixedWidth: 350, padding: { left: "30px" } },
        1200: { fixedWidth: 380, padding: { left: "50px" } },
        1400: { fixedWidth: 380 },
        1800: { fixedWidth: 440 },
      },
    });

    more_blog_Slider.on("mounted moved ", () => {
      let splideTrack = sliderElement.querySelector(
        ".more_blog_slider .splide__track"
      );
      let splideSlides = sliderElement.querySelectorAll(
        ".more_blog_slider .splide__slide"
      );
      let lastSlide = splideSlides[splideSlides.length - 1];

      let trackRect = splideTrack.getBoundingClientRect();
      let lastRect = lastSlide.getBoundingClientRect();

      let lastSlideWidth = lastRect.width;

      // Calculate visible width of last slide within the track
      let visibleLeft = Math.max(lastRect.left, trackRect.left);
      let visibleRight = Math.min(lastRect.right, trackRect.right);
      let visibleWidth = visibleRight - visibleLeft;

      // Check if at least 1/3 of the last slide is visible
      if (visibleWidth >= lastSlideWidth / 3) {
        sliderElement.classList.add("all-slides-viewed");
      } else {
        sliderElement.classList.remove("all-slides-viewed");
      }
    });

    more_blog_Slider.mount();
  }

  if (document.querySelector(".wi_list_popup_toggle_btn")) {
    document
      .querySelector(".wi_list_popup_toggle_btn")
      .addEventListener("click", function () {
        var wrapperMobileHeader = document.querySelector(
          ".wi_list_popup_toggle"
        );
        var body = document.body;

        if (wrapperMobileHeader.classList.contains("open")) {
          wrapperMobileHeader.classList.remove("open");
          body.classList.remove("lockScroll");
          var backdrop = document.querySelector(".wi_list_popup_backdrop");
          if (backdrop) backdrop.remove();
        } else {
          wrapperMobileHeader.classList.add("open");
          body.classList.add("lockScroll");
          var backdrop = document.createElement("div");
          backdrop.classList.add("wi_list_popup_backdrop");
          body.appendChild(backdrop);
        }

        var mobileHeaderBackdrop = document.querySelector(
          ".wi_list_popup_backdrop"
        );
        if (mobileHeaderBackdrop) {
          mobileHeaderBackdrop.addEventListener("click", function () {
            if (wrapperMobileHeader.classList.contains("open")) {
              wrapperMobileHeader.classList.remove("open");
              body.classList.remove("lockScroll");
              mobileHeaderBackdrop.remove();
            } else {
              wrapperMobileHeader.classList.add("open");
              body.classList.add("lockScroll");
              var newBackdrop = document.createElement("div");
              newBackdrop.classList.add("wi_list_popup_backdrop");
              body.appendChild(newBackdrop);
            }
          });
        }
      });
  }

  // ========================= ////// end blog page Js \\\\\\\\ =====================

  /////////////////////////////////////////////////////////////////////////

  // ========================= ////// start why-mom page Js \\\\\\\\ =====================
  // if (
  //   wdWidth >= 1200 &&
  //   document.querySelectorAll(".whymom_card_sec").length > 0
  // ) {
  //   const whymom_cardElements = [
  //     ...document.querySelectorAll(".whymom_card_sec"),
  //   ];
  //   const totalContentElements = whymom_cardElements.length;

  //   whymom_cardElements.forEach((el, position) => {
  //     const isLast = position === totalContentElements - 1;

  //     gsap.to(el, {
  //       ease: "none",
  //       //scale: 0.8,
  //       //backgroundColor: "rgba(54, 54, 54, 1)",
  //       yPercent: isLast ? 0 : 0,
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "center center",
  //         end: "+=100%",
  //         scrub: true,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   });
  // }

  // document.addEventListener("DOMContentLoaded", function () {
  //   if (
  //     wdWidth >= 1200 &&
  //     document.querySelectorAll(".whymom_card_sec").length > 0
  //   ) {
  //     const allCardsSec = document.querySelector(".whymom_all_cards_sec");
  //     const cards = document.querySelectorAll(".whymom_card_sec");
  //     const totalCards = cards.length;

  //     // Pin the overall wrapper
  //     ScrollTrigger.create({
  //       trigger: allCardsSec,
  //       start: "top top",
  //       end: `+=${(totalCards - 1) * 100}vh`,
  //       pin: true,
  //       anticipatePin: 1,
  //       scrub: false,
  //     });

  //     // Loop cards (except first one which is static)
  //     cards.forEach((card, index) => {
  //       if (index === 0) return; // First card stays fixed

  //       const scrollContent = card.querySelector(".scrollable_content");
  //       if (!scrollContent) {
  //         console.warn(`.scrollable_content missing in card index ${index}`);
  //         return;
  //       }

  //       const scrollHeight = scrollContent.scrollHeight || 0;
  //       const visibleHeight = card.offsetHeight || 0;
  //       const scrollDistance = Math.max(0, scrollHeight - visibleHeight);

  //       gsap.to(scrollContent, {
  //         y: -scrollDistance,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: allCardsSec,
  //           start: `${(index - 1) * 100}vh top`,
  //           end: `${index * 100}vh top`,
  //           scrub: true,
  //           onEnter: () => activateCard(index),
  //           onEnterBack: () => activateCard(index),
  //         },
  //       });
  //     });

  //     // Card visibility control
  //     function activateCard(activeIndex) {
  //       cards.forEach((c, i) => {
  //         c.classList.toggle("active", i === activeIndex);
  //       });
  //     }

  //     activateCard(0); // Show first card
  //   }
  // });

  // ------------ hero image flip animation ------------

  function momBannerAnimation() {
    const imageContainer = document.getElementById("mom-banner-grid-container");

    if (imageContainer) {
      const imageList = JSON.parse(
        imageContainer.getAttribute("data-home-page-banner-images")
      );

      const tiles = imageContainer.querySelectorAll(".tile");
      let currentImageIndex = 0;

      const tileVisibleFace = new Array(tiles.length).fill("front");
      const tileImageIndices = new Array(tiles.length).fill(0);

      function setTileFace(tile, imageUrl, faceClass, index) {
        const col = index % 3; // 3 columns
        const row = Math.floor(index / 3); // 3 rows if total tiles = 9
        const face = tile.querySelector(`.${faceClass}`);
        face.style.backgroundImage = `url(${imageUrl})`;
        face.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
      }

      function initTiles() {
        tiles.forEach((tile, index) => {
          const inner = tile.querySelector(".inner");
          setTileFace(tile, imageList[currentImageIndex], "front", index);
          setTileFace(
            tile,
            imageList[(currentImageIndex + 1) % imageList.length],
            "back",
            index
          );
          inner.classList.remove("flipped");
          tileVisibleFace[index] = "front";
          tileImageIndices[index] = currentImageIndex;
        });
      }

      function flipTile(tile, index, nextImageIndex) {
        if (tileImageIndices[index] === nextImageIndex) return;

        const inner = tile.querySelector(".inner");
        const currentFace = tileVisibleFace[index];
        const hiddenFace = currentFace === "front" ? "back" : "front";

        setTileFace(tile, imageList[nextImageIndex], hiddenFace, index);
        inner.classList.toggle("flipped");

        tileVisibleFace[index] = hiddenFace;
        tileImageIndices[index] = nextImageIndex;
      }

      function startSequentialFlip() {
        const nextImageIndex = (currentImageIndex + 1) % imageList.length;
        const shuffledTiles = Array.from(tiles)
          .map((tile, i) => ({ tile, index: i }))
          .sort(() => Math.random() - 0.5);

        let i = 0;
        const interval = setInterval(() => {
          if (i >= shuffledTiles.length) {
            clearInterval(interval);
            currentImageIndex = nextImageIndex;
            return;
          }

          const { tile, index } = shuffledTiles[i];
          flipTile(tile, index, nextImageIndex);
          i++;
        }, 300);
      }

      initTiles();
      setInterval(startSequentialFlip, 8000);
    }
  }

  momBannerAnimation();
  // ------- end hero-slider-block-animation ---------
  if (document.querySelector(".mom-bottom-row")) {
    const current = document.querySelector(".mom-bottom-row");
    const previous = current.previousElementSibling;
    previous.classList.add("before_last");
  }

  function whymom_card_left_heading_height() {
    const leftHeadings = document.querySelectorAll(
      ".whymom_card_left_heading_holder"
    );
    const mainImgs = document.querySelectorAll(".whymom_card_main_img");

    leftHeadings.forEach((whymom_card_left_heading, index) => {
      const whymom_card_main_img = mainImgs[index];
      if (whymom_card_main_img) {
        const whymom_card_main_img_height = whymom_card_main_img.offsetHeight;
        whymom_card_left_heading.style.minHeight = `${whymom_card_main_img_height}px`;

        const whymom_card_left_heading_resizeObserver = new ResizeObserver(
          () => {
            whymom_card_left_heading.style.minHeight = `${whymom_card_main_img.offsetHeight}px`;
          }
        );

        whymom_card_left_heading_resizeObserver.observe(whymom_card_main_img);
      }
    });
  }

  if (document.querySelectorAll(".whymom_card_main_img").length > 0) {
    whymom_card_left_heading_height();
  }

  function whymom_platform_height() {
    const whymom_platform_right_parent = document.querySelector(
      ".whymom_platform_right_col"
    );
    const whymom_platform_right_child = document.querySelector(
      ".whymom_platform_right_content"
    );

    const whymom_platform_right_height =
      whymom_platform_right_child.offsetHeight;
    whymom_platform_right_parent.style.height = `${whymom_platform_right_height}px`;

    const whymom_platform_right_resizeObserver = new ResizeObserver(() => {
      whymom_platform_right_parent.style.height = `${whymom_platform_right_height}px`;
    });

    whymom_platform_right_resizeObserver.observe(whymom_platform_right_child);
  }
  if (document.querySelector(".whymom_platform_right_content")) {
    whymom_platform_height();
  }

  function whymom_accordion_height() {
    const whymom_accordion_right_parent = document.querySelector(
      ".whymom_accordion_right_col"
    );
    const whymom_accordion_right_child = document.querySelector(
      ".whymom_accordion_left_content_wrap"
    );

    const whymom_accordion_right_height =
      whymom_accordion_right_child.offsetHeight;
    whymom_accordion_right_parent.style.height = `${whymom_accordion_right_height}px`;

    const whymom_accordion_right_resizeObserver = new ResizeObserver(() => {
      whymom_accordion_right_parent.style.height = `${whymom_accordion_right_height}px`;
    });

    whymom_accordion_right_resizeObserver.observe(whymom_accordion_right_child);
  }
  if (document.querySelector(".whymom_accordion_right_content")) {
    whymom_accordion_height();
  }
  if (document.querySelector(".whymom_accordion")) {
    document
      .querySelectorAll(".whymom_accordion .accordion-button")
      .forEach((btn) => {
        btn.addEventListener("click", function () {
          const img = document.getElementById("mom_accordion_mainImage");
          const newSrc = this.getAttribute("data-accordion-img");

          // Fade out
          img.style.opacity = 0;

          // Wait for fade-out to complete before changing image
          setTimeout(() => {
            img.src = newSrc;

            // Fade back in
            img.onload = () => {
              img.style.opacity = 1;
            };
          }, 300); // Match part of the fade duration for smooth change
        });
      });
  }

  function whymomScalableFeatureSec() {
    const mainImage = document.getElementById("mainImage");

    function setFirstActiveOrSelected() {
      const blocks = document.querySelectorAll(".feature-block");
      if (window.innerWidth <= 767) {
        // Mobile: active for description
        blocks.forEach((b) => {
          b.classList.remove("active");
          b.classList.remove("selected");
        });
        blocks[0].classList.add("active");
        mainImage.src = blocks[0].getAttribute("data-img");
      } else {
        // Desktop: selected for highlight
        blocks.forEach((b) => {
          b.classList.remove("selected");
          b.classList.remove("active");
        });
        blocks[0].classList.add("selected");
        mainImage.src = blocks[0].getAttribute("data-img");
      }
    }

    function setupEvents() {
      const blocks = document.querySelectorAll(".feature-block");
      blocks.forEach((block) => {
        block.onmouseenter = null;
        block.onclick = null;

        block.addEventListener("mouseenter", function () {
          if (window.innerWidth > 767) {
            blocks.forEach((b) => b.classList.remove("selected"));
            this.classList.add("selected");
            mainImage.src = this.getAttribute("data-img");
          }
        });

        block.addEventListener("click", function () {
          if (window.innerWidth <= 767) {
            blocks.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            mainImage.src = this.getAttribute("data-img");
          }
        });
      });
      setFirstActiveOrSelected();
    }

    window.addEventListener("DOMContentLoaded", () => {
      setupEvents();
    });
    window.addEventListener("resize", () => {
      setupEvents();
    });
  }
  if (document.querySelector(".whymom_scalable_feature_content_wrap")) {
    whymomScalableFeatureSec();
  }
  if (document.querySelector(".whymom_features_mobile_slider")) {
    let whymom_features_slider = new Splide(".whymom_features_mobile_slider", {
      gap: "13px",
      rewind: false,
      pagination: true,
      // focus: "center",
      arrows: false,
      mediaQuery: "min",
      breakpoints: {
        0: {
          fixedWidth: "320px",
          padding: { left: "15px", right: "15px" },
          //height: 100,
        },
        576: {
          fixedWidth: "320px",
          padding: { left: "15px", right: "15px" },
          //fixedWidth: 200,
          //height: 100,
        },
      },
    });
    whymom_features_slider.mount();
  }

  function equalizeBoxHeights() {
    const equal_height_boxes = document.querySelectorAll(".equal_height_box");
    if (equal_height_boxes.length > 0) {
      let equal_height_box_maxHeight = 0;

      // Reset any previous height
      equal_height_boxes.forEach((box) => {
        box.style.height = "auto";
      });

      // Get the maximum height
      equal_height_boxes.forEach((box) => {
        if (box.offsetHeight > equal_height_box_maxHeight) {
          equal_height_box_maxHeight = box.offsetHeight;
        }
      });

      // Set all boxes to max height
      equal_height_boxes.forEach((box) => {
        box.style.height = equal_height_box_maxHeight + "px";
      });
    }
  }
  window.addEventListener("load", equalizeBoxHeights);
  window.addEventListener("resize", equalizeBoxHeights);

  let revealContainers = document.querySelectorAll(".reveal");
  if (revealContainers.length > 0) {
    revealContainers.forEach((cont) => {
      let image = cont.querySelector("img , video");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: cont,
          toggleActions: "restart none none reset",
          //toggleActions: "play none none none",
        },
      });

      tl.set(cont, { autoAlpha: 1 });
      tl.from(cont, 1.5, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  }

  let reveal_li = document.querySelectorAll(".reveal_li");
  if (reveal_li.length > 0) {
    reveal_li.forEach((cont) => {
      let li_el = cont.querySelectorAll("li");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: cont,
          toggleActions: "restart none none reset",
          //toggleActions: "play none none none",
          //markers:true,
        },
      });

      // tl.set(li_el, { autoAlpha: 1 });
      li_el.forEach((el) => {
        tl.from(el, {
          y: 20,
          ease: Power2.out,
          opacity: 0,
          duration: 0.2,
          stagger: 0.12,
        });
      });
    });
  }

  const whymom_card_sec_2 = document.querySelector(".whymom_card_sec_2");
  const whymom_card_sec_1 = document.querySelector(".whymom_card_sec_1");
  if (whymom_card_sec_1 && whymom_card_sec_2) {
    //let image = cont.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: whymom_card_sec_2,
        start: "top 50%",
        end: "top 10%",
        scrub: 1.5,
        //markers: true,
        // toggleActions: "restart none none reset",
        toggleActions: "restart none none reset",
      },
    });

    tl.set(whymom_card_sec_1, { autoAlpha: 1 });
    tl.fromTo(
      whymom_card_sec_1,
      1.5,
      {
        autoAlpha: 1,
        ease: Power2.out,
      },
      {
        autoAlpha: 0,
        ease: Power2.out,
      }
    );
  }
  // ========================= ////// start why-mom page Js \\\\\\\\ =====================

  ////////////////////////////////////////////////////////////////////////////

  // ========================= ////// start contact page Js \\\\\\\\ =====================

  const single_line_textarea = document.querySelectorAll(
    ".single_line_textarea"
  );
  if (single_line_textarea.length > 0) {
    single_line_textarea.forEach((textarea) => {
      textarea.addEventListener("input", function () {
        console.log("text");
        this.style.height = "auto"; // Reset height
        this.style.height = this.scrollHeight + "px"; // Set new height
      });
    });
  }

  // ------- choices select ------------
  if (document.querySelectorAll(".comn_form_select").length) {
    document.querySelectorAll(".comn_form_select").forEach((element) => {
      let comnFormSelectChoices = new Choices(element, {
        removeItemButton: true,
        searchEnabled: true,
        itemSelectText: "",
        placeholder: true,
        //placeholderValue: 'By Role',
      });
    });
  }

  const comn_selectWrappers = document.querySelectorAll(
    ".floating-label-group"
  );
  if (comn_selectWrappers) {
    comn_selectWrappers.forEach((selectWrapper) => {
      const selectEl = selectWrapper.querySelector("select");

      selectEl.addEventListener("change", function () {
        if (this.value) {
          selectWrapper.classList.add("has-value");
        } else {
          selectWrapper.classList.remove("has-value");
        }
      });
    });
  }

  if (document.querySelectorAll(".form-floating").length) {
    document.querySelectorAll(".form-floating").forEach(function (item) {
      const inputEle = item.querySelector(".form-control");
      if (inputEle) {
        // Check if the input already has a value
        if (inputEle.value !== "") {
          item.classList.add("input_focused");
        }

        inputEle.addEventListener("focusin", function () {
          item.classList.add("input_focused");
        });

        inputEle.addEventListener("blur", function () {
          if (inputEle.value === "") {
            item.classList.remove("input_focused");
          }
        });
      }
    });
  }

  if (document.querySelectorAll(".blog_latest_slider").length > 0) {
    document
      .querySelectorAll(".blog_latest_slider")
      .forEach(function (sliderEl) {
        let totalSlides = sliderEl.querySelectorAll(
          ".blog_latest_slider .splide__slide"
        ).length;

        let blog_latest_Slider = new Splide(sliderEl, {
          perPage: 1,
          mediaQuery: "min",
          gap: "17px",
          pagination: false,
          arrows: totalSlides > 1,
          classes: {
            arrows:
              "splide__arrows comn_boxstyle_splide__arrows ms-auto me-auto mt-4",
          },
          breakpoints: {
            768: {
              perPage: 2,
              drag: totalSlides > 2,
              arrows: totalSlides > 2,
            },
            992: {
              perPage: 3,
              drag: totalSlides > 3,
              arrows: totalSlides > 3,
            },
            1200: {
              perPage: 3,
              drag: totalSlides > 3,
              arrows: totalSlides > 3,
            },
          },
        });

        blog_latest_Slider.mount();
      });
  }
  if (document.querySelectorAll(".scroll_to_section_btn_js").length > 0) {
    document
      .querySelectorAll(".scroll_to_section_btn_js")
      .forEach(function (button) {
        button.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("data-target");

          const targetSection = document.getElementById(targetId);
          const header = document.querySelector(".wraper-header.i-am-sticky"); // adjust selector as needed
          console.log(targetSection);
          if (targetSection) {
            const headerHeight = header ? header.offsetHeight : 0;
            const sectionTop =
              targetSection.getBoundingClientRect().top + window.pageYOffset;
            const scrollPosition = sectionTop - headerHeight;

            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth",
            });
          }
        });
      });
  }

  // ========================= ////// end contact page Js \\\\\\\\ =====================

  ////////////////////////////////////////////////////////////////////////////

  // ========================= ////// start partner page Js \\\\\\\\ =====================

  if (document.querySelector(".partner_types_slider")) {
    const totalSlides = document.querySelectorAll(
      ".partner_types_slider .splide__slide"
    ).length;

    let partner_types_slider = new Splide(".partner_types_slider", {
      autoWidth: false,
      gap: 25,
      rewind: true,
      //autoplay: true,
      pagination: false,
      //interval: 3000,
      type: "loop",
      autoScroll: {
        speed: 1,
      },
      //clones: 50,
      //focus: "center",
      arrows: false,
      drag: true,
      // classes: {
      //   arrows: "splide__arrows comn_boxstyle_vcenter_splide__arrows",
      // },
      speed: 4000,
      padding: { left: "15px" },
      mediaQuery: "min",
      breakpoints: {
        0: { fixedWidth: 340 },
        768: {
          fixedWidth: 380,
          //padding: { left: (wdWidth - 694) / 2 }
        },
        992: {
          fixedWidth: 400,
          //padding: { left: (wdWidth - 934) / 2 }
        },
        1200: {
          fixedWidth: 463,
          drag: totalSlides > 2 ? true : false,
          //padding: { left: (wdWidth - 1160) / 2 }
        },
        1400: {
          fixedWidth: 463,
          //padding: { left: (wdWidth - 1364) / 2 }
        },
        1800: {
          fixedWidth: 563,
          // padding: { left: (wdWidth - 1600) / 2 }
        },
      },
    });

    partner_types_slider.mount(window.splide.ExtensionsAutoScroll);
  }

  // ------- comn_flex_card -------

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    const comnflexCardGroups = document.getElementsByClassName(
      "comn_flex_card_group"
    );

    Array.from(comnflexCardGroups).forEach(function (flexCardModule) {
      const hoverableCards = flexCardModule.getElementsByClassName(
        "comn_flex_card_is_hoverable"
      );

      Array.from(hoverableCards).forEach(function (hoverableCard) {
        hoverableCard.addEventListener("mouseover", function () {
          const flexCard_firstBox =
            flexCardModule.getElementsByClassName("always_hovered")[0];
          if (flexCard_firstBox) {
            flexCard_firstBox.classList.remove("is_hovered");
          }
        });

        hoverableCard.addEventListener("mouseout", function () {
          const flexCard_firstBox =
            flexCardModule.getElementsByClassName("always_hovered")[0];
          if (flexCard_firstBox) {
            flexCard_firstBox.classList.add("is_hovered");
          }
        });
      });
    });
  }

  // ========================= ////// end partner page Js \\\\\\\\ =====================

  ////////////////////////////////////////////////////////////////////////////
  // ========================= ////// start exponence page Js \\\\\\\\ =====================

  if (document.querySelectorAll(".exp_features_slider").length > 0) {
    document
      .querySelectorAll(".exp_features_slider")
      .forEach(function (sliderEl) {
        let totalSlides = sliderEl.querySelectorAll(
          ".exp_features_slider .splide__slide"
        ).length;

        let exp_features_slider = new Splide(sliderEl, {
          perPage: 1,
          mediaQuery: "min",
          gap: "20px",
          pagination: false,
          arrows: totalSlides > 1,
          classes: {
            arrows:
              "splide__arrows comn_boxstyle_splide__arrows ms-auto me-auto mt-4",
          },
          breakpoints: {
            768: {
              perPage: 1,
              drag: totalSlides > 1,
              arrows: totalSlides > 1,
            },
            992: {
              perPage: 2,
              drag: totalSlides > 2,
              arrows: totalSlides > 2,
            },
            1200: {
              perPage: 2,
              drag: totalSlides > 2,
              arrows: totalSlides > 2,
            },
          },
        });

        exp_features_slider.mount();
      });
  }

  if (document.querySelector(".capabilities_slider")) {
    const totalSlides = document.querySelectorAll(
      ".capabilities_slider .splide__slide"
    ).length;

    let capabilities_slider = new Splide(".capabilities_slider", {
      autoWidth: false,
      gap: 20,
      rewind: false,
      pagination: false,
      //focus: "center",
      arrows: false,
      drag: totalSlides > 2 ? true : false,
      // classes: {
      //   arrows: "splide__arrows comn_boxstyle_vcenter_splide__arrows",
      // },
      speed: 1500,
      padding: { left: "15px" },
      mediaQuery: "min",
      breakpoints: {
        0: { fixedWidth: 320 },
        576: { fixedWidth: 401, gap: 30 },
        768: { fixedWidth: 401, padding: { left: (wdWidth - 694) / 2 } },
        992: { fixedWidth: 401, padding: { left: (wdWidth - 934) / 2 } },
        1200: { fixedWidth: 401, padding: { left: (wdWidth - 1160) / 2 } },
        1400: { fixedWidth: 401, padding: { left: (wdWidth - 1364) / 2 } },
        1800: { fixedWidth: 463, padding: { left: (wdWidth - 1600) / 2 } },
      },
    });

    capabilities_slider.mount();
  }

  if (document.querySelector(".exp_accordion")) {
    // Handle accordion button click
    document
      .querySelectorAll(".exp_accordion .accordion-button")
      .forEach((btn) => {
        btn.addEventListener("click", function (event) {
          const img = document.getElementById("exp_accordion_mainImage");
          const newSrc = this.getAttribute("data-accordion-img");
          // Get the target collapse element
          const targetCollapse = document.querySelector(
            this.getAttribute("data-bs-target")
          );

          // If the target collapse is already expanded, do not trigger the collapse
          if (targetCollapse.classList.contains("show")) {
            return false; // If it's already expanded, do nothing (don't toggle it)
          }

          // Collapse all other items
          document
            .querySelectorAll(".exp_accordion .accordion-item")
            .forEach((el) => {
              el.classList.remove("open");
            });

          // Mark the current item as open
          const clickedItem = event.target.closest(".accordion-item");
          clickedItem.classList.add("open");

          // Fade out the image
          img.style.opacity = 0;

          // Wait for fade-out to complete before changing the image
          setTimeout(() => {
            img.src = newSrc;

            // Fade the image back in once it's loaded
            img.onload = () => {
              img.style.opacity = 1;
            };
          }, 300); // Duration for fade-out effect

          // Trigger the collapse to show
          const collapseInstance = new bootstrap.Collapse(targetCollapse, {
            toggle: true,
          });
        });
      });
  }

  // ===== testimonial_slider ======
  if (document.querySelector(".case_studies_content_slider")) {
    let case_studies_image_slider = new Splide(".case_studies_image_slider", {
      type: "slide",
      pagination: false,
      arrows: false,
      drag: true,
      speed: 1200,
      gap: 0,
    });

    let case_studies_content_slider = new Splide(
      ".case_studies_content_slider",
      {
        type: "slide",
        pagination: false,
        arrows: false,
        drag: true,
        speed: 1200,
      }
    );

    // Sync sliders
    case_studies_image_slider.sync(case_studies_content_slider);
    const testimonial_nextBtn = document.querySelector(
      ".case_studies_splide_arrows .splide__arrow--next"
    );
    const testimonial_prevBtn = document.querySelector(
      ".case_studies_splide_arrows .splide__arrow--prev"
    );
    function updateButtons() {
      const index = case_studies_content_slider.index;
      const lastIndex = case_studies_content_slider.length - 1;

      testimonial_prevBtn.disabled = index === 0;
      testimonial_nextBtn.disabled = index === lastIndex;
    }

    case_studies_image_slider.mount();
    case_studies_content_slider.mount();

    document
      .querySelector(".case_studies_splide_arrows .splide__arrow--prev")
      .addEventListener("click", () => {
        case_studies_content_slider.go("<");
      });
    document
      .querySelector(".case_studies_splide_arrows .splide__arrow--next")
      .addEventListener("click", () => {
        case_studies_content_slider.go(">");
      });
  }

  function updateCaseStudiesSlideImageWidth() {
    const reference = document.querySelector(".case_studies_slider_right_col");
    const reference_2 = document.querySelector(
      ".case_studies_image_slider_holder"
    );
    const target = document.querySelector(".case_studies_image_slider_inr");

    if (reference && target) {
      const refWidth = reference.getBoundingClientRect().left;
      const refWidthhalf = reference?.offsetWidth / 2;
      console.log(reference.getBoundingClientRect(), reference?.offsetWidt);
      console.log({ refWidth, refWidthhalf });
      // Set left gap as half of reference's width
      let finalWidth;
      if (wdWidth > 768) {
        finalWidth = refWidth + refWidthhalf;
      } else {
        finalWidth = refWidth + reference?.offsetWidth;
      }
      // Apply new position to target element
      target.style.width = `${finalWidth}px`;

      reference_2.style.height = `${target.offsetHeight}px`;
    }
  }

  updateCaseStudiesSlideImageWidth();

  window.addEventListener("resize", function () {
    updateCaseStudiesSlideImageWidth();
  });

  // ========================= ////// end exponence page Js \\\\\\\\ =====================
  ////////////////////////////////////////////////////////////////////////////

  // ========================= ////// start platform page Js \\\\\\\\ =====================

  function plfAidoImageWidthHeight() {
    const reference = document.querySelector(".aido_right_heading_dsc_content");
    const target = document.querySelector(".aido_image_holder");
    const target_2 = document.querySelector(".aido_image_wrap");

    if (reference && target) {
      const refWidth = reference.getBoundingClientRect().left;

      let finalWidth;
      if (wdWidth > 991) {
        finalWidth = refWidth;
      } else {
        finalWidth = refWidth + reference?.offsetWidth;
      }
      target.style.width = `${finalWidth}px`;
      target_2.style.height = `${target.offsetHeight}px`;
    }
  }

  // Initial execution
  plfAidoImageWidthHeight();
  // Observe changes to the layout
  const aido_referenceElement = document.querySelector(
    ".aido_right_heading_dsc_content"
  );
  const aido_targetElement = document.querySelector(".aido_image_holder");

  if (aido_referenceElement && aido_targetElement) {
    const resizeObserver = new ResizeObserver(() => {
      plfAidoImageWidthHeight();
    });

    // Observe both reference and target
    resizeObserver.observe(aido_referenceElement);
    resizeObserver.observe(aido_targetElement);
  }

  //  if (document.querySelector(".plf_apl_sec")) {
  //     let indt_apl_thumb_container = document.querySelector(
  //       ".iplf_apl_thumb_slider"
  //     );
  //     let plf_apl_thumb_slide_items = document.querySelectorAll(
  //       ".plf_apl_thumb_slider .splide__slide"
  //     ).length;
  //     // let indt_apl_thumb_totalWidth = Array.from(
  //     //   indt_apl_thumb_slide_items
  //     // ).reduce((acc, slide) => acc + (slide.offsetWidth + 26), 0);
  //     // let indt_apl_thumb_containerWidth = indt_apl_thumb_container.offsetWidth;
  //     // Thumb slider
  //     let plf_apl_thumb_slider = new Splide(".plf_apl_thumb_slider", {
  //       gap: 0,
  //       perPage: 1.6,
  //       rewind: true,
  //       pagination: false,
  //       isNavigation: true,
  //       arrows: false,
  //       drag: false,
  //       speed: 1500,
  //       mediaQuery: "min",
  //       breakpoints: {
  //         360: {
  //           perPage: 2,
  //           drag: false,
  //         },
  //         768: {
  //           perPage: 3,
  //           drag: plf_apl_thumb_slide_items > 3 ? true : false,
  //         },

  //       },
  //     }).mount();

  //     // Main slider
  //     let plf_apl_main_slider = new Splide(".plf_apl_main_slider", {
  //       type: "fade",
  //       //height: 300,
  //       gap: "30px",
  //       rewind: true,
  //       pagination: false,
  //       arrows: false,
  //       drag: true,
  //       autoplay: true,
  //       interval: 6000,
  //       pauseOnHover: false,
  //       pauseOnFocus: false,
  //       speed: 1500,
  //     });

  //     // Underline animation logic
  //     function animateUnderline(index) {
  //       document
  //         .querySelectorAll(".plf_apl_thumb_slider .underline")
  //         .forEach((el, i) => {
  //           el.style.transition = "none";
  //           el.style.transform = "scaleX(0)";
  //           if (i === index) {
  //             setTimeout(() => {
  //               el.style.transition = "transform 6s linear";
  //               el.style.transform = "scaleX(1)";
  //             }, 10);
  //           }
  //         });
  //     }

  //     // Animate underline on mount and on move
  //     plf_apl_main_slider.on("mounted move", function (newIndex) {
  //       animateUnderline(plf_apl_main_slider.index);
  //       setTimeout(function () {
  //         ScrollTrigger.refresh();
  //       }, 500);
  //     });

  //     // Sync sliders
  //     plf_apl_main_slider.sync(plf_apl_thumb_slider).mount();

  //     // Initial animation
  //     animateUnderline(0);
  //   }

  if (document.querySelector(".plf_apl_sec")) {
    let plf_apl_thumb_slide_items = document.querySelectorAll(
      ".plf_apl_thumb_slider .splide__slide"
    ).length;

    // Step 1: Mount sliders immediately
    const plf_apl_thumb_slider = new Splide(".plf_apl_thumb_slider", {
      gap: 0,
      perPage: 1.6,
      rewind: true,
      pagination: false,
      isNavigation: true,
      arrows: false,
      drag: false,
      speed: 1500,
      mediaQuery: "min",
      breakpoints: {
        360: {
          perPage: 2,
          drag: false,
        },
        768: {
          perPage: 3,
          drag: plf_apl_thumb_slide_items > 3 ? true : false,
        },
      },
    }).mount();

    const plf_apl_main_slider = new Splide(".plf_apl_main_slider", {
      type: "fade",
      gap: "30px",
      rewind: true,
      pagination: false,
      arrows: false,
      drag: true,
      autoplay: true, // we'll pause immediately
      interval: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1500,
    });

    plf_apl_main_slider.sync(plf_apl_thumb_slider).mount();

    // Step 2: Pause autoplay + clean early state
    plf_apl_main_slider.Components.Autoplay.pause();

    requestAnimationFrame(() => {
      document
        .querySelectorAll(
          ".plf_apl_main_slider .splide__slide, .plf_apl_thumb_slider .splide__slide"
        )
        .forEach((el) => {
          el.classList.remove("is-active", "is-visible");
        });
    });

    // Step 3: Underline + Video on move
    let sliderActivated = false;

    function animateUnderline(index) {
      document
        .querySelectorAll(".plf_apl_thumb_slider .underline")
        .forEach((el, i) => {
          el.style.transition = "none";
          el.style.transform = "scaleX(0)";
          if (i === index) {
            setTimeout(() => {
              el.style.transition = "transform 6s linear";
              el.style.transform = "scaleX(1)";
            }, 10);
          }
        });
    }

    function playActiveSlideVideo(index) {
      const allVideos = document.querySelectorAll(".plf_apl_main_slider video");
      allVideos.forEach((video) => {
        video.pause();
        video.currentTime = 0; // optional
      });

      const activeSlide = plf_apl_main_slider.Components.Slides.getAt(index);
      if (activeSlide) {
        const video = activeSlide.slide.querySelector("video");
        if (video) {
          video.play().catch((err) => {
            console.warn("Autoplay failed:", err);
          });
        }
      }
    }

    plf_apl_main_slider.on("move", () => {
      if (sliderActivated) {
        animateUnderline(plf_apl_main_slider.index);
        playActiveSlideVideo(plf_apl_main_slider.index);
      }

      // Refresh GSAP ScrollTrigger (optional)
      setTimeout(() => ScrollTrigger?.refresh?.(), 500);
    });

    // Step 4: Trigger autoplay + classes when section in view
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !sliderActivated) {
            sliderActivated = true;

            // Manually apply active/visible classes
            const mainSlides = plf_apl_main_slider.Components.Slides.get();
            const thumbSlides = plf_apl_thumb_slider.Components.Slides.get();

            if (mainSlides.length > 0) {
              mainSlides[plf_apl_main_slider.index].slide.classList.add(
                "is-active",
                "is-visible"
              );
            }

            if (thumbSlides.length > 0) {
              thumbSlides[plf_apl_main_slider.index].slide.classList.add(
                "is-active",
                "is-visible"
              );
            }

            // Start autoplay + underline + video
            plf_apl_main_slider.Components.Autoplay.play();
            animateUnderline(plf_apl_main_slider.index);
            playActiveSlideVideo(plf_apl_main_slider.index);

            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(document.querySelector(".plf_apl_sec"));
  }

  // ========================= ////// end platform page Js \\\\\\\\ =====================

  ////////////////////////////////////////////////////////////////////////////

  // ========================= ////// start roles-page Js \\\\\\\\ =====================

  if (document.querySelector(".dif_cards_slider")) {
    const totalSlides = document.querySelectorAll(
      ".dif_cards_slider .splide__slide"
    );
    const track = document.querySelector(".dif_cards_slider .splide__track");

    let dif_cards_slider = new Splide(".dif_cards_slider", {
      autoWidth: false,
      gap: 16,
      rewind: false,
      pagination: false,
      arrows: false,
      drag: false,
      speed: 800,
      mediaQuery: "min",
      padding: { left: 0, right: 20 },
      breakpoints: {
        0: { fixedWidth: 300 },
        576: { fixedWidth: 380 },
        768: {
          fixedWidth: 400,
          padding: { left: 15, right: 20 },
        },
        1200: {
          gap: 26,
          fixedWidth: 475,
        },
      },
    });

    dif_cards_slider.on("mounted", () => {
      function calculateTrackWidth(slides) {
        return Array.from(slides).reduce(function (acc, slide) {
          return acc + slide.clientWidth;
        }, 0);
      }
      // Usage
      const track2 = calculateTrackWidth(totalSlides);

      const isOverflowing = track2 > track.clientWidth;
      if (isOverflowing) {
        dif_cards_slider.options = { ...dif_cards_slider.options, drag: true };
      }
    });
    dif_cards_slider.mount();
    window.addEventListener("resize", () => {
      function calculateTrackWidth(slides) {
        return Array.from(slides).reduce(function (acc, slide) {
          return acc + slide.clientWidth;
        }, 0);
      }

      // Usage
      const track2 = calculateTrackWidth(totalSlides);

      const isOverflowing = track2 > track.clientWidth;
      dif_cards_slider.options = {
        ...dif_cards_slider.options,
        drag: isOverflowing,
      };
    });
  }
  if (document.querySelectorAll(".dif_card_normal .dif_cards_item").length) {
    function syncItemHeights() {
      const leftItems = document.querySelectorAll(
        ".dif_card_normal .dif_cards_item "
      );
      const rightItems = document.querySelectorAll(
        ".dif_card_white .dif_cards_item "
      );

      const totalItems = Math.min(leftItems.length, rightItems.length);

      for (let i = 0; i < totalItems; i++) {
        // Reset any existing height
        leftItems[i].style.height = "auto";
        rightItems[i].style.height = "auto";

        const leftHeight = leftItems[i].offsetHeight;
        const rightHeight = rightItems[i].offsetHeight;

        const maxHeight = Math.max(leftHeight, rightHeight);

        leftItems[i].style.height = `${maxHeight}px`;
        rightItems[i].style.height = `${maxHeight}px`;
      }
    }

    // Run on load and on resize
    window.addEventListener("load", syncItemHeights);
    window.addEventListener("resize", () => {
      // Debounce for performance
      clearTimeout(window.__syncHeightTimeout);
      window.__syncHeightTimeout = setTimeout(syncItemHeights, 100);
    });
  }

  // ========================= ////// end roles-page Js \\\\\\\\ =====================
  ////////////////////////////////////////////////////////////////////////////

  // // ========================= ////// start process-optimizer page po-page Js \\\\\\\\ =====================

  // -----  po_solutions_sec -------

  function po_solutionsVideoWidthHeight() {
    const reference = document.querySelector(
      ".po_solutions_right_heading_dsc_content"
    );
    const target = document.querySelector(".po_solutions_video_holder");
    const target_2 = document.querySelector(".po_solutions_video_wrap");

    if (reference && target) {
      const refWidth = reference.getBoundingClientRect().left;

      let finalWidth;
      if (wdWidth > 991) {
        finalWidth = refWidth;
      } else {
        finalWidth = refWidth + reference?.offsetWidth;
      }
      target.style.width = `${finalWidth}px`;
      target_2.style.height = `${target.offsetHeight}px`;
    }
  }

  // Initial execution
  po_solutionsVideoWidthHeight();
  // Observe changes to the layout
  const po_solutions_referenceElement = document.querySelector(
    ".po_solutions_right_heading_dsc_content"
  );
  const po_solutions_targetElement = document.querySelector(
    ".po_solutions_video_holder"
  );

  if (po_solutions_referenceElement && po_solutions_targetElement) {
    const resizeObserver = new ResizeObserver(() => {
      po_solutionsVideoWidthHeight();
    });

    // Observe both reference and target
    resizeObserver.observe(po_solutions_referenceElement);
    resizeObserver.observe(po_solutions_targetElement);
  }

  if (document.querySelectorAll(".po_solutions_video_holder").length) {
    document
      .querySelectorAll(".po_solutions_video_holder")
      .forEach((wrapper) => {
        const button = wrapper.querySelector(".video-play-button");
        const thumbnail = wrapper.querySelector(".video-thumbnail");
        const video_wrapper = wrapper.querySelector(".ratio");

        button.addEventListener("click", () => {
          const type = wrapper.dataset.videoType;
          const src = wrapper.dataset.videoSrc;

          // Fade out thumbnail and button
          thumbnail.classList.add("fade-out");
          button.classList.add("fade-out");

          // Wait for fade-out to finish
          setTimeout(() => {
            let videoEl;

            if (type === "youtube") {
              videoEl = document.createElement("iframe");
              videoEl.src = `${src}?autoplay=1`;
              videoEl.width = "100%";
              videoEl.height = "360";
              videoEl.allow = "autoplay; encrypted-media";
              videoEl.allowFullscreen = true;
              videoEl.frameBorder = "0";
            } else {
              videoEl = document.createElement("video");
              videoEl.controls = true;
              videoEl.autoplay = true;
              videoEl.innerHTML = `<source src="${src}" type="video/mp4">Your browser does not support HTML5 video.`;
            }

            videoEl.classList.add("video-element");
            video_wrapper.innerHTML = ""; // clear old content
            video_wrapper.appendChild(videoEl);

            // Force reflow then add visible class to trigger fade-in
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                videoEl.classList.add("visible");
              });
            });
          }, 400); // match fade-out duration
        });
      });
  }

  // ------- start po_cpb_video_slider ---------------

  if (document.querySelector(".po_cpb_video_thumb_slider")) {
    let po_cpb_video_thumb_totalSlides = document.querySelectorAll(
      ".po_cpb_video_thumb_slider .splide__slide"
    ).length;
    let po_cpb_video_thumb_slider = new Splide(".po_cpb_video_thumb_slider", {
      type: "slide",
      pagination: false,
      arrows: po_cpb_video_thumb_totalSlides > 1 ? true : false,
      drag: po_cpb_video_thumb_totalSlides > 1 ? true : false,
      speed: 800,
      perPage: 1.2,
      perMove: 1,
      focus: 0,
      trimSpace: false,
      gap: 10,
      isNavigation: true,
      classes: {
        arrows:
          "splide__arrows comn_boxstyle_splide__arrows ms-auto ms-lg-0 me-auto mt_40",
      },
      mediaQuery: "min",
      breakpoints: {
        480: {
          arrows: po_cpb_video_thumb_totalSlides > 2 ? true : false,
          drag: po_cpb_video_thumb_totalSlides > 2 ? true : false,
          perPage: 2.19,
        },
        992: {
          perPage: 1.2,
          arrows: po_cpb_video_thumb_totalSlides > 1 ? true : false,
          drag: po_cpb_video_thumb_totalSlides > 1 ? true : false,
        },
        1200: {
          perPage: 2.2,
        },
        1800: {
          perPage: 2.5,
          arrows: po_cpb_video_thumb_totalSlides > 3 ? true : false,
          drag: po_cpb_video_thumb_totalSlides > 3 ? true : false,
        },
      },
    });

    let po_cpb_video_slider = new Splide(".po_cpb_video_slider", {
      type: "slide",
      pagination: false,
      arrows: false,
      drag: true,
      speed: 800,
      gap: 0,
    });

    // Sync sliders
    po_cpb_video_thumb_slider.sync(po_cpb_video_slider);

    po_cpb_video_slider.mount();
    po_cpb_video_thumb_slider.mount();
  }

  // ------- start video-slider ---------------

  if (document.querySelector(".po_cta_gradient_overlay")) {
    function po_page_gradientShiftSmooth() {
      const element = document.querySelector(".po_cta_gradient_overlay");
      const base = 34; // midpoint of the gradient stop range
      const range = 30; // how much it swings on each side (e.g., ±5%)
      const speed = 0.002; // lower = slower

      function animateGradient(timestamp) {
        const stop = base + range * Math.sin(timestamp * speed);
        element.style.background = `linear-gradient(-90deg, rgba(0, 0, 0, 0.6) ${stop}%, rgba(241, 90, 41, 0.6) 100%)`;
        requestAnimationFrame(animateGradient);
      }
      requestAnimationFrame(animateGradient);
    }
    po_page_gradientShiftSmooth();
  }

  // ========================= ////// end po-page Js \\\\\\\\ =====================

  ////////////////////////////////////////////////////////////////////////////
  // ========================= ////// start about-page Js \\\\\\\\ =====================

  if (document.querySelector(".certificates_slider")) {
    let certificates_slider_totalSlides = document.querySelectorAll(
      ".certificates_slider .splide__slide"
    ).length;
    let certificates_slider = new Splide(".certificates_slider", {
      type: "slide",
      pagination: true,
      arrows: false,
      drag: certificates_slider_totalSlides > 1 ? true : false,
      speed: 800,
      //perPage: 1.2,
      perMove: 1,
      gap: 20,
      mediaQuery: "min",
      fixedWidth: 300,
      breakpoints: {
        576: {
          pagination: certificates_slider_totalSlides > 1 ? true : false,
          drag: certificates_slider_totalSlides > 1 ? true : false,
          //perPage: 1.5,
          fixedWidth: 420,
        },
        768: {
          gap: 20,
          fixedWidth: 380,
          pagination: certificates_slider_totalSlides > 1 ? true : false,
          drag: certificates_slider_totalSlides > 1 ? true : false,
          padding: { left: "30px", right: "30px" },
        },
        992: {
          gap: 30,
          fixedWidth: 610,
        },
        1200: {
          gap: 30,
          fixedWidth: 759,
          padding: { left: "34px", right: "30px" },
        },
        1800: {
          fixedWidth: 859,
          pagination: certificates_slider_totalSlides > 1 ? true : false,
          drag: certificates_slider_totalSlides > 1 ? true : false,
        },
      },
    });

    certificates_slider.on("pagination:mounted", function (data) {
      // Append pagination list to custom container
      const externalPagination = document.getElementById(
        "certificates_pagination"
      );
      externalPagination.innerHTML = "";
      externalPagination.appendChild(data.list);
    });

    certificates_slider.mount();
  }

  if (document.querySelectorAll(".teams_slider").length > 0) {
    document.querySelectorAll(".teams_slider").forEach(function (sliderEl) {
      let teams_slider_totalSlides =
        sliderEl.querySelectorAll(".splide__slide").length;
      let teams_slider = new Splide(sliderEl, {
        type: "slide",
        pagination: false,
        arrows: false,
        drag: teams_slider_totalSlides > 1 ? true : false,
        speed: 800,
        //perPage: 1.2,
        perMove: 1,
        gap: 20,
        mediaQuery: "min",
        fixedWidth: 178,
        breakpoints: {
          0: {
            drag: teams_slider_totalSlides > 1 ? true : false,
            //perPage: 1.5,
            fixedWidth: 150,
          },
          768: {
            fixedWidth: 178,
            drag: teams_slider_totalSlides > 3 ? true : false,
          },
          992: {
            fixedWidth: 150,
            drag: teams_slider_totalSlides > 4 ? true : false,
          },
          1200: {
            //perPage: 5,
            fixedWidth: 178,
            drag: teams_slider_totalSlides > 5 ? true : false,
          },
          1800: {
            //perPage: 5,
            fixedWidth: 230,
            drag: teams_slider_totalSlides > 5 ? true : false,
          },
        },
      });

      teams_slider.mount();
    });
  }

  if (document.querySelector(".about_people_slider")) {
    const totalSlides = document.querySelectorAll(
      ".about_people_slider .splide__slide"
    ).length;

    let about_people_slider = new Splide(".about_people_slider", {
      autoWidth: true,
      gap: 15,
      rewind: true,
      //autoplay: true,
      pagination: false,
      //interval: 3000,
      type: "loop",
      autoScroll: {
        speed: 1,
      },
      //clones: 50,
      //focus: "center",
      arrows: false,
      drag: true,
      speed: 4000,
      mediaQuery: "min",
      breakpoints: {
        0: {},
        768: { gap: 20 },
        992: {},
        1200: {
          gap: 30,
        },
        1400: {},
        1800: {},
      },
    });

    about_people_slider.mount(window.splide.ExtensionsAutoScroll);
  }

  if (document.querySelector(".scroll_to_sec_list ul")) {
    let scrolltoseclists = document.querySelectorAll(".scroll_to_sec_list ul");
    console.log(scrolltoseclists.offsetWidth);
    scrolltoseclists.forEach(function (scrolltoseclist) {
      if (
        scrolltoseclist &&
        scrolltoseclist.offsetWidth > 0 &&
        scrolltoseclist.offsetHeight > 0
      ) {
        const scrolltoseclist_navLinks =
          scrolltoseclist.querySelectorAll("li a");

        console.log(scrolltoseclist_navLinks);

        // Add click event listener for each navigation link
        scrolltoseclist_navLinks.forEach((link, i) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            const scrolltoseclist_targetId =
              this.getAttribute("href").substring(1);
            const scrolltoseclist_targetHeading = document.getElementById(
              scrolltoseclist_targetId
            );

            // Scroll window so heading is at the top with some offset (e.g., 70px)
            const y =
              scrolltoseclist_targetHeading.getBoundingClientRect().top +
              window.pageYOffset -
              70;

            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          });
        });

        // Add scroll event listener to highlight active section based on scroll position
        window.addEventListener("scroll", () => {
          let scrolltoseclist_closestIndex = 0;
          let scrolltoseclist_minDistance = Infinity;

          scrolltoseclist_navLinks.forEach((link, i) => {
            const scrolltoseclist_targetId = link
              .getAttribute("href")
              .substring(1);
            const scrolltoseclist_targetHeading = document.getElementById(
              scrolltoseclist_targetId
            );

            // Get the heading’s position relative to the viewport
            const scrolltoseclist_rect =
              scrolltoseclist_targetHeading.getBoundingClientRect();
            const scrolltoseclist_distance = Math.abs(
              scrolltoseclist_rect.top - 70
            ); // 70px offset to account for fixed header or padding

            if (scrolltoseclist_distance < scrolltoseclist_minDistance) {
              scrolltoseclist_minDistance = scrolltoseclist_distance;
              scrolltoseclist_closestIndex = i;
            }
          });

          // Remove active class from all links and add it to the closest section link
          scrolltoseclist_navLinks.forEach((l) => l.classList.remove("active"));
          if (scrolltoseclist_navLinks[scrolltoseclist_closestIndex]) {
            scrolltoseclist_navLinks[
              scrolltoseclist_closestIndex
            ].classList.add("active");
          }
        });
      }
    });
  }

  // if (document.querySelector(".about_adv_sec")) {
  //   const tabButtons = document.querySelectorAll(".tab-btn");
  //   const tabContents = document.querySelectorAll(".tab-content");
  //   const mainCard = document.querySelector(".main-card");
  //   let hoverTimeout;

  //   const tabBackgrounds = {
  //     trust: "url('../images/about/about_adv_bg_img1.jpg')",
  //     industry: "url('../images/about/our_story_block_img.jpg')",
  //     scale: "url('images/scale-bg.jpg')",
  //     innovation: "url('images/innovation-bg.jpg')",
  //   };

  //   tabButtons.forEach((button) => {
  //     button.addEventListener("mouseenter", function () {
  //       const targetTab = this.getAttribute("data-tab");

  //       clearTimeout(hoverTimeout);
  //       hoverTimeout = setTimeout(() => {
  //         tabButtons.forEach((btn) => btn.classList.remove("active"));
  //         tabContents.forEach((content) => {
  //           content.classList.remove("fade-in");
  //           content.style.display = "none";
  //         });

  //         this.classList.add("active");

  //         const targetContent = document.getElementById(`${targetTab}-content`);
  //         targetContent.style.display = "block";
  //         void targetContent.offsetWidth;
  //         targetContent.classList.add("fade-in");

  //         // Change background image with crossfade
  //         mainCard.style.setProperty("--bg-image", tabBackgrounds[targetTab]);
  //         mainCard.setAttribute("data-active-tab", targetTab);
  //       }, 100);
  //     });
  //   });

  // }

  if (document.querySelector(".about_adv_sec")) {
    const tabButtons = document.querySelectorAll(".about_adv_card .tab-btn");
    const tabContents = document.querySelectorAll(
      ".about_adv_card .tab-content"
    );
    const aboutadvbgimgholder = document.querySelector(
      ".about_adv_bg_img_holder"
    );
    let hoverTimeout;

    const tabBackgrounds = {
      trust: "url('../images/about/adv/about_adv_img_1.jpg')",
      industry: "url('../images/about/adv/about_adv_img_2.jpg')",
      scale: "url('../images/about/adv/about_adv_img_3.jpg')",
      innovation: "url('../images/about/adv/about_adv_img_4.jpg')",
    };

    function isMobile() {
      return window.innerWidth < 768;
    }

    function isHoverSupported() {
      console.log("hhh");
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }

    function deactivateAll() {
      tabButtons.forEach((btn) =>
        btn.classList.remove("active", "accordion-open")
      );
      tabContents.forEach((content) => {
        content.classList.remove("fade-in");
        content.style.display = "none";
      });
    }

    tabButtons.forEach((button) => {
      const targetTab = button.getAttribute("data-tab");
      const targetContent = document.getElementById(`${targetTab}-content`);

      if (!isMobile() && isHoverSupported()) {
        // Desktop: Hover Tabs
        button.addEventListener("mouseenter", function () {
          clearTimeout(hoverTimeout);
          hoverTimeout = setTimeout(() => {
            deactivateAll();
            this.classList.add("active");
            targetContent.style.display = "block";
            void targetContent.offsetWidth;
            targetContent.classList.add("fade-in");

            aboutadvbgimgholder.style.setProperty(
              "--bg-image",
              tabBackgrounds[targetTab] || "none"
            );
            aboutadvbgimgholder.setAttribute("data-active-tab", targetTab);
          }, 100);
        });
      }

      // Mobile: Accordion Click
      button.addEventListener("click", function () {
        if (!isMobile()) return;

        const isOpen = this.classList.contains("accordion-open");

        // If the same button is clicked again and already open, do nothing
        if (isOpen) return;

        deactivateAll(); // Only deactivate others if switching tab

        // Now activate this one
        this.classList.add("active", "accordion-open");
        targetContent.style.display = "block";
        void targetContent.offsetWidth;
        targetContent.classList.add("fade-in");

        aboutadvbgimgholder.style.setProperty(
          "--bg-image",
          tabBackgrounds[targetTab] || "none"
        );
        aboutadvbgimgholder.setAttribute("data-active-tab", targetTab);
      });
    });

    // Optional: Re-apply listeners on resize
    window.addEventListener("resize", () => {
      deactivateAll(); // Reset all open states
    });
  }

  // for .comn_flex_card =============
  // const cards = document.querySelectorAll(".comn_flex_card");
  // const expanded = 60;
  // const collapsed = 20;
  // const defaultSize = 33.33;

  // function animateFlexBasis(element, from, to, duration = 300) {
  //   const startTime = performance.now();

  //   function animate(currentTime) {
  //     const elapsed = currentTime - startTime;
  //     const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  //     const progress = easeOut(Math.min(elapsed / duration, 1));
  //     const current = from + (to - from) * progress;

  //     element.style.flexBasis = `${current}%`;

  //     if (progress < 1) {
  //       requestAnimationFrame(animate);
  //     }
  //   }

  //   requestAnimationFrame(animate);
  // }

  // cards.forEach((card) => {
  //   card.addEventListener("mouseenter", () => {
  //     cards.forEach((c) => {
  //       const isActive = c === card;
  //       const from = parseFloat(c.style.flexBasis) || defaultSize;
  //       const to = isActive ? expanded : collapsed;
  //       animateFlexBasis(c, from, to);
  //     });
  //   });

  //   card.addEventListener("mouseleave", () => {
  //     cards.forEach((c) => {
  //       const from = parseFloat(c.style.flexBasis) || defaultSize;
  //       animateFlexBasis(c, from, defaultSize);
  //     });
  //   });
  // });

  // ========================= ////// end about-page Js \\\\\\\\ =====================
  ////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////
  // ========================= ////// start career-list-page Js \\\\\\\\ =====================

  function ctes_imageWidthHeight() {
    const reference = document.querySelector(
      ".career_testimonial_slider_holder"
    );
    const target = document.querySelector(
      ".career_testimonial_image_slider_holder"
    );
    //const target_2 = document.querySelector(".aido_image_wrap");

    if (reference && target) {
      const refWidth = reference.getBoundingClientRect().left;

      let finalWidth;
      if (wdWidth > 991) {
        finalWidth = refWidth;
      } else {
        return;
        //finalWidth = refWidth + reference?.offsetWidth;
      }
      target.style.width = `${finalWidth}px`;
      //target_2.style.height = `${target.offsetHeight}px`;
    }
  }

  // Initial execution
  ctes_imageWidthHeight();
  // Observe changes to the layout
  const ctes_referenceElement = document.querySelector(
    ".career_testimonial_slider_holder"
  );
  const ctes_targetElement = document.querySelector(
    ".career_testimonial_image_slider_holder"
  );

  if (ctes_referenceElement && ctes_targetElement) {
    const resizeObserver = new ResizeObserver(() => {
      ctes_imageWidthHeight();
    });

    // Observe both reference and target
    resizeObserver.observe(ctes_referenceElement);
    resizeObserver.observe(ctes_targetElement);
  }

  // ========================= ////// end career-list-page Js \\\\\\\\ =====================
  ////////////////////////////////////////////////////////////////////////////

  let vlogoSlider;
  let vlogoSlider_elms = document.querySelectorAll(".v_logo_slider");

  // const vlogoSlider_list = document.querySelector(
  //   ".bottom_to_top .splide__list"
  // );
  // vlogoSlider_list.innerHTML = Array.from(vlogoSlider_list.children)
  //   .reverse()
  //   .map((child) => child.outerHTML)
  //   .join("");

  if (vlogoSlider_elms) {
    for (var i = 0; i < vlogoSlider_elms.length; i++) {
      let directionString = 1;

      if (document.querySelectorAll(".bottom_to_top").length > 0) {
        directionString = vlogoSlider_elms[i].classList.contains(
          "bottom_to_top"
        )
          ? -0.6
          : 0.6;
      }

      vlogoSlider = new Splide(vlogoSlider_elms[i], {
        //autoWidth: true,
        perPage: 3,
        perMove: 2,
        gap: "10px",
        mediaQuery: "min",
        speed: 2400,
        arrows: false,
        pagination: false,
        drag: true,
        direction: "ttb",
        // heightRatio: 1,
        height: 250,
        type: "loop",
        clones: 50,
        autoScroll: {
          speed: directionString,
          pauseOnHover: false,
        },
        breakpoints: {
          380: {
             height: 350,
          },
          576: {
            gap: "30px",
          },
          768: {
            gap: "40px",
             height: 550,
          },
          1200: {
            gap: "47px",
          },
        },
      });

      vlogoSlider.mount(window.splide.ExtensionsAutoScroll);
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  // ========================= ////// start casestudy-list-page Js \\\\\\\\ =====================

  if (document.querySelector(".fss_slider")) {
    let fss_totalSlides = document.querySelectorAll(
      ".fss_slider .splide__slide"
    ).length;
    let fss_slider = new Splide(".fss_slider", {
      type: "slide",
      pagination: fss_totalSlides > 1 ? true : false,
      arrows: false,
      drag: fss_totalSlides > 1 ? true : false,
      speed: 1200,
      autoplay: true,
      interval: 4000,
      rewind:true,
      gap: 0,
      mediaQuery: "min",
    });

    fss_slider.on("pagination:mounted", function (data) {
      // Append pagination list to custom container
      const externalPagination = document.getElementById("fss_pagination");
      externalPagination.innerHTML = "";
      externalPagination.appendChild(data.list);
    });

    fss_slider.mount();
  }

  // ========================= ////// end casestudy-list-page Js \\\\\\\\ =====================


    const megaMenuItems = document.querySelectorAll("li.mega-menu-item");
  if (megaMenuItems.length > 0) {
    megaMenuItems.forEach((menuItem) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.attributeName === "class" &&
            menuItem.classList.contains("mega-toggle-on")
          ) {
            const submenuLists = menuItem.querySelectorAll(
              ".product_sub_menu_col ul"
            );

            submenuLists.forEach((ul) => {
              const listItems = ul.querySelectorAll("li");

              listItems.forEach((li, index) => {
                // Reset previous animation state
                li.style.animation = "none";
                li.style.opacity = "0";
                li.style.transform = "translateY(20px)";

                // Use rAF to batch DOM updates and force reflow
                requestAnimationFrame(() => {
                  li.style.animation = `itemFadeInUp 0.5s ease-out forwards`;
                  li.style.animationDelay = `${0.1 * (index + 1)}s`;
                });
              });
            });
          }
        });
      });

      observer.observe(menuItem, { attributes: true });
    });
  }

  //  gsapCommonAni ============

  function gsapCommonAni() {
    // Set initial state for all anim-item-y elements
    const setAnimItemYInitialState = () => {
      gsap.set(".anim-item-y", { opacity: 0, y: 150 });
    };
    // Animation to run when entering the viewport
    const animateBatch = (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        overwrite: true,
      });
    };

    // Reset batch state when leaving the viewport
    const resetBatchState = (batch) => {
      gsap.set(batch, { opacity: 0, y: 150, overwrite: true });
    };
    // Setup ScrollTrigger to manage animations
    const setupScrollTrigger = () => {
      ScrollTrigger.batch(".anim-item-y", {
        onEnter: animateBatch,
        onEnterBack: animateBatch,
        onLeaveBack: resetBatchState,
        //markers: true,
        //once: true, // Ensures animation happens only once
      });

      // Set up the initial state when ScrollTrigger refreshes
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-y", { opacity: 1, y: 0 })
      );
    };
    // Initialize animations if elements exist
    if (document.querySelectorAll(".anim-item-y").length > 0) {
      setAnimItemYInitialState();
      setupScrollTrigger();
    }

    // --------------  anim-item-clipDown-line --------------------------

    // Set initial state for all anim-item-clipDown elements
    const setAnimItemClipDownLineInitialState = () => {
      gsap.set(".anim-item-clipDown-line", {
        opacity: 1,
        clipPath: "inset(0% 0% 100% 0%)", // Initially hidden (bottom)
      });
    };

    // Animation to run on scroll for each element
    const animateClipDownLineOnScroll = () => {
      // Loop through all elements with the class .anim-item-clipDown-line
      document.querySelectorAll(".anim-item-clipDown-line").forEach((el) => {
        ScrollTrigger.create({
          trigger: el, // Target each element individually
          start: "top bottom", // When the top of the element hits the bottom of the viewport
          end: "bottom 100%", // When the bottom of the element hits the top of the viewport
          scrub: 1, // Makes the animation linked to the scroll position (smooth transition)
          onUpdate: (self) => {
            const progress = self.progress; // Get the progress of the scroll
            const clipValue = Math.max(100 - progress * 100, 0); // Calculate clipPath value based on scroll progress

            // Update the clipPath to create a sliding effect for each element
            gsap.to(el, {
              clipPath: `inset(0% 0% ${clipValue}% 0%)`,
              overwrite: true,
            });
          },
          // markers: true, // Optional: for debugging, you can see the scroll positions
        });
      });
    };

    // Initialize animations if elements exist
    if (document.querySelectorAll(".anim-item-clipDown-line").length > 0) {
      setAnimItemClipDownLineInitialState();
      animateClipDownLineOnScroll();
    }

    // --------------  anim-item-clipDown --------------------------

    // Set initial state for all anim-item-clipDown elements
    const setAnimItemClipDownInitialState = () => {
      gsap.set(".anim-item-clipDown", {
        opacity: 1,
        clipPath: "inset(0% 0% 100% 0%)",
      });
    };

    // Animation to run when entering the viewport
    const animateClipDownBatch = (batch) => {
      gsap.to(batch, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.3,
        stagger: { each: 0.15 },
        overwrite: true,
      });
    };

    // Reset batch state when leaving the viewport
    const resetClipDownBatchState = (batch) => {
      gsap.set(batch, {
        opacity: 1,
        clipPath: "inset(0% 0% 100% 0%)",
        overwrite: true,
      });
    };

    // Setup ScrollTrigger to manage animations
    const setupClipDownScrollTrigger = () => {
      ScrollTrigger.batch(".anim-item-clipDown", {
        start: "top 90%",
        onEnter: animateClipDownBatch,
        onEnterBack: animateClipDownBatch,
        onLeaveBack: resetClipDownBatchState,
        //markers: true,
        //once: true, // Ensures animation happens only once
      });

      // Set up the initial state when ScrollTrigger refreshes
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-clipDown", {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        })
      );
    };

    // Initialize animations if elements exist
    if (document.querySelectorAll(".anim-item-clipDown").length > 0) {
      setAnimItemClipDownInitialState();
      setupClipDownScrollTrigger();
    }

    // ------------- anim-item-blur -----------------

    // Set initial state for all anim-item-blur elements
    const setAnimItemBlurInitialState = () => {
      gsap.set(".anim-item-blur", {
        //opacity: 0,
        y: -10,
        scale: 1.1,
        filter: "blur(5px)",
      });
    };

    // Animation to run when entering the viewport
    const animateBlurBatch = (batch) => {
      gsap.to(batch, {
        //opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: { each: 0.15 },
        ease: "power3.out",
        overwrite: true,
      });
    };

    // Reset batch state when leaving the viewport
    const resetBlurBatchState = (batch) => {
      gsap.set(batch, {
        //opacity: 0,
        y: -10,
        scale: 1.1,
        filter: "blur(5px)",
        overwrite: true,
      });
    };

    // Setup ScrollTrigger to manage animations
    const setupBlurScrollTrigger = () => {
      ScrollTrigger.batch(".anim-item-blur", {
        start: "top 75%",
        onEnter: animateBlurBatch,
        onEnterBack: animateBlurBatch,
        onLeaveBack: resetBlurBatchState,
        //markers: true,
        //once: true, // Uncomment to animate only once
      });

      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-blur", {
          //opacity: 0,
          scale: 1.1,
          y: -10,
          filter: "blur(5px)",
        })
      );
    };

    // Initialize animations if elements exist
    if (document.querySelectorAll(".anim-item-blur").length > 0) {
      setAnimItemBlurInitialState();
      setupBlurScrollTrigger();
    }

    // ----------------    anim-item-clip-right -------------

    // Set initial state for all anim-item-clipRight elements
    const setAnimItemClipRightInitialState = () => {
      gsap.set(".anim-item-clip-right", {
        //opacity: 1,
        clipPath: "inset(0% 100% 0 0)",
      });
    };

    // Animation to run when entering the viewport
    const animateClipRightBatch = (batch) => {
      gsap.to(batch, {
        // opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        stagger: 0.15,
        overwrite: true,
      });
    };

    // Reset batch state when leaving the viewport
    const resetClipRightBatchState = (batch) => {
      gsap.set(batch, {
        //opacity: 0,
        clipPath: "inset(0% 100% 0% 0%)",
        overwrite: true,
      });
    };

    // Setup ScrollTrigger to manage animations for anim-item-clipRight
    const setupClipRightScrollTrigger = () => {
      ScrollTrigger.batch(".anim-item-clip-right", {
        start: "top 85%",
        onEnter: animateClipRightBatch,
        onEnterBack: animateClipRightBatch,
        onLeaveBack: resetClipRightBatchState,
        //markers: true,
        //once: true, // Ensures animation happens only once
      });

      // Set up the initial state when ScrollTrigger refreshes
      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(".anim-item-clip-right", {
          //opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        })
      );
    };

    // Initialize animations if elements exist
    if (document.querySelectorAll(".anim-item-clip-right").length > 0) {
      setAnimItemClipRightInitialState();
      setupClipRightScrollTrigger();
    }

    // Refresh ScrollTrigger on page load to check if any section is in the viewport
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }

  gsapCommonAni();

  // fancybox for banner video

  Fancybox.bind('[data-fancybox="banner_video"]', {
    // Your custom options for a specific gallery
  });

  // WEBKIT MOBILE 100vh ISSUE FIX.
  function webkitFullHeightFix() {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight / 100 + "px");
  }
  webkitFullHeightFix();
  $(window).resize(webkitFullHeightFix);
});
