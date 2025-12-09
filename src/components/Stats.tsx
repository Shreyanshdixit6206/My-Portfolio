import { Briefcase, FolderGit2, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export function Stats() {
  const stats = [
    {
      icon: Briefcase,
      number: '2+',
      label: 'Years Experience',
      color: '#D4FF00',
      description: 'Designing & Building'
    },
    {
      icon: FolderGit2,
      number: '10+',
      label: 'Projects Completed',
      color: '#A8F5FF',
      description: 'UI/UX & Development'
    },
    {
      icon: Award,
      number: '2+',
      label: 'Certifications',
      color: '#FF6B9D',
      description: 'Industry Recognized'
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4FF00]/5 rounded-full blur-3xl -translate-x-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#A8F5FF]/5 rounded-full blur-3xl translate-x-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <TiltCard className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer">
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  style={{ backgroundColor: stat.color + '20' }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 3,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon 
                    className="w-7 h-7 sm:w-8 sm:h-8" 
                    style={{ color: stat.color }}
                  />
                </motion.div>

                {/* Number */}
                <div className="mb-2 sm:mb-3">
                  <motion.h3 
                    className="text-4xl sm:text-5xl md:text-6xl tracking-tight"
                    style={{ 
                      color: stat.color,
                      textShadow: `0 0 30px ${stat.color}40`
                    }}
                    whileHover={{
                      scale: 1.05,
                      textShadow: `0 0 40px ${stat.color}60`
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                </div>

                {/* Label */}
                <p className="text-lg sm:text-xl mb-1 sm:mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-white/50 text-xs sm:text-sm group-hover:text-white/70 transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${stat.color}10, transparent 70%)`
                  }}
                />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom decorative line */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4">
            <motion.div 
              className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#D4FF00]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-white/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}