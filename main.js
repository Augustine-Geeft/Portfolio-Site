ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 8,
    yPercent: -50,
  }),
  scrub: true,
  trigger: ".hero",
  start: "top bottom",
  endTtrigger: ".content",
  end: "top center"
});

// const lastScrollTop = 0;
// const navItem = document.querySelector(".nav-items");
// window.addEventListener("scroll", function () {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     navItem.style.top = "-100px"
//   } else {
//     navItem.style.top = "0"
//   }
//   lastScrollTop = scrollTop;
// })

// $(function () {
//   const scroll = $(document).scrollTop();
//   const navHeight = $('.nav-items').outerHeight();

//   $(window).scroll(function () {
//     const scrolled = $(document).scrollTop();

//     if (scrolled > navHeight) {
//       $('.nav-items').addClass('animate');
//     } else {
//       $('.nav-items').removeClass('animate')
//     }

//     if(scrolled > scroll) {
//       $('.nav-items').removeClass('sticky');
//     } else{
//       $('.nav-items').addClass('sticky');
//     }

//     scroll = $(document).scrollTop();
//   });
// });

const options = {
  // rootMargin: "-550px",
}

const slideUpElements = document.querySelectorAll('.slideUp');
const fadeInElements = document.querySelectorAll('.fadeIn');
const fadeInLeftElements = document.querySelectorAll('.fadeInLeft');
const fadeInUpElements = document.querySelectorAll('.fadeInUp');
const fadeIndownElements = document.querySelectorAll('.fadeIndown');

const observer = new IntersectionObserver((entries, options) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('showslideUp')
      entry.target.classList.add('showfadeIn')
      entry.target.classList.add('showfadeInLeft')
      entry.target.classList.add('showfadeInUp')
      entry.target.classList.add('showfadeIndown')
    } else {
      entry.target.classList.remove('showfadeIn')
      entry.target.classList.remove('showfadeInLeft')
      entry.target.classList.remove('showfadeInUp')
      // entry.target.classList.remove('showfadeIndown')
    }
  })
});

slideUpElements.forEach((el) => observer.observe(el));
fadeInElements.forEach((el) => observer.observe(el));
fadeInLeftElements.forEach((el) => observer.observe(el));
fadeInUpElements.forEach((el) => observer.observe(el));
fadeIndownElements.forEach((el) => observer.observe(el));

// const prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   const currentScrollpos = window.pageYOffset;
//   if (prevScrollpos > currentScrollpos) {
//     document.querySelector(".nav-items").style.top = "0";
//   } else {
//     document.querySelector(".nav-items").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollpos;
// }

// window.onscroll = function () {
//   scroll();
// };

// function scroll() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     document.querySelector(".nav-items").style.top = "-80px";
//   } else {
//     document.querySelector(".nav-items").style.top = "0px";
//   }
// }

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
