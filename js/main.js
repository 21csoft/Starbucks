const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

console.log(searchInputEl.name)

searchEl.addEventListener('click',function() {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder','통합검색')
})

searchInputEl.addEventListener('blur',function() {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder','')
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function() {
  console.log("Scroll!!")
  console.log(window.scrollY)
  if (window.scrollY > 400) {
    //gsap.to(요소,시간,옵션)
    gsap.to(badgeEl,.5, {
      opacity:0,
      display:'none'
    })
  } else {
    gsap.to(badgeEl,.5, {
      opacity:1,
      display:'block'
    })
  }
},300))

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl,index) {
  gsap.to(fadeEl,1,{
    delay: (index+1) * .7,
    opacity:1
  })
})

new Swiper('.notice_line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
 })

 new Swiper('.promotion .swiper',{
  slidesPerView:3,
  spaceBetween:20,
  centeredSlides:true,
  loop:true,
  // autoplay: {
  //    delay:5000,
  // },
  pagination: {
    el:'.promotion .swiper-pagination',
    clickable:true
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
 })

 const promotionEl = document.querySelector('.promotion');
 const promotionElBtn = document.querySelector('.toggle_promotion');
 let isHidden = false;

 promotionElBtn.addEventListener('click',function() {
  isHidden=!isHidden;
  if (isHidden) {
    //숨김 처리
    promotionEl.classList.add("hide");
  } else {
    //보임 처리
    promotionEl.classList.remove("hide");
  }
 })
