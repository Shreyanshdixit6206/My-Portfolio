import { Lightbulb, Users, Palette, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export function Approach() {
  const principles = [
    {
      icon: Users,
      title: 'User-Centered',
      description: 'I believe great design starts with understanding users. Every decision is backed by research and empathy.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Design is about solving problems creatively. I focus on finding elegant solutions to complex challenges.'
    },
    {
      icon: Palette,
      title: 'Visual Storytelling',
      description: 'Every interface tells a story. I craft experiences that are not just functional but also emotionally engaging.'
    },
    {
      icon: Code,
      title: 'Design + Development',
      description: 'Understanding code makes me a better designer. I create designs that are beautiful and technically feasible.'
    },
  ];

  const skills = [
    'User Research',
    'Wireframing',
    'Prototyping',
    'Usability Testing',
    'Design Systems',
    'Responsive Design',
    'Front-end Development',
    'Accessibility',
  ];

  return (
    <section className="py-20 sm:py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              MY APPROACH TO <span className="text-[#A8F5FF]">UI/UX DESIGN</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg">
              I believe good design is invisible. It&apos;s about creating experiences that feel natural, 
              intuitive, and delightful—where users can focus on their goals, not the interface.
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill} delay={index * 0.05} direction="up">
                  <motion.span 
                    className="px-5 py-2 bg-white/5 border border-white/20 rounded-full text-sm cursor-pointer"
                    whileHover={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Design Principles */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 0.1}>
              <TiltCard 
                className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  index === 0 
                    ? 'bg-[#D4FF00] text-black border-[#D4FF00]' 
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/5 hover:border-white/20'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <principle.icon 
                    className={`w-10 h-10 mb-6 ${
                      index === 0 ? 'text-black' : 'text-[#A8F5FF]'
                    }`} 
                  />
                </motion.div>
                <h3 className="text-2xl mb-3">{principle.title}</h3>
                <p className={index === 0 ? 'text-black/80' : 'text-white/70'}>
                  {principle.description}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Process */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            {/* Background gradient */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-[#A8F5FF]/5 rounded-full blur-3xl"
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
            
            <h3 className="text-3xl mb-8 relative z-10">Design Process</h3>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Research', desc: 'Understanding users and their needs' },
                { step: '02', title: 'Ideate', desc: 'Brainstorming and sketching solutions' },
                { step: '03', title: 'Design', desc: 'Creating high-fidelity mockups' },
                { step: '04', title: 'Test', desc: 'Validating with real users' },
              ].map((phase, index) => (
                <motion.div 
                  key={phase.step} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="text-6xl text-[#D4FF00]/20 mb-4"
                    whileHover={{ 
                      color: 'rgba(212, 255, 0, 0.4)',
                      scale: 1.1 
                    }}
                  >
                    {phase.step}
                  </motion.div>
                  <h4 className="text-xl mb-2">{phase.title}</h4>
                  <p className="text-white/60 text-sm">{phase.desc}</p>
                  {index < 3 && (
                    <motion.div 
                      className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-white/10"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}