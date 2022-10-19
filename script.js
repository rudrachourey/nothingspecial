function abc() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    tablet: { smooth: true },

    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}


function lineanimation() {
  document.querySelectorAll(".text")
    .forEach(function (text) {
      text.addEventListener("mouseenter", function (dets) {
        gsap.to(dets.target.children[1], {
          width: "100%",
          left: 0,
          ease: Expo.easeinOut,
          // duration:1
        })

      })

      text.addEventListener("mouseleave", function (dets) {
        gsap.to(dets.target.children[1], {
          width: "0%",
          left: "100%",
          ease: Expo.easeinOut,
          // duration:1,
          onComplete: function () {
            dets.target.children[1].style.left = "0";
          }
        })
      })


    });

  document.querySelectorAll(".text")
    .forEach(function (text) {
      text.addEventListener("mouseenter", function (dets) {
        gsap.to(dets.target.children[2], {
          opacity: .5,
          ease: Expo.easeinOut,
          // duration:1
        })

      })

      text.addEventListener("mouseleave", function (dets) {
        gsap.to(dets.target.children[2], {
          opacity: 0,
          ease: Expo.easeinOut,
          // duration:1,
        })
      })


    });

}

function navanimation() {

  document.querySelectorAll(".tag")
    .forEach(function (text) {
      text.addEventListener("mouseenter", function (dets) {
        gsap.to(dets.target.children[1], {
          width: "100%",
          // left:0,
          ease: Expo.easeinOut,
          duration: .3
        })

      })

      text.addEventListener("mouseleave", function (dets) {
        gsap.to(dets.target.children[1], {
          width: "0%",
          left: "100%",
          ease: Expo.easeinOut,
          duration: .5,
          onComplete: function () {
            dets.target.children[1].style.left = "0";
          }
        })
      })

    });

  document.querySelector("#nav")
    .addEventListener("mouseenter", function () {
      gsap.to("#single", {
        height: "100%",
        duration: .2
      })

      gsap.to(".cover", {
        duration: .2,
        height: "100%"
      })

      gsap.to("#nav span", {
        opacity: 1
      })

    })

  document.querySelector("#nav")
    .addEventListener("mouseleave", function () {
      gsap.to("#single", {
        height: "5%",
      })

      gsap.to(".cover", {
        height: "0%"
      })

      gsap.to("#nav span", {
        opacity: 0
      })
    })
}

function textanimation() {
  var h1 = document.querySelector("#fs h1");

  var clutter = "";

  var temp = 0;


  for (var i = 0; i <= Math.floor(h1.textContent.length / 2); i++) {
    console.log(i);
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  for (var i = Math.floor(h1.textContent.length / 2) - 1; i >= 0; i--) {
    console.log(i);
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  document.querySelector("h1").innerHTML = clutter;

  document.querySelectorAll("span")
    .forEach(function (elem) {
      gsap.to(elem, {
        y: 0,
        ease: Power3.easeOut,
        duration: .8,
        delay: elem.dataset.delay * .1
      })
    })
}

gsap.to("#nav", {
  // right :0,
  width: "100%",
  duration: 2.5,
  delay: 1,
  ease: Circ.inOut
})


var cth ,ctw


if (window.innerWidth > 500){
  cth = 1.5;
  ctw = .7;
}

else{
  cth = 1.2;
  ctw = 2.2
}

function cubeanimation() {

  var tl = gsap.timeline();
  tl.to("#cube #im1 ", {
    opacity: 1,
    // duration:.1
  })

  tl.to("#cube", {
    width: `${28 * ctw}%`,
    height: `${cth *290}px`,
    delay: .1,
    ease: Expo.inOut

  })

  tl.to("#cube #im2", {
    opacity: 1,
    delay: -.1
    // duration:.8*2
  })

  tl.to("#cube", {
    width: `${45 * ctw}%`,
    height: `${cth * 25}vh`,
    delay: -.1 * 1,
    zIndex: 9,
    // dealy:1,
    ease: Expo.inOut
  })

  tl.to("#cube #im3", {
    opacity: 1,
  })

  tl.to("#cube", {
    width: `${28 * ctw}%`,
    height: `${cth * 33}vh`,
    duration: .5,
    delay: -.01
  })

  tl.to("#text2 h1", {
    y: -200,
    opacity: 0,
    dealy: .1
  })

  tl.to("#cube #im4", {
    opacity: 1,
    duration: .1
  })

  tl.to("#cube", {
    height: `${100 * cth}%`,
    width: `${ctw * 180}%`,  
    // scale: 1.1,
    ease: Circ.easeInOut,
    duration: .8,

    onComplete: function () {
      document.querySelector("#fs").style.display = "none"
      maintextanimation();

    },

  })

  tl.from("#single", {
    width: "0%",
    opacity: 0,
    duration: 2
  })

  tl.from(".child h1", {
    opacity: 0,
    delay: 0,
  })
}


function maintextanimation() {

  var h1 = document.querySelector(".text h1");

  var clutter = "";

  var temp = 0;


  for (var i = 0; i <= Math.floor(h1.textContent.length / 2); i++) {
    // console.log(i);
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  for (var i = Math.floor(h1.textContent.length / 2) - 1; i >= 0; i--) {
    // console.log(i);
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  document.querySelector(".container h1").innerHTML = clutter;

  document.querySelectorAll(".text span")
    .forEach(function (elem) {
      gsap.to(elem, {
        scrollTrigger: {
          scroller: "#main",
          trigger: ".text h1",
          start: "top 80%",
          // markers:true
        },
        y: 0,
        opacity: 1,
        ease: Expo.easeOut,
        duration: 1.5,
        delay: elem.dataset.delay * .1
      })
    })

}


abc();
navanimation();
lineanimation();
textanimation();
cubeanimation();


