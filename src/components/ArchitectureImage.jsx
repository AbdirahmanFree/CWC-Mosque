import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ArchitectureImage({ src }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const shadowX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const shadowY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

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
    <section
      className="flex w-full justify-center lg:w-1/2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="
          relative
          w-full
          max-w-[650px]
          [perspective:1400px]
        "
      >
        {/* Far depth layer */}
        <motion.img
          src={src}
          alt=""
          aria-hidden="true"
          style={{
            x: shadowX,
            y: shadowY,
            scale: 0.98,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            w-full
            opacity-[0.05]
            blur-[4px]
          "
        />

        {/* Mid depth layer */}
        <motion.img
          src={src}
          alt=""
          aria-hidden="true"
          style={{
            x: useTransform(smoothX, [-0.5, 0.5], [-4, 4]),
            y: useTransform(smoothY, [-0.5, 0.5], [-3, 3]),
            scale: 1.01,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            w-full
            opacity-[0.08]
            blur-[1px]
          "
        />

        {/* Main architecture */}
        <motion.img
          src={src}
          alt="Original mosque architectural drawing"
          style={{
            x: imageX,
            y: imageY,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            relative
            z-10
            w-full
            object-contain
            drop-shadow-[0_24px_35px_rgba(11,61,46,0.14)]
            will-change-transform
          "
        />
      </div>
    </section>
  );
}