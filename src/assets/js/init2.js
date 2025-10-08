(function ($) {
  gsap.registerPlugin(ScrollTrigger);
  // start ---- document.ready ----------

  let wdWidth = window.innerWidth;
  let wdHeight = window.innerHeight;
  console.log(wdWidth);
  $(document).ready(function () {
    /* footer */

    $(".footer_nav")
      .find(".headingText")
      .click(function () {
        console.log("tet");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
      });

    // if (document.querySelector(".ilu_step_sec")) {
    //   // Thumb slider
    //   let iluSteps_thumbSlider = new Splide("#steps-thumb-slider", {
    //     // autoWidth: true,
    //     gap: 0,
    //     perPage: 1.25,
    //     rewind: true,
    //     pagination: false,
    //     isNavigation: true,
    //     //focus: "center",
    //     arrows: false,
    //     drag: false,
    //     speed: 1500,
    //     mediaQuery: "min",
    //     breakpoints: {
    //       480: { perPage: 2 },
    //       768: { perPage: 4 },
    //       // 1024: { perPage: 3 },
    //       // 1200: { perPage: 4 },
    //       // 768: { fixedWidth: 200, autoWidth: false },
    //       // 1200: { fixedWidth: 205 },
    //       // 1400: { fixedWidth: 240 },
    //       // 1800: { fixedWidth: 257 },
    //     },
    //   }).mount();

    //   // Main slider
    //   let iluStems_mainSlider = new Splide("#steps-main-slider", {
    //     type: "fade",
    //     //height: 300,
    //     gap: "200px",
    //     rewind: true,
    //     pagination: false,
    //     arrows: false,
    //     //   classes: {
    //     //     arrows: "splide__arrows simple_splide__arrows",
    //     //   },
    //     autoplay: true,
    //     interval: 6000,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     speed: 1500,
    //   });
    //   // Sync sliders
    //   iluStems_mainSlider.sync(iluSteps_thumbSlider).mount();

    //   // Underline animation logic
    //   function animateUnderline(index) {
    //     document
    //       .querySelectorAll(".steps_thumb_slider .underline")
    //       .forEach((el, i) => {
    //         el.style.transition = "none";
    //         el.style.transform = "scaleX(0)";
    //         if (i === index) {
    //           setTimeout(() => {
    //             el.style.transition = "transform 6s linear";
    //             el.style.transform = "scaleX(1)";
    //           }, 10);
    //         }
    //       });
    //   }

    //   iluStems_mainSlider.on("mounted move", function (newIndex) {
    //     animateUnderline(iluStems_mainSlider.index);
    //   });
    //   // Initial animation
    //   animateUnderline(0);

    // }

    if (document.querySelector(".ilu_step_sec")) {
      // Step 1: Mount sliders immediately
      const iluSteps_thumbSlider = new Splide("#steps-thumb-slider", {
        perPage: 1.25,
        rewind: true,
        pagination: false,
        isNavigation: true,
        arrows: false,
        drag: false,
        speed: 1500,
        mediaQuery: "min",
        breakpoints: {
          480: { perPage: 2 },
          768: { perPage: 4 },
        },
      }).mount();

      const iluStems_mainSlider = new Splide("#steps-main-slider", {
        type: "fade",
        gap: "200px",
        rewind: true,
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 10000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
      });

      iluStems_mainSlider.sync(iluSteps_thumbSlider).mount();

      // Step 2: Pause autoplay and strip active/visible classes
      iluStems_mainSlider.Components.Autoplay.pause();

      // Remove classes immediately after mount
      requestAnimationFrame(() => {
        document
          .querySelectorAll(
            "#steps-main-slider .splide__slide, #steps-thumb-slider .splide__slide"
          )
          .forEach((el) => {
            el.classList.remove("is-active", "is-visible");
          });
      });

      // Step 3: Underline animation
      function animateUnderline(index) {
        document
          .querySelectorAll(".steps_thumb_slider .underline")
          .forEach((el, i) => {
            el.style.transition = "none";
            el.style.transform = "scaleX(0)";
            if (i === index) {
              setTimeout(() => {
                el.style.transition = "transform 10s linear";
                el.style.transform = "scaleX(1)";
              }, 10);
            }
          });
      }

      iluStems_mainSlider.on("move", () => {
        const allVideos = document.querySelectorAll("#steps-main-slider video");

        // Pause all videos
        allVideos.forEach((video) => {
          video.pause();
          video.currentTime = 0; // Optional: reset to start
        });

        // Play video in active slide, if any
        const activeSlide = iluStems_mainSlider.Components.Slides.getAt(
          iluStems_mainSlider.index
        );
        if (activeSlide) {
          const video = activeSlide.slide.querySelector("video");
          if (video) {
            video.play().catch((err) => {
              // Handle autoplay policy errors if needed
              console.warn("Autoplay failed:", err);
            });
          }
        }

        // Continue underline animation
        animateUnderline(iluStems_mainSlider.index);
      });

      // Step 4: Start autoplay + apply classes when section in view
      let sliderActivated = false;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !sliderActivated) {
              sliderActivated = true;

              // Force `.is-active` + `.is-visible` again manually
              const mainSlides = iluStems_mainSlider.Components.Slides.get();
              const thumbSlides = iluSteps_thumbSlider.Components.Slides.get();

              if (mainSlides.length > 0) {
                mainSlides[iluStems_mainSlider.index].slide.classList.add(
                  "is-active",
                  "is-visible"
                );
              }

              if (thumbSlides.length > 0) {
                thumbSlides[iluStems_mainSlider.index].slide.classList.add(
                  "is-active",
                  "is-visible"
                );
              }

              // Start autoplay
              iluStems_mainSlider.Components.Autoplay.play();

              // Start underline
              animateUnderline(iluStems_mainSlider.index);

              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.4,
        }
      );

      observer.observe(document.querySelector(".ilu_step_sec"));
    }

    // =========== end roles_slider ===========

    if (document.querySelector(".ilu_case_slider")) {
      console.log("ilu_case_slider");
      let iluCaseSlider = new Splide("#ilu_case_slider", {
        gap: 18,
        // rewind: true,
        // pagination: false,
        // isNavigation: true,
        //focus: "center",
        arrows: true,
        drag: false,
        speed: 1500,
      }).mount();
    }

    let totalIluChooseSlider = document.querySelectorAll(
      "#ilu_choose_slider .splide__slide"
    ).length;
    if (totalIluChooseSlider) {
      let iluChooseSlider = new Splide("#ilu_choose_slider", {
        type: "slide",
        perPage: 1,
        //height: 300,
        gap: "23px",
        rewind: false,
        pagination: false,
        arrows: totalIluChooseSlider > 1 ? true : false,
        drag: totalIluChooseSlider > 1 ? true : false,
        autoplay: false,
        interval: 4000,
        speed: 1500,
        classes: {
          arrows:
            "splide__arrows comn_boxstyle_splide__arrows ms-auto me-auto mt-4",
        },
        mediaQuery: "min",
        breakpoints: {
          576: {
            perPage: 2,
            arrows: totalIluChooseSlider > 2 ? true : false,
            drag: totalIluChooseSlider > 2 ? true : false,
          },
          768: {
            perPage: 1,
            arrows: totalIluChooseSlider > 1 ? true : false,
            drag: totalIluChooseSlider > 1 ? true : false,
          },
          992: {
            perPage: 2,
            arrows: totalIluChooseSlider > 2 ? true : false,
            drag: totalIluChooseSlider > 2 ? true : false,
          },
          1200: {
            perPage: 3,
            arrows: totalIluChooseSlider > 3 ? true : false,
            drag: totalIluChooseSlider > 3 ? true : false,
          },
        },
        //arrows: false,
        // classes: {
        //   arrows: "splide__arrows simple_splide__arrows",
        // },
        // autoplay: true,
        // interval: 6000,
        // pauseOnHover: false,
        // pauseOnFocus: false,
        // speed: 1500,
      }).mount();
    }
    if (document.querySelectorAll("#ilu_capabilite_slider").length) {
      let ilu_Capabilities_slider = new Splide("#ilu_capabilite_slider", {
        type: "slide",
        perPage: 1.1,
        focus: 0,
        trimSpace: false,
        gap: "30px",
        pagination: false,
        padding: { left: 10 },
        mediaQuery: "min",
        breakpoints: {
          768: {
            perPage: 1.2,
            gap: "35px",
            padding: { left: 35 },
          },
          1200: {
            perPage: 1.3,
            gap: "56px",
            padding: { left: 45 },
          },
        },
        rewind: true,
        arrows: false,
        autoplay: true,
        drag: true,
        interval: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
      });
      ilu_Capabilities_slider.mount();
      const capabilities_nextBtn = document.querySelector(
        ".capabilite_splide_arrows .splide__arrow--next"
      );
      const capabilities_prevBtn = document.querySelector(
        ".capabilite_splide_arrows .splide__arrow--prev"
      );
      if (capabilities_nextBtn && capabilities_prevBtn) {
        capabilities_nextBtn.addEventListener("click", () => {
          ilu_Capabilities_slider.go(">");
        });

        capabilities_prevBtn.addEventListener("click", () => {
          ilu_Capabilities_slider.go("<");
        });
      }
      function capabilities__updateButtons() {
        const index = ilu_Capabilities_slider.index;
        const lastIndex = ilu_Capabilities_slider.length - 1;

        capabilities_prevBtn.disabled = index === 0;
        capabilities_nextBtn.disabled = index === lastIndex;
      }

      // Update slide number on move
      ilu_Capabilities_slider.on("mounted", function () {
        capabilities__updateButtons();
      });

      ilu_Capabilities_slider.on("move", function (newIndex) {
        capabilities__updateButtons();
      });
    }

    function gradientShiftSmoothAnim({
      selector,
      base = -9.42,
      range = 60,
      speed = 0.002,
      angle = 151.13,
      colorStart = "#F15A29",
      colorEnd = "#750F0F",
      stop2 = "41.63%",
    }) {
      const element = document.querySelector(selector);
      if (!element) return;

      function animateGradient(timestamp) {
        const stop = base + range * Math.sin(timestamp * speed);
        element.style.background = `linear-gradient(${angle}deg, ${colorStart} ${stop}%, ${colorEnd} ${stop2})`;
        requestAnimationFrame(animateGradient);
      }

      requestAnimationFrame(animateGradient);
    }

    gradientShiftSmoothAnim({
      selector: ".ilu_feature_sec .shape",
    });
    gradientShiftSmoothAnim({
      selector: ".ilu_cta_sec .shape",
    });
    gradientShiftSmoothAnim({
      selector: ".thankyou__sec .banner__shape__01",
    });
    gradientShiftSmoothAnim({
      selector: ".thankyou__sec .banner__shape__02",
      angle: 245,
    });

    // background: linear-gradient(151.13deg, #F15A29 -9.42%, #750F0F 41.63%);
    /*========= mega menu =============*/
    if(document.querySelector(".mega__solution__list__slider")){
      
    const iluSteps_thumbSlider = new Splide(".mega__solution__list__slider", {
          perPage: 1.25,
          gap: 24,
          rewind: true,
          pagination: false,
          arrows: false,
          drag: false,
          speed: 1500,
          mediaQuery: "min",
          breakpoints: {
            992: { perPage: 2 },
            1200: { perPage: 3 },
          },
        }).mount();
      }
    /*================ video page ================*/
    if (document.querySelector("#video__slider")) {
      const splide = new Splide("#video__slider", {
        type: "loop",
        //perPage: 1.54,
        gap: 0,
        clones: 20,
        // autoplay: true,
        // interval: 5000,
        fixedWidth: "60%",
        pauseOnHover: false,
        pauseOnFocus: false,
        focus: "center",
        trimSpace: false,
        rewind: true,
        pagination: false,
        arrows: true,
        drag: false,
        speed: 1400,
        mediaQuery: "max",
        breakpoints: {
          767: {
            //perPage: 1.16,
            fixedWidth: "80%",
            //gap: 8,
          },
          1199: {
            //perPage: 1.2,
            fixedWidth: "68%",
          },
        },
        classes: {
          arrows:
            "splide__arrows comn_boxstyle_splide__arrows splide__arrows__video ms-auto me-auto mt-4",
        },
      }).mount();
    }
    if (document.querySelectorAll('[data-fancybox="videos"]').length > 0) {
      Fancybox.bind('[data-fancybox="videos"]', {
        Youtube: {
          autoplay: true,
          controls: 1,
        },
        caption: function (fancybox, carousel, slide) {
          console.log("test", slide.$trigger?.dataset);
          return (
            `<h3>${slide.$trigger?.dataset.fancyboxTitle || ""}</h3>` +
            `<p>${slide.$trigger?.dataset.fancyboxDescription || ""}</p>`
          );
        },
        Toolbar: {
          display: [{ id: "counter", position: "center" }, "close"],
        },
        caption: {
          type: "html",
          place: "bottom", // or "top" if preferred
        },
      });
    }
    /* ============== career page ==============*/
    if (document.querySelectorAll(".user__transform__slider").length > 0) {
      console.log("worl");
      document
        .querySelectorAll(".user__transform__slider")
        .forEach((el, index) => {
          const randomInterval =
            Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
          new Splide(el, {
            type: "fade",
            perPage: 1,
            rewind: true,
            autoplay: true,
            speed: 2000,
            interval: randomInterval,
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            pauseOnFocus: false,
          }).mount();
        });
    }

    // equal height
    function setEqualHeight(container, cusAttr) {
      var maxHeight = 0;
      $(container).find(cusAttr).css("height", "auto");
      $(container)
        .find(cusAttr)
        .each(function () {
          var height = $(this).outerHeight();
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
      $(container)
        .find(cusAttr)
        .css("height", maxHeight + "px");
    }

    function matchHeightInit() {
      if ($(".match__height__sec").length > 0) {
        $(".match__height__sec").each(function () {
          setEqualHeight($(this), "[data-match-height]");
        });
        $(".match__height__sec").each(function () {
          setEqualHeight($(this), "[data-match-height2]");
        });
      }
    }
    matchHeightInit();

    $(window).resize(function () {
      matchHeightInit();
    });
    window.almDone = function () {
      matchHeightInit();
    };
    window.almFiltersChange = function () {
      matchHeightInit();
    };
    window.almPaginationComplete = function (alm) {
      matchHeightInit();
    };
    window.almComplete = function (alm) {
      matchHeightInit();
    };
    window.almChange = function (alm) {
      matchHeightInit();
    };
    function updateTestimonialsSlideImageWidth() {
      const wInnW = window.innerWidth;
      const reference = document.querySelector(".testimonial_right_col");
      const reference_2 = document.querySelector(".testimonial_slider_holder");
      const target = document.querySelector(".testimonial_left_col_inr");
      const testEle = document.querySelector(".testimonial_left_col");

      if (reference && target) {
        const refWidth = reference.getBoundingClientRect().width;
        const refWidthhalf = reference?.offsetWidth;
        console.log(reference_2.getBoundingClientRect());
        console.log({ refWidth, refWidthhalf, wInnW });
        // Set left gap as half of reference's width
        let finalWidth;
        if (wdWidth > 991) {
          finalWidth = wInnW - refWidth;
        }
        // Apply new position to target element
        target.style.width = `${finalWidth}px`;

        testEle.style.height = `${
          reference_2.getBoundingClientRect().bottom
        }px`;
      }
    }
    updateTestimonialsSlideImageWidth();
    window.addEventListener("resize", function () {
      updateTestimonialsSlideImageWidth();
    });
    /*========== casestudy list ==========*/
    /*
  const tl = gsap.timeline({

    scrollTrigger: {
      trigger: ".casestudy__result__sec",
      start: "top top",
      end: "+=100%", // adjust this for scroll length
      scrub: true,   // ← ties animation to scroll
      pin: true,     // ← makes section sticky
      markers: true
    }
  });

  // Animation steps
  tl
  .from(".cost", {
    clipPath: "inset(0% 100% 0 0)",
    duration: 1,
    ease: "power3.out"
  })
  .from(".after", {
    clipPath: "inset(0% 100% 0 0)",
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
  })
   .from(".before", {
    clipPath: "inset(0% 100% 0 0)",
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
  })
    */
    if (document.querySelectorAll(".result__list__item").length > 0) {
      const items = document.querySelectorAll(".result__list__item");

      items.forEach((item, i) => {
        let masterTL = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 98%",
            end: "top 98%",
            // end: () => `+=${items.length * 100}%`,
            scrub: 4,
            duration: 4,
            // pin: true,
            // snap: {
            //   snapTo: 1 / items.length,
            //   duration: 0.5,
            //   ease: "power1.inOut"
            // },
            toggleActions: "play none none none",
            //markers: true,
          },
        });
        const tl = gsap.timeline();

        tl.from(item.querySelector(".cost"), {
          clipPath: "inset(0% 100% 0 0)",
          duration: 4,
          ease: "power3.out",
        })
          .from(
            item.querySelector(".before"),
            {
              clipPath: "inset(0% 100% 0 0)",
              duration: 4,
              ease: "power3.out",
            },
            ">0.1"
          )
          .from(
            item.querySelector(".after"),
            {
              clipPath: "inset(0% 100% 0 0)",
              duration: 4,
              ease: "power3.out",
            },
            ">0.1"
          );

        masterTL.add(tl, i); // add each sub-timeline at step
      });
    }


if(document.querySelectorAll(".btn__file__holder").length > 0){
  const fileHolders = document.querySelectorAll(".btn__file__holder");

  fileHolders.forEach(holder => {
    const fileInput = holder.querySelector('input[type="file"]');
    const fileNameElem = holder.querySelector(".file__name");
    const fileCloseElem = holder.querySelector(".file__close");

    if (fileInput) {
      fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
          fileNameElem.textContent = fileInput.files[0].name;
          holder.classList.add("active");
        } else {
          fileNameElem.textContent = "";
          holder.classList.remove("active");
        }
      });
    }

    if (fileCloseElem) {
      fileCloseElem.addEventListener("click", function () {
        fileInput.value = "";
        fileNameElem.textContent = "";
        holder.classList.remove("active");
      });
    }
  });
}



   /*=========== resource new page ============*/
