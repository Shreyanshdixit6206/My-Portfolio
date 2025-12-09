import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export function Experience() {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science Engineering',
      school: 'Sharda University',
      period: '2022 - 2026',
      description: 'Focusing on Human-Computer Interaction, Software Engineering, and Web Development.',
    },
  ];

  const experience = [
    {
      title: 'Flutter Developer Intern',
      company: 'Aliter Buisness Solution',
      period: 'Summer 2024',
      description: 'Redesigned Flutter mobile app interface, conducted user research with 50+ participants, and created a comprehensive design system.',
      achievements: [
        'Improved user engagement by 35%',
        'Designed 10+ screens and components',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'InternPE',
      period: 'Summer 2025',
      description: 'Working with local businesses and startups to create responsive websites and landing pages.',
      achievements: [
        'Completed 5+ client projects',
        'Built long-term relationships with 5 recurring clients',
      ],
    },

  ];

  const achievements = [
    
    {
      title: 'Certified',
      description: 'Web Developer From Udemy',
      icon: GraduationCap,
    },
    {
      title: 'Certified',
      description: 'UI/UX Essentials from Udemy',
      icon: GraduationCap,
    },
    {
      title: 'Campus Projects',
      description: 'Contributor to 3+ college campus design projects',
      icon: Code,
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0A0A0A]" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl mb-6">
              EXPERIENCE & <span className="text-[#A8F5FF]">EDUCATION</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              My journey in design and development, from classroom learning to real-world projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Education & Achievements */}
          <div className="space-y-8">
            {/* Education */}
            <ScrollReveal delay={0.1}>
              <TiltCard className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-[#D4FF00]/20 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <GraduationCap className="w-6 h-6 text-[#D4FF00]" />
                  </motion.div>
                  <h3 className="text-2xl">Education</h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg">{edu.degree}</h4>
                    <p className="text-white/70">{edu.school}</p>
                    <p className="text-[#A8F5FF] text-sm">{edu.period}</p>
                    <p className="text-white/60 text-sm">{edu.description}</p>
                    <p className="text-[#D4FF00] text-sm">{edu.gpa}</p>
                  </div>
                ))}
              </TiltCard>
            </ScrollReveal>

            {/* Achievements */}
            <ScrollReveal delay={0.2}>
              <TiltCard className="bg-gradient-to-br from-[#D4FF00]/10 to-[#A8F5FF]/10 border border-white/10 rounded-3xl p-8 space-y-6 cursor-pointer">
                <h3 className="text-2xl mb-4">Achievements</h3>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <achievement.icon className="w-5 h-5 text-[#A8F5FF]" />
                      </motion.div>
                      <div>
                        <h4 className="text-sm mb-1">{achievement.title}</h4>
                        <p className="text-white/60 text-sm">{achievement.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column - Experience */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-[#A8F5FF]/20 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase className="w-6 h-6 text-[#A8F5FF]" />
                </motion.div>
                <h3 className="text-2xl">Work Experience</h3>
              </div>
            </ScrollReveal>

            {experience.map((exp, index) => (
              <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                <TiltCard className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl mb-1">{exp.title}</h4>
                      <p className="text-white/70">{exp.company}</p>
                    </div>
                    <span className="text-[#A8F5FF] text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-white/60 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-white/50">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="text-sm text-white/70 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-[#D4FF00] mt-1">→</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <ScrollReveal delay={0.3}>
          <TiltCard className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 cursor-pointer">
            <h3 className="text-3xl mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm text-white/50 mb-4 tracking-wider">DESIGN TOOLS</h4>
                <div className="space-y-2">
                  {['Figma', 'Adobe XD', 'Adobe Photoshop', 'Canva', 'PowerPoint'].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      className="text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, color: '#D4FF00' }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm text-white/50 mb-4 tracking-wider">DEVELOPMENT</h4>
                <div className="space-y-2">
                  {['HTML/CSS', 'C/Java', 'SQL', 'Vibe Coding', 'Git/GitHub'].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      className="text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, color: '#A8F5FF' }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm text-white/50 mb-4 tracking-wider">SOFT SKILLS</h4>
                <div className="space-y-2">
                  {['User Research', 'Communication', 'Team Collaboration', 'Problem Solving', 'Time Management'].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      className="text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, color: '#FF6B9D' }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}