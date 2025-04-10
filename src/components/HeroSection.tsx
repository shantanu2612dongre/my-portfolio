"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 text-white relative overflow-hidden"
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
          <span className="block mb-2">Shantanu Dongre</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-400 to-fuchsia-500">
            I build things for the web.
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mt-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Full-stack developer with a product mindset. I craft accessible,
          user-first experiences and scalable web apps using modern technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
         <Button
  asChild
  size="lg"
  className="rounded-md bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 text-white shadow-md hover:shadow-lg"
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
  className="rounded-md border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-md group"
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