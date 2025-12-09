import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { Linkedin, Github, Instagram, Phone, Copy, ExternalLink, MessageCircle } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shreyanshdixit6206@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shreyanshdixit6206@gmail.com',
      action: 'Copy Email',
      color: '#A8F5FF',
      link: 'mailto:shreyanshdixit6206@gmail.com',
      onClick: handleCopyEmail
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 XXXXX XXXXX',
      action: 'Message on WhatsApp',
      color: '#25D366',
      link: 'https://wa.me/919260956206',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@shreyanshdixit',
      action: 'Connect on LinkedIn',
      color: '#0A66C2',
      link: 'https://www.linkedin.com/in/shreyansh-dixit-a70717355/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@shreyanshdixit',
      action: 'View Projects',
      color: '#D4FF00',
      link: 'https://github.com/Shreyanshdixit6206',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@shreyansh.dixit',
      action: 'Follow on Instagram',
      color: '#E4405F',
      link: 'https://www.instagram.com/designer.shreyansh/',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@shreyanshdixit',
      action: 'Message on Telegram',
      color: '#0088CC',
      link: 'https://t.me/shreyanshdixit',
    }
  ];

  return (
    <section className="py-20 sm:py-32 px-6 bg-black" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            LET&apos;S <span className="text-[#D4FF00]">CONNECT</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Have a project in mind or just want to chat? Pick your preferred way to reach out. 
            I&apos;m always excited to collaborate and create something amazing together!
          </p>
        </div>

        {/* Interactive Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                onClick={(e) => {
                  if (method.onClick) {
                    e.preventDefault();
                    method.onClick();
                  }
                }}
                target={method.onClick ? undefined : '_blank'}
                rel={method.onClick ? undefined : 'noopener noreferrer'}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: method.color }}
                />
                
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: method.color + '20' }}
                >
                  <Icon className="w-7 h-7" style={{ color: method.color }} />
                </div>

                {/* Content */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl">{method.label}</h3>
                  <p className="text-white/50 text-sm break-all">{method.value}</p>
                </div>

                {/* Action Button */}
                <div className="flex items-center gap-2 text-sm" style={{ color: method.color }}>
                  <span className="group-hover:underline">{method.action}</span>
                  {method.onClick ? (
                    <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                  ) : (
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </div>

                {/* Copy Confirmation */}
                {method.onClick && copied && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#A8F5FF] text-black rounded-full text-xs animate-bounce">
                    Copied!
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Additional Info Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#D4FF00]/10 via-transparent to-[#A8F5FF]/10 border border-white/10 rounded-3xl p-8 md:p-12 mt-12 sm:mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4">Availability</h3>
              <p className="text-white/60 mb-2">
                <span className="text-[#D4FF00]">●</span> Open to opportunities
              </p>
              <p className="text-white/60 mb-2">
                Available for internships & freelance projects
              </p>
              <p className="text-white/60">
                Response time: Within 24-48 hours
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Let&apos;s Build Together</h3>
              <p className="text-white/60 mb-4">
                Whether it&apos;s a startup idea, design challenge, or collaborative project - 
                I&apos;m always eager to explore new possibilities.
              </p>
              <a 
                href="https://drive.google.com/file/d/1pgNs5yBLvlE2nDOxT_tvyIRAjiHIgy20/view?usp=sharing" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Download Resume</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">Or find me on</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Behance', url: 'https://www.behance.net/shreyanshdixit' },
              { name: 'Dribbble', url: 'https://dribbble.com/shreyansh-dixit' },
              { name: 'Pinterest', url: 'https://in.pinterest.com/shreyanshdixit6206/' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}