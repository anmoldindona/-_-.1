var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x + 20 +"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x - 175 +"px"
    blur.style.top=dets.y - 175 +"px"
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"84px",
    fontWeight:"400",
    duration:"0.5",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})




//Page2