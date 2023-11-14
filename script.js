
function initGsap(){
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
        start: "+=" + 200,
        end: "+=" + 800,
        scrub: true,
        markers: false,
    }
})
pointerTl.to(".flyPointer", {
    x: 0, scale: 1, duration: 3
})
    .fromTo(".flyPointer", {
        x: 0, duration: 2, ease: "power1.out", y: 0, rotationZ: 120
    }, {
        x: 630, rotationZ: 240, duration: 13, esase: "power1.in", y: 0
    })
    .to(".flyPointer", {
        x: 560, duration: 3, y: 400, rotationZ: 300,
    }).to(".flyPointer", {
        scale: 0, duration: 4, delay: 5
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
            start: "+=" + 1900,
            end: "+=" + 700,
            scrub: true,
        },
        opacity: 0.5,
        stagger: 0.1,
        color: "#505cfd",
        textShadow: "6px 6px 0 #000",
        y: -6,
        x: -4
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
    .from(".spn5", { opacity: 1, boxShadow: "none" })
    .to(".spn5", { rotationX: 0, yoyo: false, y: 146, pin: true, ease: "elastic.out(1,0.3)", duration: 6 })

var spn6tl = new TimelineLite({
    scrollTrigger: {
        trigger: ".spn6",
        start: "+=" + 200,
        end: "+=" + 500,
        scrub: false,
        markers: false
    }
});
spn6tl.from(".spn6", {
    x: 150, duration: 3, ease: "elastic.out(1,0.3)"
})
document.querySelectorAll(".spnB").forEach(span => {
    var spnBtl = new TimelineLite({
        scrollTrigger: {
            trigger: span,
            start: "+=" + 1000,
            end: "+=" + 900,
            scrub: true,
            stagger: 0.4,
            delay: 1,

        }
    });
    spnBtl.from(span, {
        stagger: 0.3, scale: 2, opacity: 0, duration: 16, ease: "elastic.out(1,0.3)", boxShadow: "inset 0px 0px 190px -10px white, 20px 20px 0px rgba(0, 0, 0, 0.357)"
    })
})
var chargingTL = new TimelineLite(
    {
        scrollTrigger: {
            trigger: ".charging",
            start: "+=" + 1300,
            end: "+=" + 400,
            scrub: true,
            stagger: 0.4,


        }
    })
chargingTL.from(".charging", {
    width: "0px"
})

var spnCtl = new TimelineLite({
    scrollTrigger: {
        trigger: ".spnC",
        start: "+=" + 2120,
        end: "+=" + 930,
        scrub: true,
        markers: false,

    }
}
);

spnCtl.from(".spnC", {
    scale: 0, opacity: 0.3, rotationZ: 30, ease: "bounce.out", duration: 3, boxShadow: "inset 0px 0px 190px -120px white, 0px 0px 0px rgba(0, 0, 0, 0.357)"
})
    .fromTo(".spnD", { boxShadow: "inset 0px 0px 190px -120px white, 0px 0px 0px rgba(0, 0, 0, 0.357)" }, {
        x: "105%", duration: 6, ease: "slow(0.1,1,false)", delay: 2, boxShadow: "inset 0px 0px 190px -20px rgba(255, 255, 255, 0.272), 5px 5px 0px rgba(0, 0, 0, 0.357)"
    })
    .fromTo(".spnE", { boxShadow: "inset 0px 0px 190px -120px white, 0px 0px 0px rgba(0, 0, 0, 0.357)" }, {
        y: "105%", duration: 6, ease: "elastic.out", immediateRender: true,
        boxShadow: "inset 0px 0px 190px -20px rgba(255, 255, 255, 0.272), 5px 5px 0px rgba(0, 0, 0, 0.357)"
    })
    .to(".spnE", {
        x: "105%", duration: 5, ease: "elastic.out"
    })

    function mixColor(string, string2) {
        const rgb = string.match(/\d+/g).map(Number);
        const rgb2 = string2.match(/\d+/g).map(Number);
        return `rgb(${Math.round((rgb[0] + rgb2[0]) / 2)}, ${Math.round((rgb[1] + rgb2[1]) / 2)}, ${Math.round((rgb[2] + rgb2[2]) / 2)})`;
      }
      
      const textShadowDepth = 8;
      
      function setShadow(color, direction) {
        let t = "0px 0px ";
        let TextShadowString = t + color;
        let fromTextShadowString = TextShadowString;
      
        for (let i = 1; i <= textShadowDepth; i++) {
          const offset = i * 1;
          const shadow = `, ${offset}px ${offset}px `;
          TextShadowString += shadow + color;
          fromTextShadowString += shadow + color;
        }
      
        return direction ? TextShadowString : fromTextShadowString;
      }
      
      const splitBigCharsColor = document.querySelectorAll(".BigChoices");
      
      splitBigCharsColor.forEach((char) => {
        const colorClass = char.classList[1];
        const text = new SplitType(char, { types: 'words,chars' });
        const shadowColor = setShadow(mixColor("rgb(0, 0, 0) ", colorClass), true); 
        
        const shadowColor2 = setShadow("black", true);
      
        text.chars.forEach((char, index) => {
          gsap.fromTo(
            char,
            {
              color: colorClass,
              textShadow: shadowColor,
              duration: 2,
              delay: index * 0.1,
              y: 0,
              stagger: 6,
            },
            {
              color: "rgb(56, 152, 255)",
              textShadow: shadowColor2,
              duration: 2,
              delay: index * 0.1,
              y: 0,
              rotationZ: 0,
              repeat: -1,
              yoyo: true,
            }
          );
      
          gsap.fromTo(
            char,
            {
              duration: 0.5,
              scale:1.4,
              opacity: 0,
            },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              delay: index * 0.07,
              yoyo: true,
              ease: "elastic.out",
              scrollTrigger: {
                trigger: char,
                start: "top 95%",
                end: "top 100%",
                scrub: false,
              },
            }
          );
        });
      }); 
      const splitCharsColor = document.querySelectorAll(".choices");
      
      splitCharsColor.forEach((char) => {
        const colorClass = char.classList[1];
        const text = new SplitType(char, { types: 'words,chars' });
        const shadowColor = setShadow(mixColor("rgb(0, 0, 0) ", colorClass), true); 
       
        const shadowColor2 = setShadow("black", true);
      
        text.chars.forEach((char, index) => {
          gsap.fromTo(
            char,
            {
              color: colorClass,
              duration: 1, 
              delay: index * 0.1,
              y: 0,
              stagger: 6,
            },
            {
              color: "rgb(56, 152, 255)",
              duration: 1.4,
              delay: index * 0.1,
              y: 0,
              rotationZ: 0,
              repeat: -1,
              yoyo: true,
            }
          );
      
          gsap.fromTo(
            char,
            {
              duration: 0.5,
              scale:1.4,
              opacity: 0,
            },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              delay: index * 0.07,
              yoyo: true,
              ease: "elastic.out",
              scrollTrigger: {
                trigger: char,
                start: "top 95%",
                end: "top 100%",
                scrub: false,
              },
            }
          );
        });
      }); 
      let HeaderTL = new TimelineLite(
        {
            scrollTrigger: {
                trigger: ".header",
                start: "+=" + 650,
                end: "+=" + 0,
                scrub: true,
            }
        })
        HeaderTL.to(".header",{
            backgroundColor:"rgb(73, 86, 240)"
        })}
    function pageTransition(){
    let tl = gsap.timeline() 
    tl.to('.transition li',{
        duration: 0.8, 
        scaleY:1,  
        opacity:1,
        transformOrigin:"bottom left", 
        stagger:.2, 
        ease:"elastic.out"
    },0)
    .fromTo("html",{"--myOpacity": 1}, {"--myOpacity": 0, duration: 0.8},1)
    .to('.transition li',{
        duration: 1, 
        scaleY:0,  
        transformOrigin:"top top",  
        stagger:.2 ,
        delay: .3,
    },1)
}


function delay(n){
    n=n || 2000; 
    return new Promise(done=>{
        setTimeout(()=>{ 
            done();
        },n)
    })
} 
function contentAnimation(){
    
}
barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            lenis.scrollTo("top", {
                duration: 1
            });
            console.log("sai");
            pageTransition();
            await delay(1000);
            done();

        },
        async once(data) {
            lenis.scrollTo("top", {
                duration: 1
            });
            console.log("uma");
            const done = this.async();
            await delay(1000);
            initGsap();
            done();

        },
        async after(data) {
            const done = this.async();
            await delay(1000);
            initGsap();
            done();
        }
    }]
});
