import "./styles/techStack.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TechStackCard from "../components/TechStackCard";

// Using wheel events instead of ScrollTrigger to control the scrub

const cardData = [
  {
    heading: "Frontend Development",
    description:
      "Expert in building responsive and dynamic user interfaces with modern web technologies.",
    stacks: [
      "HTML",
      "JavaScript",
      "TypeScript",
      "CSS / Sass / Tailwind / Styled Components",
      "React.js",
      "Next.js",
      "EJS",
      "jQuery",
    ],
  },
  {
    heading: "Backend & Database",
    description:
      "Skilled in developing robust server-side applications and managing databases.",
    stacks: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "WebSocket",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
    ],
  },
  {
    heading: "Blockchain & Smart Contracts",
    description:
      "Experienced in building decentralized applications and smart contracts.",
    stacks: ["Motoko", "Solidity", "Ethereum (Smart Contracts)"],
  },
  {
    heading: "Animation, Motion, 3D & Design",
    description:
      "Proficient in creating engaging animations, interactive motion designs, and modern design prototypes.",
    stacks: [
      "GSAP",
      "Framer Motion",
      "React Three Fiber",
      "React Drei",
      "Figma",
      "Adobe Illustrator",
    ],
  },
];

const TechStack = () => {
  const techStackBGRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const spacing = 0.2;
    const snapTime = gsap.utils.snap(spacing);
    const cards = cardsRef.current;
    gsap.set(cards, { xPercent: 200, opacity: 0, scale: 0 });

    // Define the animation for one card
    const animateFunc = (element) => {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 200 },
        {
          xPercent: -200,
          duration: 1,
          ease: "none",
          immediateRender: false,
        },
        0
      );
      return tl;
    };

    // Build a seamless loop by concatenating three copies of the animations
    const buildSeamlessLoop = (items, spacing, animateFunc) => {
      let rawSequence = gsap.timeline({ paused: true });
      let seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          // workaround for a rare edge-case
          if (this._time === this._dur) {
            this._tTime += this._dur - 0.01;
          }
        },
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 100);
        },
      });
      let cycleDuration = spacing * items.length;
      let dur;

      // Create three copies of the animations for seamless looping
      items
        .concat(items)
        .concat(items)
        .forEach((item, i) => {
          let anim = animateFunc(items[i % items.length]);
          rawSequence.add(anim, i * spacing);
          dur ||= anim.duration();
        });

      seamlessLoop.fromTo(
        rawSequence,
        { time: cycleDuration + dur / 2 },
        { time: "+=" + cycleDuration, duration: cycleDuration, ease: "none" }
      );
      return seamlessLoop;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);

    // Use a playhead object and a targetOffset variable.
    // targetOffset is updated on wheel events, and we animate playhead.offset toward it.
    let targetOffset = seamlessLoop.duration() / 2;
    const playhead = { offset: targetOffset };
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

    // Function to animate the playhead offset to the current targetOffset
    const animatePlayhead = () => {
      gsap.to(playhead, {
        offset: targetOffset,
        duration: 0.5,
        ease: "power3",
        onUpdate() {
          seamlessLoop.time(wrapTime(playhead.offset));
        },
      });
    };

    // Handle wheel events to update the targetOffset and animate the playhead.
    // Adjust the multiplier (0.005) to change sensitivity.
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.0025;
      targetOffset += delta;
      // Optionally, uncomment the following line to snap the target offset:
      targetOffset = snapTime(targetOffset);
      animatePlayhead();
    };

    const techStackBG = techStackBGRef.current;

    // Attach the wheel listener when the pointer enters and remove on leave
    const handleMouseEnter = () => {
      techStackBG.addEventListener("wheel", handleWheel, { passive: false });
    };

    const handleMouseLeave = () => {
      techStackBG.removeEventListener("wheel", handleWheel);
    };

    techStackBG.addEventListener("mouseenter", handleMouseEnter);
    techStackBG.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      techStackBG.removeEventListener("mouseenter", handleMouseEnter);
      techStackBG.removeEventListener("mouseleave", handleMouseLeave);
      techStackBG.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="techStack">
      <div className="techStackBG" ref={techStackBGRef}>
        <ul className="cards">
          {cardData.map((item, index) => (
            <li key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <TechStackCard data={item} />
            </li>
          ))}
          {/* {cardData.map((item, index) => (
            <TechStackCard
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data={item}
            />
          ))} */}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
