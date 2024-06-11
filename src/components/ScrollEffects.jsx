/* eslint-disable no-unused-vars */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

//SFX or Scroll Effects
const sfx = {
  timelineScrollerPosition: "75%",
  Init() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  },
  CreateGsapTimeline({ trigger, start, end, scrub, markers, toggleActions }) {
    if (scrub === undefined) scrub = true;
    return gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start || `top ${this.timelineScrollerPosition}`,
        end: end || `bottom ${this.timelineScrollerPosition}`,
        scrub: scrub,
        markers: markers || false,
        toggleActions: toggleActions || "play play reverse reverse",
      },
    });
  },
  SetEffect(className, callBackEffectFunction) {
    return document.querySelectorAll(className).forEach(callBackEffectFunction);
  },
  //Functions below can be used as callBackEffectFunction in SetEffect()
  TextAutoStagger(char) {
    this.CreateGsapTimeline({
      trigger: char,
      scrub: false,
      markers: false,
      toggleActions: "play play play play"
    }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        stagger: 0.3,
      }
    );
  },
  TextStagger(char) {
    this.CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );
  },
  ShapeShow(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
        zIndex: -1,
      },  
      {
        opacity: 1,
        scale: 1,
        zIndex: 0,
      }
    );
  },
  SectionOpen(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      markers: true,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        scaleY: 0,
        transformOrigin: 'bottom',
      },
      {
        scaleY: 1,
      }
    );
  },
  SectionClose(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,  
      markers: true,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        scaleY: 1,
        transformOrigin: 'top',
      },
      {
        scaleY: 0,
      }
    );
  },
};

export default sfx;

/*TEMPLATE: GSAP Scroll Animations
  useEffect(() => {
    //GSAP, SplitType
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll(".gsap");
    splitTypes.forEach((char, i) => {
      //Creates individual div elements with a class of "char", as children of each char element
      const text = new SplitType(char, { types: "chars" });

      // text.chars is where the effects will take place, 2nd argument are the effects
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true, //If true, tied to scroll position not time
          markers: false,
        },
        //Effects
        scaleY: 0, //FX: start from scaleY: value
        y: -20, //FX: start from y: value
        transformOrigin: 'top',
        //opacity: 0, //FX: start from opacity: value
        stagger: 0.1, //FX: The FX will delay base on stagger value
        duration: 1, //FX: If scrub is false, duration of time
      });

      //gsap.fromTo sample
      gsap.fromTo(
        text.chars,
        {
          color: fgClr, //From color fgClr
          scaleY: 0,
          y: -20,
          transformOrigin: 'top',
        },
        { 
          color: primaryClr, //To color primaryClr
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: false, //If true, tied to scroll position not time
            markers: false,
            toggleActions: 'play play reverse reverse' //'play play reverse reverse' makes scrolling up return back From color fgClr
          },
          scaleY: 1,
          y: 0,
        }
      );

      let tl = gsap.timeline({
        scrollTrigger:{
          trigger: '.gsap',
          start: 'top center', //start effect related to viewport at '<marker start position> <marker scroller-start position>'
          end: '900% center', //complete effect related to viewport at '<marker end position> <marker scroller-end position>'
          scrub: true, //How to activate effect, if true then use scroll, if false then use time
          markers: true, //Shows scroller-start & scroller-end in screen
          //toggleActions: 'play play reverse reverse' //onEnter onLeave onEnterBack onLeaveBack
        },
      });
  
      tl.to('.gsap', {
        x: 800,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: char,
            start: "-500% center",
            end: "bottom center",
            scrub: false,
            markers: true,
          },
        })
        .fromTo(
          text.chars,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 4,
            stagger: 0.4,
          }
        );

    });
  });
  //*/

