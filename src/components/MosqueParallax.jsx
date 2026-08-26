import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import mainArchitecture from "../assets/mainArchitecture.png";
import sectionDrawing from "../assets/ogarchsect.png";
import floorPlan from "../assets/ogFloorPlan.png";
import sitePlan from "../assets/ogSitePlan.png";

export default function MosqueParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 18,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 18,
    mass: 0.5,
  });

  // Back layer = least movement
  const siteX = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const siteY = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);

  const floorX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const floorY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const sectionX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const sectionY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // Front layer = strongest movement
  const mainX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const mainY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  // Slight tilt for the entire main elevation
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        w-full
        max-w-[700px]
        aspect-[4/3]
        [perspective:1200px]
      "
    >
      {/* Site Plan — deepest layer */}
      <motion.img
        src={sitePlan}
        alt=""
        aria-hidden="true"
        style={{
          x: siteX,
          y: siteY,
          scale: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          m-auto
          w-[75%]
          opacity-[0.06]
        "
      />

      {/* Floor Plan */}
      <motion.img
        src={floorPlan}
        alt=""
        aria-hidden="true"
        style={{
          x: floorX,
          y: floorY,
          scale: 0.9,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          m-auto
          w-[82%]
          opacity-[0.10]
        "
      />

      {/* Secondary elevation */}
      <motion.img
        src={sectionDrawing}
        alt=""
        aria-hidden="true"
        style={{
          x: sectionX,
          y: sectionY,
          scale: 0.96,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          m-auto
          w-[88%]
          opacity-[0.16]
        "
      />

      {/* Main Architecture */}
      <motion.img
        src={mainArchitecture}
        alt="Original mosque architectural drawing"
        style={{
          x: mainX,
          y: mainY,
          rotateX,
          rotateY,
        }}
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          w-full
          object-contain
          drop-shadow-[0_24px_30px_rgba(11,61,46,0.12)]
          will-change-transform
        "
      />
    </div>
  );
}