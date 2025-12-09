import { Github, Linkedin, Twitter, Dribbble, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Footer() {
  const [secretRevealed, setSecretRevealed] = useState(false);
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shreyansh-dixit-a70717355', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Shreyanshdixit6206', label: 'GitHub' },
    { icon: Dribbble, href: 'https://dribbble.com/shreyansh-dixit', label: 'Dribbble' },
    { icon: Instagram, href: 'https://www.instagram.com/designer.shreyansh/', label: 'Instagram' },
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: ['Projects', 'Experience', 'Contact', 'Resume'],
    },
    {
      title: 'Projects',
      links: ['Campus Connect', 'EduTrack', 'Study Buddy', 'View All'],
    },
    {
      title: 'Resources',
      links: ['Design Process', 'Case Studies', 'GitHub', 'Behance'],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Secret anime message
  const handleSecretClick = () => {
    setSecretRevealed(!secretRevealed);
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                onClick={handleSecretClick}
                title="Click me for a secret!"
              >
                <span className="text-black font-bold text-sm">SD</span>
              </motion.div>
              <span className="text-xl tracking-wider">Shreyansh Dixit</span>
            </div>
            <p className="text-white/60 max-w-sm">
              A passionate UI/UX designer and developer dedicated to creating meaningful digital experiences. 
              Currently studying Computer Science and always learning.
            </p>
            
            {/* Secret Anime Message */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: secretRevealed ? 'auto' : 0,
                opacity: secretRevealed ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500/20 via-cyan-500/20 to-purple-500/20 border border-white/20 rounded-xl p-4 space-y-2">
                <p className="text-sm text-white/90">
                  🍥 <span className="text-orange-400">Naruto</span>: Never give up on your dreams!
                </p>
                <p className="text-sm text-white/90">
                  ⚔️ <span className="text-cyan-400">Bleach</span>: Protect what matters most
                </p>
                <p className="text-sm text-white/90">
                  👤 <span className="text-purple-400">Solo Leveling</span>: Level up every day
                </p>
                <p className="text-xs text-white/50 mt-2 italic">
                  💡 Tip: Try typing &quot;naruto&quot;, &quot;bankai&quot;, or &quot;arise&quot; on the page!
                </p>
              </div>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D4FF00] hover:border-[#D4FF00] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, colIndex) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
            >
              <h3 className="text-sm tracking-wider mb-4 text-white/90">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 SHREYANSH DIXIT. Built with React & Tailwind CSS.
          </p>
          
          <div className="flex items-center gap-6">
            <p className="text-white/50 text-sm">
              Made with ❤️ by a Creative Student
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#A8F5FF] hover:border-[#A8F5FF] hover:text-black transition-all duration-300"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}