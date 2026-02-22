import { ASSETS } from "@/constants/data";
import { MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);

  const scale = useTransform(scrollYProgress, [0.1, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0.1, 1], [0, 800]);

  return (
    <motion.section
      id="about"
      className="relative h-screen top-0 flex flex-col w-full overflow-hidden py-20 justify-center"
      style={{
        background:
          "linear-gradient(176deg, rgba(33, 50, 92, 1) 16%, rgba(15, 23, 42, 1) 114%)",
        opacity,
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:justify-center lg:gap-24">
        <motion.div
          className="relative h-[350px] w-[280px] overflow-hidden rounded-[200px] md:h-[450px] md:w-[350px]"
          style={{ scale, translateY }}
        >
          <Image
            src={ASSETS.profile}
            alt="Raka's profile photo"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 rounded-[200px] mix-blend-soft-light"
            style={{
              background:
                "linear-gradient(170deg, rgba(33, 50, 92, 0.11) 16%, rgba(15, 23, 42, 0.11) 114%)",
            }}
          />
        </motion.div>
        <motion.div
          className="max-w-xl text-center lg:text-left"
          style={{ scale, translateY }}
        >
          <h2 className="font-stint text-4xl text-slate-50 md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="font-pacifico text-slate-400">Raka!</span>
          </h2>
          <div className="mt-6 space-y-4 font-crimson text-lg leading-relaxed tracking-wider text-white md:text-xl">
            <p>
              I&apos;m a fullstack developer who enjoys building applications
              (web, mobile, and desktop) from the ground up, from shaping ideas
              and system design to deployment. I&apos;m passionate about turning
              concepts into real-world applications.
            </p>

            <p>
              I care about system design, clean architecture, and security, and
              I enjoy working across the stack — from backend logic to frontend
              experience and deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
