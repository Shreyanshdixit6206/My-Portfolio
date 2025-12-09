import { useEffect } from 'react';

export function ConsoleArt() {
  useEffect(() => {
    // ASCII art and messages for console
    console.log('%c👋 Welcome to Shreyansh\'s Portfolio!', 'color: #D4FF00; font-size: 24px; font-weight: bold;');
    
    console.log('%c', 'font-size: 1px; padding: 100px 200px; background: url(https://i.imgur.com/KlMKz9h.png) no-repeat; background-size: contain;');
    
    console.log('%c🎌 Hidden Easter Eggs Found!', 'color: #A8F5FF; font-size: 16px; font-weight: bold;');
    console.log('%cType these codes to unlock anime powers:', 'color: #fff; font-size: 14px;');
    console.log('%c  🍥 Type "naruto" → Rasengan Attack!', 'color: #FF6B35; font-size: 12px;');
    console.log('%c  ⚔️  Type "bankai" → Sword Slash!', 'color: #00D4FF; font-size: 12px;');
    console.log('%c  👤 Type "arise" → Shadow Army!', 'color: #A855F7; font-size: 12px;');
    console.log('%c  🎯 Triple-click anywhere → Random anime effect!', 'color: #FF6B9D; font-size: 12px;');
    console.log('%c  🎁 Click the SD logo in footer → Secret message!', 'color: #FFB74D; font-size: 12px;');
    
    console.log('%c\n📝 Fun Facts:', 'color: #D4FF00; font-size: 14px; font-weight: bold;');
    console.log('%c  • This portfolio has 3D tilt effects on all cards', 'color: #fff; font-size: 11px;');
    console.log('%c  • Floating orbs use procedural animations', 'color: #fff; font-size: 11px;');
    console.log('%c  • Custom cursor with chakra trail effect', 'color: #fff; font-size: 11px;');
    console.log('%c  • All animations powered by Motion (Framer Motion)', 'color: #fff; font-size: 11px;');
    
    console.log('%c\n💻 Built with:', 'color: #A8F5FF; font-size: 14px; font-weight: bold;');
    console.log('%c  React ⚛️  •  TypeScript 📘  •  Tailwind CSS 🎨  •  Motion ✨', 'color: #fff; font-size: 11px;');
    
    console.log('%c\n🚀 Interested in hiring or collaborating?', 'color: #FF6B9D; font-size: 14px; font-weight: bold;');
    console.log('%c  Scroll down to the contact section or reach out on LinkedIn!', 'color: #fff; font-size: 11px;');
    
    console.log('%c\n⚡ Pro Tip: This site is fully responsive - try resizing your browser!', 'color: #FFB74D; font-size: 12px; font-style: italic;');

    // Fun console commands
    (window as any).unlockAllEasterEggs = () => {
      console.log('%c🎉 CHEAT CODE ACTIVATED! 🎉', 'color: #D4FF00; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(212, 255, 0, 0.5);');
      console.log('%cAll Easter eggs revealed! Keep exploring the site to trigger them.', 'color: #A8F5FF; font-size: 14px;');
      console.log('%c🍥 Naruto Mode: Type "naruto"', 'color: #FF6B35; font-size: 12px;');
      console.log('%c⚔️  Bleach Mode: Type "bankai"', 'color: #00D4FF; font-size: 12px;');
      console.log('%c👤 Solo Leveling Mode: Type "arise"', 'color: #A855F7; font-size: 12px;');
    };

    console.log('%c\n🎮 Try typing: unlockAllEasterEggs() in the console!', 'color: #B4A7FF; font-size: 12px; font-style: italic;');
  }, []);

  return null;
}
