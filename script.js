let layers = document.querySelectorAll(".layer")

document.addEventListener("mousemove", parallax)
function parallax(e) {
    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        layer.style.transform = ` translate(${x}px,${y}px)`
    });
}
gsap.registerPlugin(ScrollTrigger);

const animatedScroll = document.querySelector(".scroll-animator-box")
let scrollWidth = animatedScroll.offsetWidth
let scrolltotal = scrollWidth - window.innerWidth

let scrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-animator-box",
        start: "top -13%",
        end: "+=" + scrolltotal * 1,
        pin: true,
        scrub: 1,

    }
})
scrollTimeline
    .to(animatedScroll, {
        x: -scrolltotal,
        duration: 7,
        ease: "none"
    })

let textTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".animate1",
        start: "bottom bottom",
        end: "bottom 50%",
        scrub: false,
        markers: false,
    }
})
textTL
    .from(".animate1", {
        text: "",
        duration: 1.3,
        ease: "power1.inOut"
    })


const splitChars = document.querySelectorAll(".reveal")
splitChars.forEach((char) => {
    const text = new SplitType(char, { types: 'words,chars' })
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "center center",
            end: "center -10%",
            scrub: true,
        },
        opacity: 0,
        stagger: 0.1,
        y: 40,
        rotationZ: 13
    })
}) 
const splitChars2 = document.querySelectorAll(".reveal-2")
splitChars2.forEach((char) => {
    const text = new SplitType(char, { types: 'words,chars' })
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "+="+1900,
            end: "+="+700,
            scrub: true,
        },
        opacity: 0.5,
        stagger: 0.1,
        color:"#505cfd",  
        textShadow:"6px 6px 0 #000", 
        y:-6, 
        x:-4
    })
})
gsap.set(".spn5", { perspective: 800 });
gsap.set(".card", { transformStyle: "preserve-3d" });
gsap.set(".back", { rotationY: -180 });
gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
var spn4tl = new TimelineLite({
    scrollTrigger: {
        trigger: ".spn5",
        start: "center 0%",
        end: "center -45%",
        scrub: true,
        markers: false,

    }
}
);

spn4tl.from(".spn4", {
    scale: 0.5, opacity: 0.0, rotationZ: 30, ease: "expo.out", duration: 3,
})
    .from(".spn5", { opacity: 1,boxShadow:"none" })
    .to(".spn5", { rotationX: 0, yoyo: false, y: 146, pin: true, ease: "elastic.out(1,0.3)", duration: 6 })
   
var spn6tl = new TimelineLite({
    scrollTrigger: {
        trigger: ".spn6",
        start: "+="+200,
        end: "+="+500,
        scrub: false,
       markers:true
    }
});
spn6tl.from(".spn6",{
     x:150, duration:3, ease:"elastic.out(1,0.3)"
 })   
 document.querySelectorAll(".spnB").forEach(span=>{
    var spnBtl = new TimelineLite({
        scrollTrigger: {
            trigger: span,
            start: "+="+1000,
            end: "+="+600,
            scrub: true,
            stagger:0.4,
            delay:1, 
            
        }
    });
    spnBtl.from(span,{
       stagger:0.3, scale:2,opacity: 0,duration:16, ease:"elastic.out(1,0.3)"
     }).to(".spnBB",{
    rotationZ:-16,duration:9
 })  
 })
 document.addEventListener("scroll",()=>{ 
    var rect = document.querySelector(".boxes").getBoundingClientRect();
console.log(rect.top, rect.left);

 }) 
 var spnCtl = new TimelineLite({
    scrollTrigger: {
        trigger: ".spnC",
        start: "+="+2000,
        end: "+="+400,
        scrub: true,
        markers: false,

    }
}
);

spnCtl.from(".spnC", {
    scale: 0, opacity: 0.3, rotationZ: 30, ease: "bounce.out", duration: 3
})
 