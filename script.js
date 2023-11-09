var circ = document.querySelector("#circ");
tl = gsap.timeline();
const btn = document.querySelector('#btn')
const svgelem = document.querySelector('svg')

window.addEventListener("mousemove", function(details){
     circ.style.left = details.pageX + 'px'
     circ.style.top = details.pageY + 'px'
})


btn.addEventListener('click', function(){
    tl.reverse();
    setTimeout(function(){
        svgelem.classList.add('animation')
    }, 3000)
})



tl
.from('#background',{
    duration: 2,
    scale: .7,
    ease:  'Expo.easeaseInOut',
    opacity: 0
})

.from('#whiteline',{
    duration: 1.5,
    width: 0,
    ease:  'Expo.easeaseInOut'
})


.from('#blackbox',{
    duration: 1.5,
    x: 50,
    ease:  'Expo.easeaseInOut',
    opacity: 0
}, '-=1')

.from('#lineelem',{
    duration: 2,
    scale: .7,
    ease:  'Expo.easeaseInOut',
    opacity: 0
})

.from('#lineelem .line',{
    duration: 2,
    width: 0,
    ease:  'Expo.easeaseInOut',
    opacity: 0
})

.from('#blackbox p',{
    duration: 1.5,
    y: 30,
    ease:  'Expo.easeaseInOut',
    opacity: 0
}, '-=1')


.from('#sideelem',{
    duration: 1.2,
    x: 30,
    ease:  'Expo.easeaseInOut',
    opacity: 0
}, '-=2')


