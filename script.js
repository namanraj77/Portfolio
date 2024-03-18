var typed= new Typed("#auto-type",{
  strings :["Web Developer","Software Developer","Content Creator"],
  typeSpeed: 35,
  backSpeed: 35,
  loop: true
})
/*const scroll1 = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});*/
AOS.init();// for scroll reveal animation
var main= document.querySelector("#main")
var crsr= document.querySelector("#cursor")
main.addEventListener("mousemove", function(dets){
  crsr.style.left=dets.x+"px"// dets mouse movement ko track karta hai, in built function hai
  crsr.style.top=dets.y+"px"
})