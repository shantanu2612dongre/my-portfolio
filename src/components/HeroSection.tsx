"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 text-white relative overflow-hidden"
      style={{ backgroundImage: "url('/projects/background.png')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-lg font-medium mb-3 text-white drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          👋 Hi, I'm
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="block mb-3 text-black">Shantanu Dongre</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">
  Building products for human.
</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-black/90 max-w-2xl mx-auto mt-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Product Manager with a developer mindset. I craft accessible,user-first experiences and scalable web apps using modern technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
         <Button
  asChild
  variant="outline"
  size="lg"
  className=" w-full px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-[#10d09d] to-[#2cf393] hover:from-[#2cf393] hover:to-[#10d09d] transition-all duration-300 text-black shadow-md hover:shadow-lg"
>
  <a href="#projects" className="flex items-center gap-2">
    View My Projects
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</Button>

<Button
  variant="outline"
  size="lg"
  asChild
  className=" w-full px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-[#10d09d] to-[#2cf393] hover:from-[#2cf393] hover:to-[#10d09d] transition-all duration-300 text-black shadow-md hover:shadow-lg"
>
  <a href="#contact" className="flex items-center gap-2">
    Contact Me
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;