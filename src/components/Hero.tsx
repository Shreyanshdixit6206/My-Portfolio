import { ArrowUpRight, Figma, Code } from 'lucide-react';
import profileImage from 'figma:asset/256c08e0effef1e9e605a591b8a76a9ae2ce2db2.png';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Image */}
          <motion.div 
            className="relative lg:pt-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <TiltCard className="relative w-full h-[350px] sm:h-[450px] group">
                {/* Image with subtle gradient mask for blending */}
                <div className="relative w-full h-full">
                  <motion.img 
                    src={profileImage} 
                    alt="Shreyansh Dixit"
                    className="w-full h-full object-cover object-top rounded-3xl"
                    style={{
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                
                {/* Floating accent lines - hidden on mobile */}
                <motion.div 
                  className="hidden sm:block absolute top-1/4 -left-8 w-16 h-0.5 bg-gradient-to-r from-transparent to-[#D4FF00] opacity-60"
                  animate={{
                    x: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="hidden sm:block absolute bottom-1/3 -right-12 w-20 h-0.5 bg-gradient-to-l from-transparent to-[#A8F5FF] opacity-60"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </TiltCard>
              
              {/* Bold Tagline */}
              <motion.div 
                className="mt-6 sm:mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl">
                  <span className="text-[#D4FF00]">Designing</span> experiences, 
                  <span className="text-[#A8F5FF]"> Building</span> futures
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <motion.div 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight">
                UI/UX DESIGNER
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/40 tracking-tight leading-tight">
                SHREYANSH DIXIT
              </h2>
              <p className="text-[#A8F5FF] tracking-widest text-sm sm:text-base">— Computer Science Student</p>
            </motion.div>

            <motion.p 
              className="text-white/70 text-base sm:text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Passionate about creating intuitive digital experiences. Currently exploring the intersection of design and development while pursuing my degree.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.a 
                href="#contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Skill Cards */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4 pt-4 sm:pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TiltCard className="bg-[#D4FF00] text-black p-5 sm:p-6 rounded-2xl space-y-3 cursor-pointer">
                <Figma className="w-7 h-7 sm:w-8 sm:h-8" />
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm tracking-wide opacity-80">UI/UX DESIGN, PROTOTYPING, USER RESEARCH, FIGMA, ADOBE XD</p>
                </div>
              </TiltCard>

              <TiltCard className="bg-[#A8F5FF] text-black p-5 sm:p-6 rounded-2xl space-y-3 cursor-pointer">
                <Code className="w-7 h-7 sm:w-8 sm:h-8" />
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm tracking-wide opacity-80">C, Java, SQL, HTML, VIBE CODING</p>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}