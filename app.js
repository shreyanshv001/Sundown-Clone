const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    inertia:0.6,
    smartphone: {
        breakpoint:0,
        smooth: true,
        getDirection:true,
        inertia:0.8
    },
    tablet: {
        breakpoint: 0,
    }
});

const menu=document.querySelector(".menu")
const menuText=document.querySelector(".menu-text")
const companyIcon=document.querySelector(".company-icon")
let click=0;
menu.addEventListener("click",()=>{
    if(click===0){
        gsap.to(".menu-page",{
            yPercent:100,
            duration:1
        })
        companyIcon.style.opacity="0"
        companyIcon.style.transition="0.3s"
        menuText.innerHTML="&#x2715 &nbsp Menu"
        click=1;
    }else{
        gsap.to(".menu-page",{
            yPercent:-100,
            duration:1
        })
        companyIcon.style.opacity="1"
        companyIcon.style.transition="0.6s"
        menuText.innerHTML="&#x2630 &nbsp Menu"
        click=0;
    }
})


const ele=document.querySelector(".page3-con");
const fixed=document.querySelector(".fixed")
const video=document.querySelector(".fixed-video")
ele.addEventListener("mouseenter",()=>{
    fixed.style.display="block"
})
ele.addEventListener("mouseleave",()=>{
    fixed.style.display="none"
})

let elem1=document.querySelector(".class-1")
elem1.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('././img1.webp')"
})
let elem2=document.querySelector(".class-2")
elem2.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('./img2.webp')"
})
let elem3=document.querySelector(".class-3")
elem3.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('./img3.webp')"
})
let elem4=document.querySelector(".class-4")
elem4.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('./img4.webp')"
})
let elem5=document.querySelector(".class-5")
elem5.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('./img5.webp')"
})
let elem6=document.querySelector(".class-6")
elem6.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('./img6.jpg')"
})
let elem7=document.querySelector(".class-7")
elem7.addEventListener("mouseenter",()=>{
    fixed.style.backgroundImage="url('./img7.jpeg')"
})


const design=document.querySelector(".design")
const project=document.querySelector(".project")
const excution=document.querySelector(".excution")
const paraText=document.querySelector(".dedicated-text")
const image=document.querySelector(".page4-img")
design.addEventListener("click",()=>{
    design.style.color="#EFEAE3";
    project.style.color="#504A45"
    excution.style.color="#504A45"
    paraText.innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    image.src="./4img1.webp"
})
project.addEventListener("click",()=>{
    project.style.color="#EFEAE3";
    design.style.color="#504A45"
    excution.style.color="#504A45"
    paraText.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    image.src="./4img2.webp"
})
excution.addEventListener("click",()=>{
    excution.style.color="#EFEAE3";
    design.style.color="#504A45"
    project.style.color="#504A45"
    paraText.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    image.src="./4img3.webp"
})
const mediaQuery = window.matchMedia('(max-width: 600px)');
function handleTabletChange(e) {
  if (e.matches) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView:1.5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView:3.5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
  }
}
mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);

const swiperme=document.querySelector(".swiper");
const follower=document.querySelector(".follower");

let swipperMouseX=0;
let swipperMouseY=0;
swiperme.addEventListener('mousemove', (e) => {
    const rect=swiperme.getBoundingClientRect()
    swipperMouseX=e.clientX-rect.left;
    swipperMouseY=e.clientY-rect.top;
    gsap.to(".follower", {
      duration: 0.3,
      x: swipperMouseX,
      y: swipperMouseY,
    });
});
swiperme.addEventListener("mouseenter",()=>{
    follower.style.scale="1"
})
swiperme.addEventListener("mouseleave",()=>{
    follower.style.scale="0"
})

function loading(){
    let tl=gsap.timeline()
    tl.to(".loader-first",{
        opacity:1,
        duration:0.45,
        delay:0,
    })
    tl.to(".loader-first",{
        opacity:0,
        duration:0.45,
        delay:0
    })
    tl.to(".loader-second",{
        opacity:1,
        duration:0.45,
        delay:0
    })
    tl.to(".loader-second",{
        opacity:0,
        duration:0.45,
        delay:0
    })
    tl.to(".loader-third",{
        opacity:1,
        duration:0.45,
        delay:0
    })
    tl.to(".loader-third",{
        opacity:0,
        duration:0.45,
        delay:0
    })
    tl.to(".loader",{
        yPercent:-100,
        duration:1.3,
        delay:0,
    })
}
loading()