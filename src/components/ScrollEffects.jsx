/* eslint-disable no-unused-vars */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

//SFX or Scroll Effects
const sfx = {
  timelineScrollerPosition: "60%",
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
  AutoStaggerText(char) {
    this.CreateGsapTimeline({
      trigger: char,
      scrub: false,
      markers: false,
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
  StaggerText(char) {
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
        rotate: 360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
        zIndex: -0,
      }
    );
  },
  FadeInText(char) {
    this.CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  },
  ShapeLeftToRight(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: -360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );
  },
  StaggerTextRightToLeft(char) {
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
  ShapeRightToLeft(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: 360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );
  },
  StaggerTextLeftToRight(char) {
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
  StaggerTextFromY(char) {
    this.CreateGsapTimeline({ trigger: char, markers: false }).fromTo(
      new SplitType(char, { types: "chars" }).chars,
      {
        opacity: 0,
        transformOrigin: "top",
        y: -20,
      },
      {
        opacity: 1,
        stagger: 0.5,
        y: 0,
      }
    );
  },
  ShapeShowCenter(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      end: `center ${this.timelineScrollerPosition}`,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        rotate: 360,
        scale: 0,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );
  },
  OpenPage(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      //end: `center ${this.timelineScrollerPosition}`,
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

  ClosePage(elem) {
    this.CreateGsapTimeline({
      trigger: elem.parentElement,
      //start: `center ${this.timelineScrollerPosition}`,   
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
