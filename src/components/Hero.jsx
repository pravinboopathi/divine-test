import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Hero = () => {
  return (
    <div className="px-6 bg-[#fafafc] md:px-12 md:pl-28 mt-4 md:mt-20 pt-12 md:flex">
      {/* Left */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-5xl md:mt-2 text-black font-semibold"
          style={{ lineHeight: '1.4' }}
        >
          Empower Your Future with <br />
          <span>
            Cutting-Edge <span className="text-[#453fe1]">Tech Education</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs md:text-base text-[#4f4f4f] mt-4 mb-3 md:mb-0 max-w-full"
        >
          At Divine Infotech, we offer expert-led tech courses to equip you with essential digital skills. Our programs, ranging from Fullstack Web Development to Digital Marketing, meet the evolving demands of the tech industry.
        </motion.p>
        <div className="md:gap-5 gap-3 flex flex-row mt-12 transition-all">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#453fe1] transition-all flex items-center justify-center hover:bg-transparent text-white border border-[#453fe1] hover:text-[#628ce9] py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl font-medium rounded-md"
          >
            <span className="flex items-center gap-2">
              Explore Courses <GoArrowUpRight className="text-2xl font-bold" />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md border transition-all text-[#453fe1] bg-[#efeef3] py-2 px-4 md:py-3 md:px-6 text-lg md:text-xl font-medium hover:border-[#8d6adb]"
          >
            Contact Us
          </motion.button>
        </div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 mt-10 md:mt-5 lg:pl-6 lg:pr-2"
      >
        <img src={Home} alt="Learning" className="md:h-[600px] lg:w-[1000px] lg:-mt-32" />
      </motion.div>
    </div>
  );
};

export default Hero;
