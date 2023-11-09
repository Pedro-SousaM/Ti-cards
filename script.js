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
let pointerTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".boxes",
        start: "+="+200,
        end: "+="+800,
        scrub: true,
        markers: true,
    }
}) 
    pointerTl.to(".flyPointer",{ 
        x:0,scale:1,duration:3
   })
    .fromTo(".flyPointer",{
         x:0,duration:2,ease:"power4.out",y:0,rotationZ:120
    },{
         x:630, rotationZ:240,duration:13,esase:"power4.in",y:0
    })
    .to(".flyPointer",{ 
         x:560,duration:3,y:400,rotationZ:300,
    }).to(".flyPointer",{
        scale:0,duration:4,delay:5
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
       markers:false
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
            end: "+="+900,
            scrub: true,
            stagger:0.4,
            delay:1, 
            
        }
    });
    spnBtl.from(span,{
       stagger:0.3, scale:2,opacity: 0,duration:16, ease:"elastic.out(1,0.3)",boxShadow:"inset 0px 0px 190px -10px white, 20px 20px 0px rgba(0, 0, 0, 0.357)"
     })
 }) 
    var chargingTL=new TimelineLite(
        {
            scrollTrigger: {
                trigger: ".charging",
                start: "+="+1300,
                end: "+="+400,
                scrub: true,
                stagger:0.4,
               
                
            }
        })
        chargingTL.from(".charging",{
           width:"0px"
         })
    
 var spnCtl = new TimelineLite({
    scrollTrigger: {
        trigger: ".spnC",
        start: "+="+2120,
        end: "+="+930,
        scrub: true,
        markers: false,

    }
}
);

spnCtl.from(".spnC", {
    scale: 0, opacity: 0.3, rotationZ: 30, ease: "bounce.out", duration: 3,boxShadow: "inset 0px 0px 190px -120px white, 0px 0px 0px rgba(0, 0, 0, 0.357)"
}).fromTo(".spnD",{boxShadow: "inset 0px 0px 190px -120px white, 0px 0px 0px rgba(0, 0, 0, 0.357)"},{
    x:"105%", duration:6, ease: "slow(0.1,1,false)", delay:2,boxShadow:  "inset 0px 0px 190px -20px rgba(255, 255, 255, 0.272), 5px 5px 0px rgba(0, 0, 0, 0.357)"
}).fromTo(".spnE",{boxShadow: "inset 0px 0px 190px -120px white, 0px 0px 0px rgba(0, 0, 0, 0.357)"},{
    y:"105%", duration:6, ease: "elastic.out",immediateRender:true ,
    boxShadow:  "inset 0px 0px 190px -20px rgba(255, 255, 255, 0.272), 5px 5px 0px rgba(0, 0, 0, 0.357)"
}).to(".spnE",{
    x:"105%", duration:5, ease: "elastic.out"
}) 

const splitCharsColor = document.querySelectorAll(".choices");

splitCharsColor.forEach((char) => {
    const colorClass = char.classList[1];
    const text = new SplitType(char, { types: 'words,chars' });

    text.chars.forEach((char, index) => { 
        
        gsap.fromTo(
            char, 
            {
                color: "black",
                duration: 2,
                delay: index * 0.1,
                y: 0,
                rotationZ: 0
            },
            {
                color: colorClass,
                duration: 2,
                delay: index * 0.1,
                y: 0,
                rotationZ: 0,
                repeat: -1,
                yoyo: true
            }
        );
        gsap.to(char, {
            duration: 1,
            x: -1100, // ajuste a quantidade de deslocamento conforme necessário
            delay: index * 0.1, // ajuste o atraso conforme necessário
            yoyo: true,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: char,
                start: "top 95%", // ajuste a posição de início conforme necessário
                end: "top 100%", // ajuste a posição de fim conforme necessário
                scrub:false
            }
        });
    });
});
