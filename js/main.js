/* let myName = "Grace";
let email = 'gracejoo26@gmail.com';
let hello = `Hello ${myName}?!`//보관법
console.log(myName);
console.log(email);
console.log(hello);
 */



/* const info = {
  name:'grace',
  age:31,
  getName : function(){
    return this.name;
  }
};
const hisName = info.getName();
console.log(hisName);
console.log(info.getName());


const name = {
  name :'kihwa',
  age:61,
  getName : function(){
    return this.name;
  }
}
const herName = name.getName();
console.log(herName);
console.log(name.getName());


const name02 = {
  name:'youngMyung',
  age:62,
  getAge:function(){
    return this.age;
  }
}
const hisAge = name02.getAge();
console.log(hisAge);
console.log(name02.getAge()); */


//chap09-06 예문

/* let boxEl = document.querySelector('.box');

console.log(boxEl);
boxEl.addEventListener('click',function(){
  console.log('Click!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
}); */



//chap09-07예문

/* const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function ( boxEl , index ){
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
}); */

/* const boxEl = document.querySelector('.box');

console.log(boxEl.textContent); //getter

boxEl.textContent = "HEROPY!!";
console.log(boxEl.textContent); //setter */


const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');//searchInputEl에 placeholder라는 html 속성을 넣는다 
});

searchInputEl.addEventListener('blur',function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ' ');//searchInputEl에 placeholder라는 html 속성을 넣는다 
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap.to(요소, 지속시간, 옵션=>css속성 넣을 수 있다.);
      gsap.to(badgeEl, .6, {
        opacity : 0,
        display : 'none'  
      });
      //btn  보이기
      gsap.to(toTopEl,.2, {
        x: 0
      });
    }else {
      // 배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, .6, {
        opacity : 1,
        display : 'block'
    });
      //btn 숨기기
      gsap.to(toTopEl,0.2, {
        x: 100
      });
    }
  },300)); 
//_.throttle=>scroll event일때 많은 횟수에 걸쳐 실행되지 않도록 control함
//_.throttle(함수, 시간)


toTopEl.addEventListener('click',function () {
  gsap.to(window, .7,{
    scrollTo: 0
  });
});
//opacity 속성처럼 값을 숫자로 입력하는 속성들은, 전환효과 (translation 속성이나 gsap 라이브러리등)를 통해 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만, display속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환효과를 적용 할 수 없습니다.


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){ //index는 반복되는 횟수
  //gsap.to(요소, 지속시간, 옵션=>css속성 넣을 수 있다.);
  gsap.to( fadeEl , 1 , { //animation처리해주는 라이브러리에서 제공
    delay : ( index + 1 ) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity : 1
  });
});
//오.. 그냥 index => 순서임!! 만 치면 되는군.

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction:'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container',{
  slidesPerView:3,//한번에 보여줄 슬라이드 개수
  spaceBetween:10,//slide여백
  centeredSlides:true,//center부터 출력
  loop:true,
  autoplay: {
    delay:5000
  },
  pagination:{
    el:'.promotion .swiper-pagination',//page번호 요소 선택자
    clickable: true//사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next',
  }
});

const promotionEl = document.querySelector ('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;//'숨겨져 있니?'변수에 (false)보이고있다.
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion //!뒤에있는게 반대로 해주세요 (지수의 값을 반대값으로 전환시킴)
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,// 선택자 
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, //y축으로 얼마만큼 움직일것인가
      repeat:-1,//무한반복
      yoyo:true, //yoyo처럼 왔다갔다.
      ease:Power1.easeInout,
      delay:random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,//보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //new 생성자함수 사용