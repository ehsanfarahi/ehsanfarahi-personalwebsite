// Top Arrow - Start
// const topArrow = document.querySelector(".top-arrow");
// const displayArrow = () => {
//   if (document.documentElement.scrollTop > 250) {
//     topArrow.style.display = "block";
//   } else {
//     topArrow.style.display = "none";
//   }
// };

// const goToTop = () => (document.documentElement.scrollTop = 0);
// topArrow.addEventListener("click", goToTop);
// Top Arrow - End

//Top Menu Fixed Mode - Start
const ehsanFarahiCartoon = document.querySelector(".ehsan-farahi-cartoon");
const topMenuBorder = document.querySelector(".top-menu");
const ehsanCartoonCut = () => {
  if (document.documentElement.scrollTop > 80) {
    ehsanFarahiCartoon.attr("src", "images/ehsan-farahi-img2.png");
    topMenuBorder.style.borderBottom = "2px solid black";
  } else {
    ehsanFarahiCartoon.attr("src", "images/ehsan-farahi-img.png");
    topMenuBorder.style.borderBottom = "none";
  }
};
// Top Menu Fixed Mode - End

// Ehsan Farahi Starter Name Start
/*
const fadeOut = document.querySelector(".fade-out");
const mainWrapper = document.querySelector(".main-wrapper");


setTimeout(() => {
  document.querySelector(".l1").style.display = "inline";
}, 500);
setTimeout(() => {
  document.querySelector(".l2").style.display = "inline";
}, 750);
setTimeout(() => {
  document.querySelector(".l3").style.display = "inline";
}, 1000);
setTimeout(() => {
  document.querySelector(".l4").style.display = "inline";
}, 1250);
setTimeout(() => {
  document.querySelector(".l5").style.display = "inline";
}, 1500);
setTimeout(() => {
  document.querySelector(".l6").style.display = "inline";
}, 1750);
setTimeout(() => {
  document.querySelector(".l7").style.display = "inline";
}, 2000);
setTimeout(() => {
  document.querySelector(".l8").style.display = "inline";
}, 2250);
setTimeout(() => {
  document.querySelector(".l9").style.display = "inline";
}, 2500);
setTimeout(() => {
  document.querySelector(".l10").style.display = "inline";
}, 2750);
setTimeout(() => {
  document.querySelector(".l11").style.display = "inline";
}, 3000);

(() => {
  setTimeout(() => {
    document.querySelector(".main-wrapper").style.display = "block";
    document.querySelector(".fade-out").style.display = "none";
  }, 3500);
})();
*/

// Ehsan Farahi Starter Name End

// User Sign Up Form Display Start
const userRegForm = document.querySelector(".signup-close-btn");

// User Sign Up Form Display End
