//  slider
let sliderImages = document.querySelectorAll(".slide");
arrowRight = document.getElementById("arrow-right");
arrowLeft = document.getElementById("arrow-left");
sliderIndicators = document.querySelectorAll(".carousel-bullet");
current = 0;
interval = 3000;
lastIndex = 0;
const timeInterval = 10000; //autoplay every x seconds
let timerID = null;

//clear all img
function reset() {
  sliderImages[lastIndex].classList.remove("active");
  sliderImages[current].classList.add("active");
  sliderIndicators[lastIndex].classList.remove("active");
  sliderIndicators[current].classList.add("active");

  clearInterval(timerID);
  startTimer();
}

//show next
function sliderRight() {
  current++;
  reset();
}

//show prev
function sliderLeft() {
  current--;
  reset();
}

// restart from last slide after first slide
function checkLeft() {
  lastIndex = current;
  if (current === 0) {
    current = sliderImages.length;
  }
}
// left arrow click
if (arrowLeft) {
  arrowLeft.addEventListener("click", function () {
    checkLeft();
    sliderLeft();
  });
}

// restart from first slide at end of slide
function checkRight() {
  lastIndex = current;
  if (current === sliderImages.length - 1) {
    current = -1;
  }
}

// right arrow click
if (arrowRight) {
  arrowRight.addEventListener("click", function () {
    checkRight();
    sliderRight();
  });
}

// Add click to slideIndicators
sliderIndicators.forEach(function (element, id) {
  element.addEventListener("click", function () {
    lastIndex = current;
    current = id;
    reset();
  });
});

// autoplay
function startTimer() {
  timerID = setInterval(function () {
    checkRight();
    sliderRight();
  }, timeInterval);
}

startTimer();
// end of slider and indicators

// collapsable section for tab
// collapsable section for tab
jQuery(document).ready(function ($) {
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
    console.log("option");
  });

  // scroll snap
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".menu-wrapper").addClass("sticky");
      $("#scroll").fadeIn();
    } else {
      $(".menu-wrapper").removeClass("sticky");
      $("#scroll").fadeOut();
    }
  });

  $(".mobile-navigation  .sub-menu").prepend(
    "                  <div class='m-menu__header'> \
    <label class='m-menu__toggle' > \
                    <svg \
                      width='35' \
                      height='35' \
                      viewBox='0 0 24 24' \
                      fill='none' \
                      stroke='#000000' \
                      stroke-width='2' \
                      stroke-linecap='butt'   \
                      stroke-linejoin='arcs'  \
                    >  \
                      <path d='M19 12H6M12 5l-7 7 7 7' />  \
                    </svg>  \
                  </label>  \
                  <span>Back</span> \
                </div> "
  );
  $(".menu-item-has-children").click(function () {
    $(this).addClass("open");
  });
  $(".m-menu__header").click(function (e) {
    $(this).parent().parent().toggleClass("open");
    e.stopPropagation();
  });

  // back to top

  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

 

// add num-animate
const counters = document.querySelectorAll(".counter");
const speed = 0.25; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = 0.5;

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = (count + inc).toFixed(0);
      // Call function every ms
      setTimeout(updateCount, 25);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});



// tabs js
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

//  FAQ accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