if (document.querySelector(".resourcelist_all_sec")) {
  const navLinks = document.querySelectorAll('.scroll__nav a[href^="#"]');
  const sections = [];

  // Cache target sections
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) sections.push(section);
  });

  // Smooth scroll on click
  navLinks.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const yOffset = -20;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  // ScrollSpy: Add 'active' class on scroll
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 21; // account for offset
    
    sections.forEach((section, i) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const link = navLinks[i];

      if (scrollPosition >= top && scrollPosition < bottom) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

if(document.querySelectorAll(".sidebar__mobile").length > 0){
  document.querySelectorAll(".sidebar__mobile").forEach(function(sidebar){
    sidebar.querySelector(".btn__sidebar__toggle").addEventListener("click", function(){
      sidebar.classList.toggle("active");
    })
  })
}

    /*============ industry page ================*/

    if (document.querySelector(".industry_application_sec")) {
      let indt_apl_thumb_container = document.querySelector(
        ".indt_apl_thumb_slider"
      );
      let indt_apl_thumb_slide_items = document.querySelectorAll(
        ".indt_apl_thumb_slider .splide__slide"
      ).length;
      // let indt_apl_thumb_totalWidth = Array.from(
      //   indt_apl_thumb_slide_items
      // ).reduce((acc, slide) => acc + (slide.offsetWidth + 26), 0);
      // let indt_apl_thumb_containerWidth = indt_apl_thumb_container.offsetWidth;
      // Thumb slider
      let indt_apl_thumb_slider = new Splide(".indt_apl_thumb_slider", {
        gap: 0,
        perPage: 1.6,
        rewind: true,
        pagination: false,
        isNavigation: true,
        //focus: "center",
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
            perPage: 4,
            drag: indt_apl_thumb_slide_items > 4 ? true : false,
          },
          1200: {
            perPage: 4,
            drag: indt_apl_thumb_slide_items > 4 ? true : false,
          },
          1800: {
            perPage: 4,
            drag: indt_apl_thumb_slide_items > 4 ? true : false,
          },
        },
      }).mount();

      // Main slider
      let indt_apl_main_slider = new Splide(".indt_apl_main_slider", {
        type: "fade",
        //height: 300,
        gap: "30px",
        rewind: true,
        pagination: false,
        arrows: false,
        drag: false,
        //autoplay: true,
        interval: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1500,
      });

      // Underline animation logic
      function animateUnderline(index) {
        document
          .querySelectorAll(".indt_apl_thumb_slider .underline")
          .forEach((el, i) => {
            el.style.transition = "none";
            el.style.transform = "scaleX(0)";
            if (i === index) {
              setTimeout(() => {
                el.style.transition = "transform 0.3s linear";
                el.style.transform = "scaleX(1)";
              }, 10);
            }
          });
      }

      function adjustSliderHeight() {
        const activeSlide = document.querySelector(
          ".indt_apl_main_slider > .splide__track > .splide__list > .splide__slide.is-active"
        );

        if (activeSlide) {
          const newHeight = activeSlide.offsetHeight;
          document.querySelector(".indt_apl_main_slider").style.height =
            newHeight + "px";
        }
      }

      // Animate underline on mount and on move
      indt_apl_main_slider.on("mounted move", function (newIndex) {
        animateUnderline(indt_apl_main_slider.index);
        setTimeout(function () {
          adjustSliderHeight();
          ScrollTrigger.refresh();
        }, 500);
      });

      // Sync sliders
      indt_apl_main_slider.sync(indt_apl_thumb_slider).mount();

      // Initial animation
      animateUnderline(0);

      window.addEventListener("resize", adjustSliderHeight);
    }

    if (document.querySelector(".indus__chain_sec")) {
      let chain_nav_totalSlides = document.querySelectorAll(
        "#indus_chain_nav_slider .splide__slide"
      ).length;
      let chain_nav_totalSlides_items = document.querySelectorAll(
        "#indus_chain_nav_slider .splide__slide"
      );
      let chain_nav_slides_container = document.querySelector(
        "#indus_chain_nav_slider"
      );
      let chain_nav_totalSlide_totalWidth = Array.from(
        chain_nav_totalSlides_items
      ).reduce((acc, slide) => acc + (slide.offsetWidth + 26), 0);
      let chain_nav_slides_containerWidth =
        chain_nav_slides_container.offsetWidth;

      const chain_nav_slider = new Splide("#indus_chain_nav_slider", {
        type: "slide",
        //perPage: 2,
        drag:
          chain_nav_totalSlide_totalWidth > chain_nav_slides_containerWidth
            ? true
            : false,
        autoWidth: true,
        arrows: false,
        pagination: false,
        speed: 1200,
        gap: 0,
        //focus: 'center',
        mediaQuery: "min",
        breakpoints: {
          992: {
            perPage: 2,
          },
        },
      });
      chain_nav_slider.mount();

      // Sync Splide slider with Bootstrap tabs
      chain_nav_slider.on("move", (index) => {
        // Manually trigger tab change on Splide slide change
        const tabLink = document.querySelectorAll(
          ".chain_nav_slider .nav-link"
        )[index];
        const tabId = tabLink.getAttribute("href");

        // Switch the tab using Bootstrap's method
        const tab = new bootstrap.Tab(tabLink);
        tab.show();

        // Activate the corresponding content based on slide change
        const tabContents = document.querySelectorAll(".tab-pane");
        tabContents.forEach((content) =>
          content.classList.remove("show", "active")
        );
        document.querySelector(tabId).classList.add("show", "active");
      });

      // Sync Splide slider with Bootstrap tabs
      const tabs = document.querySelectorAll(".chain_nav_slider .nav-link"); // All tab links
      const tabContents = document.querySelectorAll(
        ".chain_tab_content .tab-pane"
      ); // All tab contents
      const chain_nav_slider_slides = document.querySelectorAll(
        ".chain_nav_slider .splide__slide"
      ); // All splide slides
      // When a tab (nav-link) is clicked, activate the corresponding slide in the Splide slider
      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          // Manually show the corresponding Splide slide
          chain_nav_slider.go(index);

          // Manually activate the corresponding tab content
          tabContents.forEach((content) =>
            content.classList.remove("show", "active")
          );
          document
            .querySelector(tab.getAttribute("href"))
            .classList.add("show", "active");

          // Activate the clicked nav-link
          tabs.forEach((tab) => tab.classList.remove("active"));
          tab.classList.add("active");

          // Manually add the 'is-active' class to the corresponding splide__slide
          chain_nav_slider_slides.forEach((slide) =>
            slide.classList.remove("is-active")
          ); // Remove 'is-active' from all slides
          chain_nav_slider_slides[index].classList.add("is-active"); // Add 'is-active' to the clicked slide
        });
      });

      // Sync Splide with Bootstrap on initial load
      // Sync Splide with Bootstrap on initial load
      chain_nav_slider.on("mounted", () => {
        const activeIndex = splide.index;
        const activeTab = tabs[activeIndex];

        // Activate the corresponding nav-link and tab-content
        activeTab.classList.add("active");
        tabContents.forEach((content) =>
          content.classList.remove("show", "active")
        );
        document
          .querySelector(activeTab.getAttribute("href"))
          .classList.add("show", "active");

        // Add the 'is-active' class to the corresponding Splide slide
        chain_nav_slider_slides[activeIndex].classList.add("is-active");
      });

      document.querySelectorAll(".chain_slider").forEach((el) => {
        new Splide(el, {
          type: "slide",
          //perPage: 3,
          padding: { left: "15px" },
          perMove: 1,
          gap: 16,
          arrows: false,
          pagination: false,
          drag: true,
          autoplay: false,
          interval: 2000,
          speed: 1500,
          mediaQuery: "min",
          breakpoints: {
            0: { fixedWidth: 330 },
            768: {
              gap: 26,
              fixedWidth: 450,
              padding: { left: (wdWidth - 694) / 2 },
            },
            992: {
              fixedWidth: 450,
              padding: { left: (wdWidth - 934) / 2 },
            },
            1200: {
              gap: 36,

              padding: { left: (wdWidth - 1160) / 2 },
            },
            1400: {
              padding: { left: (wdWidth - 1364) / 2 },
            },
            1800: {
              fixedWidth: 483,
              padding: { left: (wdWidth - 1600) / 2 },
            },
          },
        }).mount(); // Mount inner sliders after outer sliders are mounted
      });
    }

    function init_indt_apl_responsiveSliders() {
      let responsiveSplides = [];
      const isMobile = window.innerWidth <= 991;
      const holders = document.querySelectorAll(".indt_apl_card_items_holder");

      holders.forEach((holder, index) => {
        // Check if already initialized
        if (isMobile && !holder.classList.contains("splide")) {
          holder.classList.add("splide", "bottom_arrow_slider");

          // Wrap children in Splide format
          const slides = Array.from(holder.children);
          const track = document.createElement("div");
          track.className = "splide__track";

          const ul = document.createElement("ul");
          ul.className = "splide__list";

          slides.forEach((slide) => {
            const li = document.createElement("li");
            li.className = "splide__slide";
            li.appendChild(slide);
            ul.appendChild(li);
          });

          track.appendChild(ul);
          holder.innerHTML = ""; // Clear old content
          holder.appendChild(track);

          // Assign unique ID if needed
          if (!holder.id) {
            holder.id = `splide-holder-${index}`;
          }

          // Mount Splide
          const splide = new Splide(holder, {
            type: "slide",
            perPage: 1,
            gap: "1rem",
            pagination: false,
            arrows: slides.length > 1 ? true : false,
            drag: true,
            classes: {
              arrows:
                "splide__arrows comn_boxstyle_splide__arrows ms-auto me-auto mt-4",
            },
          }).mount();

          responsiveSplides.push(splide);
        }

        // Destroy if screen is not mobile
        if (!isMobile && holder.classList.contains("splide")) {
          const splide = responsiveSplides.find((s) => s.root === holder);
          if (splide) {
            splide.destroy();
            holder.classList.remove("splide");
            holder.innerHTML = ""; // Optional: You could restore original layout if saved
          }
        }
      });
    }

    window.addEventListener("load", init_indt_apl_responsiveSliders);
    window.addEventListener("resize", () => {
      setTimeout(init_indt_apl_responsiveSliders, 300);
    });

    function init_indt_card_list_responsiveSliders() {
      let responsiveSplides = [];
      const isMobile = window.innerWidth <= 767;
      const holders = document.querySelectorAll(".indus_card_list");

      holders.forEach((holder, index) => {
        // Check if already initialized
        if (isMobile && !holder.classList.contains("splide")) {
          holder.classList.add("splide", "bottom_arrow_slider");

          // Wrap children in Splide format
          const slides = Array.from(holder.children);
          const track = document.createElement("div");
          track.className = "splide__track";

          const ul = document.createElement("ul");
          ul.className = "splide__list";

          slides.forEach((slide) => {
            const li = document.createElement("li");
            li.className = "splide__slide";
            li.appendChild(slide);
            ul.appendChild(li);
          });

          track.appendChild(ul);
          holder.innerHTML = ""; // Clear old content
          holder.appendChild(track);

          // Assign unique ID if needed
          if (!holder.id) {
            holder.id = `splide-holder-${index}`;
          }

          // Mount Splide
          const splide = new Splide(holder, {
            type: "slide",
            perPage: 1,
            gap: "1rem",
            pagination: false,
            arrows: slides.length > 1 ? true : false,
            drag: true,
            classes: {
              arrows:
                "splide__arrows comn_boxstyle_splide__arrows ms-auto me-auto mt-4",
            },
          }).mount();

          responsiveSplides.push(splide);
        }

        // Destroy if screen is not mobile
        if (!isMobile && holder.classList.contains("splide")) {
          const splide = responsiveSplides.find((s) => s.root === holder);
          if (splide) {
            splide.destroy();
            holder.classList.remove("splide");
            holder.innerHTML = ""; // Optional: You could restore original layout if saved
          }
        }
      });
    }

    window.addEventListener("load", init_indt_card_list_responsiveSliders);
    window.addEventListener("resize", () => {
      setTimeout(init_indt_card_list_responsiveSliders, 300);
    });

    /*============ end industry page ================*/
  });
})(jQuery);
