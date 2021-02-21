var list = document.querySelectorAll('.list-show');
var plus = document.querySelectorAll('.plus');
var fa   = document.querySelector('.fa-bars');
var map  = document.querySelector('.map');
var main = document.querySelectorAll('.main');
var num  = 0; 
var up   = document.querySelector('.up');


function add(){
    var desc = this.nextElementSibling;
    if(desc.style.height){
        desc.style.height = null;
    }else{
        desc.style.height = desc.scrollHeight + "px";
    }
    this.classList.toggle('active');
}
for(var i = 0; i < list.length;i++){
    list[i].addEventListener('click',add);
}
function showLest(){
   map.style.right = "0px";
}
function showLest2(){
    map.style.right = "-40%";
 }
fa.addEventListener('mouseenter',showLest)
map.addEventListener('mouseleave',showLest2)
function overup(){
   main.forEach(s => s.classList.remove('overup'));
   if(num == main.length-1){
       num = 0;
   }else{
       num++;
   }
   main[num].classList.add('overup');
   setTimeout(overup,7000)
   console.log(num)
}
window.addEventListener('scroll',function(){
    up.classList.toggle('give',window.scrollY > 200);
});
window.addEventListener('load',overup);
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
