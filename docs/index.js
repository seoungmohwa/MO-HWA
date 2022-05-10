
// 마우스
gsap.set(".cursor", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".cursor");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});


// 페이지 세로 가로 이동

let scroll_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".factsContainer",
      start: "top center",
      // pin: true,
      scrub: true,
      end: "+=300"
      // markers: true,
    }
  }),
  facts = [...document.querySelectorAll(".fact")];
scroll_tl.to(".factsContainer h2", {
  scale: 1.5,
  duration: 0.3,
  ease: "slow"
});
scroll_tl.to(facts, {
  xPercent: -55 * (facts.length - 1),
  scrollTrigger: {
    trigger: ".factsContainer_sm",
    start: "center center",
    pin: true,
    // horizontal: true,
    // pinSpacing:false,
    // markers: true,
    scrub: 1,
    snap: 1 / (facts.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    // end: () => `+=${smallFactsContainer.offsetWidth}`
    end: () => `+=1600`
  }
});




// 메인 애니메이션
 TweenMax.to(".first", 0.5, {
   delay: 0.3,
   left: "-100%",
   ease: Expo.easeInOut
 });

 TweenMax.from(".header", 1.5, {
   delay: 0.8,
   opacity: 0,
   y: -100,
   ease: Expo.easeInOut
 });

 TweenMax.from(".main-circle", 1.3, {
   delay: 1.5,
   opacity: 0,
   y: -900,
   ease: Expo.easeInOut
 });



// 흐르는 text

const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')
const pTag3 = document.querySelector('.third-parallel')
const pTag4 = document.querySelector('.forth-parallel')
const pTag5 = document.querySelector('.five-parallel')


const textArr1 = 'SCROLL DOWN TO SEE MY WORK /// SCROLL DOWN TO SEE MY WORK /// SCROLL DOWN TO SEE MY WORK /// SCROLL DOWN TO SEE MY WORK /// SCROLL DOWN TO SEE MY WORK ///'.split(' ')
const textArr2 = 'SCROLL DOWN TO SEE MY ABOUT /// SCROLL DOWN TO SEE MY ABOUT ///SCROLL DOWN TO SEE MY ABOUT /// SCROLL DOWN TO SEE MY ABOUT/// SCROLL DOWN TO SEE MY ABOUT ///'.split(' ')
const textArr3 = 'SCROLL DOWN TO SEE MY ABOUT /// SCROLL DOWN TO SEE MY ABOUT /// SCROLL DOWN TO SEE MY ABOUT /// SCROLL DOWN TO SEE MY ABOUT /// SCROLL DOWN TO SEE MY ABOUT ///'.split(' ')
const textArr4 = 'SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT //// SCROLL DOWN TO SEE MY CONTACT ////'.split(' ')
const textArr5 = 'SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT /// SCROLL DOWN TO SEE MY CONTACT  ///'.split(' ')


let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)
initTexts(pTag4, textArr4)
initTexts(pTag5, textArr5)

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0`
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count1++
  count2++
  count3++
  count4++
  count5++

  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, 1)
  count3 = marqueeText(count3, pTag3, -1)
  count4 = marqueeText(count4, pTag4, 1)
  count5 = marqueeText(count5, pTag5, -1)

  window.requestAnimationFrame(animate)
}

function scrollHandler() {
  count1 += 15
  count2 += 15
  count3 += 15
  count4 += 15
  count5 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()




// 어바웃 동그라미 성장 애니메이션

const tl = gsap.timeline({ defaults: { duration: 1.2 } });
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card",
    start: "center bottom"
  }
});
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".features-header",
    start: "center bottom"
  }
});
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials-header",
    start: "center bottom"
  }
});

tl3.from(".card", { opacity: 0, y: 40, duration: 0.8, stagger: 0.2 });

tl4.from(".features-header", { opacity: 0, y: 40, duration: 0.5 });

tl5.from(".testimonials-header", {
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.2
});



// 파이차트 애니메이션

console.log("JavaScript is amazing!");
$(document).ready(function ($) {
  function animateElements() {
    $(".progressbar").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 6,
            value: percent / 100,
            lineCap: "round",
            thickness: 12,
            size: 128,
            fill: {
              color: "#245723"
            }
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("div")
                .text((stepValue * 100).toFixed(0) + "%");
            }
          )
          .stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
});



//  스크롤 앵커 이동
function scrollNav() {
  $('.menu-text a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 200);
    return false;
  });
}
scrollNav();

