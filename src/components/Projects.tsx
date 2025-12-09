import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { TiltCard } from './TiltCard';

export function Projects() {
  const projects = [
    {
      title: 'FindMyItem : Lost & Found Portal',
      category: 'Web app design',
      description: 'A lost and found portal designed for campus community to report and recover lost items quickly. Features smart categorization and notification system for seamless item recovery.',
      color: '#D4FF00',
      tools: ['Figma', 'User Research', 'Prototyping'],
      year: '2024',
      link: '#',
      github: 'https://github.com/Shreyanshdixit6206',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NTE2NTMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Health NEXUS : Medical App',
      category: 'Web Application',
      description: 'A Generic Medicine Delivery Application with a private Health Vault.',
      color: '#A8F5FF',
      tools: ['HTML/CSS/JS', 'FireBase', 'Figma'],
      year: '2024',
      link: '#',
      github: 'https://github.com/Shreyanshdixit6206',
      image: 'https://images.unsplash.com/photo-1580377968211-b6425102326b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1lZGljYWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY1MjI5OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Job Portal : A UI/UX Improvement',
      category: 'UI/UX Case Study',
      description: 'Complete redesign of a job portal website and view. Increased approach rate by improving user flow.',
      color: '#FF6B9D',
      tools: ['Figma', 'User Testing', 'Wireframing'],
      year: '2025',
      link: '#',
      github: 'https://github.com/Shreyanshdixit6206',
      image: 'https://images.unsplash.com/photo-1589936009537-bda4341d578f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1c2luZXNzJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTIyOTkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Crisper : Recipe Generator',
      category: 'Product Design',
      description: 'What\'s in my Fridge? Crisper: This is the ultimate "I have nothing to eat" solver. It combines AI trends with beautiful food imagery.',
      color: '#B4A7FF',
      tools: ['Figma', 'Vibe Coding', 'User Flows'],
      year: '2025',
      link: '#',
      github: 'https://github.com/Shreyanshdixit6206',
      image: 'https://images.unsplash.com/photo-1657641908545-592c2a8e3b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZvb2QlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjUyMjk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'SubTract : Subscription Manager & Canceller',
      category: 'Full Stack Project',
      description: 'Everyone hates wasting money on forgotten free trials. This project proves you can handle data, security, and user anxiety.',
      color: '#FFB74D',
      tools: ['React', 'Figma', 'FireBase'],
      year: '2025',
      link: '#',
      github: 'https://github.com/Shreyanshdixit6206',
      image: 'https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBwYXR0ZXJufGVufDF8fHx8MTc2NTE4MTEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Voya : Public Transit Companion for Tourists',
      category: 'Mobile Design Concept',
      description: 'Most transit apps are confusing. Designing one for a tourist demonstrates high-level empathy and UX thinking.',
      color: '#80CBC4',
      tools: ['Figma', 'Prototyping', 'User Research'],
      year: '2026',
      link: '#',
      github: 'https://github.com/Shreyanshdixit6206',
      image: 'https://images.unsplash.com/photo-1546932100-915939e4cf80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNpdHklMjBsaWdodHN8ZW58MXx8fHwxNzY1MjI5OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  return (
    <section className="py-32 px-6 bg-black" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl mb-6">
              FEATURED <span className="text-[#D4FF00]">PROJECTS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              A collection of projects showcasing my journey in UI/UX design and development. 
              Each project represents learning, experimentation, and growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <TiltCard className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer">
                {/* Image */}
                <div 
                  className="aspect-[4/3] relative overflow-hidden"
                >
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Color Overlay */}
                  <motion.div 
                    className="absolute inset-0 mix-blend-multiply"
                    style={{ backgroundColor: project.color }}
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
                    initial={{ opacity: 0, x: 8, y: -8 }}
                    whileHover={{ 
                      opacity: 1, 
                      x: 0, 
                      y: 0,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Github className="w-5 h-5 text-black" />
                  </motion.a>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">{project.category}</span>
                    <span className="text-white/50">{project.year}</span>
                  </div>
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool) => (
                      <motion.span 
                        key={tool}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10"
                        whileHover={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          scale: 1.05 
                        }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-6">
              Want to see more? Check out my GitHub and Figma Community for additional projects and experiments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                href="https://github.com/Shreyanshdixit6206"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.figma.com/@9930bf7d_38b0_4"
                className="px-8 py-4 bg-[#D4FF00] text-black rounded-full hover:bg-[#D4FF00]/90 transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View on Figma</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}