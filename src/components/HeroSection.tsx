"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const elementsTimer = setTimeout(() => {
      setShowElements(true);
    }, 5000);

    return () => {
      clearTimeout(elementsTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Modern Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Desktop - Single Line */}
      <div className="relative z-20 w-full hidden md:block">
        <div className="w-full max-w-6xl mx-auto" style={{ height: "200px" }}>
          <TextHoverEffect text="Anir Jung Thapa" duration={4} />
        </div>
      </div>

      {/* Mobile - Two Lines */}
      <div className="relative z-20 w-full block md:hidden">
        <div
          className="w-full max-w-sm mx-auto mb-4"
          style={{ height: "120px" }}
        >
          <TextHoverEffect text="Anir Jung" duration={3} />
        </div>
        <div className="w-full max-w-sm mx-auto" style={{ height: "120px" }}>
          <TextHoverEffect text="Thapa" duration={2} />
        </div>
      </div>

      {/* Animated Elements - appear after name drawing */}
      {showElements && (
        <>
          {/* Subtitle */}
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-gray-400 mb-2">
              Aspiring Software Engineer
            </p>
            <p className="text-sm md:text-base text-gray-500 max-w-md lg:max-w-lg">
              Passionate about creating innovative solutions and building
              amazing digital experiences
            </p>
          </motion.div>

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-16 md:top-32 left-8 md:left-32 w-12 h-12 md:w-16 md:h-16 border-2 border-gray-600"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.div
            className="absolute top-12 md:top-24 right-8 md:right-40 w-10 h-10 md:w-12 md:h-12 border-2 border-gray-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-500 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 md:h-3 bg-gray-500 rounded-full mt-1 md:mt-2"
              />
            </motion.div>
            <p className="text-xs text-gray-500 mt-2">Scroll Down</p>
          </motion.div>
        </>
      )}
    </section>
  );
}
