import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimeEasterEggs() {
  const [activeEgg, setActiveEgg] = useState<string | null>(null);
  const [shadowArmy, setShadowArmy] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [discoveredEggs, setDiscoveredEggs] = useState<Set<string>>(new Set());

  // Konami code variations for different anime
  const codes = {
    naruto: ['n', 'a', 'r', 'u', 't', 'o'], // Type "naruto"
    bleach: ['b', 'a', 'n', 'k', 'a', 'i'], // Type "bankai"
    solo: ['a', 'r', 'i', 's', 'e'], // Type "arise"
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.key.toLowerCase()].slice(-6);
      setKeySequence(newSequence);

      // Check for Naruto code
      if (newSequence.join('') === codes.naruto.join('')) {
        triggerNarutoEgg();
        setKeySequence([]);
      }
      // Check for Bleach code
      else if (newSequence.join('') === codes.bleach.join('')) {
        triggerBleachEgg();
        setKeySequence([]);
      }
      // Check for Solo Leveling code
      else if (newSequence.join('') === codes.solo.join('')) {
        triggerSoloLevelingEgg();
        setKeySequence([]);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [keySequence]);

  // Hidden click zones on profile image
  useEffect(() => {
    const handleTripleClick = () => {
      const eggs = ['naruto', 'bleach', 'solo'];
      const randomEgg = eggs[Math.floor(Math.random() * eggs.length)];
      
      if (randomEgg === 'naruto') triggerNarutoEgg();
      else if (randomEgg === 'bleach') triggerBleachEgg();
      else if (randomEgg === 'solo') triggerSoloLevelingEgg();
    };

    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;

    const handleClick = (e: MouseEvent) => {
      clickCount++;
      if (clickCount === 3) {
        handleTripleClick();
        clickCount = 0;
      }
      
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 500);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      clearTimeout(clickTimer);
    };
  }, []);

  const triggerNarutoEgg = () => {
    setActiveEgg('naruto');
    setDiscoveredEggs(prev => new Set(prev).add('naruto'));
    setTimeout(() => setActiveEgg(null), 4000);
    
    // Console message
    console.log('%c🍥 Believe it! Dattebayo! 🍥', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
  };

  const triggerBleachEgg = () => {
    setActiveEgg('bleach');
    setDiscoveredEggs(prev => new Set(prev).add('bleach'));
    setTimeout(() => setActiveEgg(null), 4000);
    
    // Console message
    console.log('%c⚔️ BANKAI! ⚔️', 'color: #00D4FF; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,212,255,0.5);');
  };

  const triggerSoloLevelingEgg = () => {
    setActiveEgg('solo');
    setDiscoveredEggs(prev => new Set(prev).add('solo'));
    
    // Create shadow soldiers
    const soldiers = Array.from({ length: 10 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      id: Date.now() + i,
    }));
    setShadowArmy(soldiers);
    
    setTimeout(() => {
      setShadowArmy([]);
      setActiveEgg(null);
    }, 4000);
    
    // Console message
    console.log('%c👤 ARISE! 👤', 'color: #A855F7; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 8px rgba(168,85,247,0.8);');
  };

  return (
    <>
      {/* Naruto Rasengan Effect */}
      <AnimatePresence>
        {activeEgg === 'naruto' && (
          <>
            <motion.div
              className="fixed top-1/2 left-1/2 pointer-events-none z-[100]"
              initial={{ scale: 0, rotate: 0, x: '-50%', y: '-50%' }}
              animate={{ 
                scale: [0, 1.5, 1],
                rotate: [0, 720, 1440],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="relative w-64 h-64">
                {/* Rasengan spiral */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity }
                  }}
                  style={{
                    boxShadow: '0 0 60px rgba(59, 130, 246, 0.8), inset 0 0 60px rgba(255, 255, 255, 0.5)'
                  }}
                />
                {/* Inner glow */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-4 border-white/40"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 0, 0.8],
                      rotate: i % 2 === 0 ? 360 : -360
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2 
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-black/90 backdrop-blur-md border-2 border-orange-500 rounded-2xl px-8 py-4 text-center">
                <p className="text-2xl text-orange-400 mb-2">&quot;I&apos;m not gonna run away, I never go back on my word!&quot;</p>
                <p className="text-orange-300 text-sm">- Naruto Uzumaki 🍥</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bleach Sword Slash Effect */}
      <AnimatePresence>
        {activeEgg === 'bleach' && (
          <>
            {/* Multiple sword slashes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed pointer-events-none z-[100]"
                style={{
                  top: `${20 + i * 15}%`,
                  left: '-10%',
                  width: '120%',
                  height: '4px',
                }}
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ 
                  x: '100%',
                  opacity: [0, 1, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: 'easeOut'
                }}
              >
                <div 
                  className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
                    transform: `rotate(${-15 + i * 5}deg)`,
                  }}
                />
              </motion.div>
            ))}

            {/* Bleach spiritual pressure effect */}
            <motion.div
              className="fixed inset-0 pointer-events-none z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{
                background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
              }}
            />

            {/* Quote */}
            <motion.div
              className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-black/90 backdrop-blur-md border-2 border-cyan-500 rounded-2xl px-8 py-4 text-center">
                <p className="text-2xl text-cyan-400 mb-2">&quot;BANKAI!&quot;</p>
                <p className="text-cyan-300 text-sm">- Ichigo Kurosaki ⚔️</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Solo Leveling Shadow Army Effect */}
      <AnimatePresence>
        {shadowArmy.map((soldier) => (
          <motion.div
            key={soldier.id}
            className="fixed pointer-events-none z-[100]"
            initial={{ 
              x: soldier.x,
              y: soldier.y,
              opacity: 0,
              scale: 0,
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <div className="relative">
              {/* Shadow figure */}
              <motion.div
                className="w-16 h-24 bg-gradient-to-b from-purple-900 to-purple-950 rounded-lg relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
                }}
              >
                {/* Glowing eyes */}
                <div className="absolute top-4 left-3 w-2 h-2 bg-purple-400 rounded-full"
                  style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 1)' }}
                />
                <div className="absolute top-4 right-3 w-2 h-2 bg-purple-400 rounded-full"
                  style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 1)' }}
                />
              </motion.div>
              
              {/* Purple aura */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
                }}
              />
            </div>
          </motion.div>
        ))}
        
        {activeEgg === 'solo' && (
          <motion.div
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-black/90 backdrop-blur-md border-2 border-purple-500 rounded-2xl px-8 py-4 text-center">
              <p className="text-2xl text-purple-400 mb-2">&quot;ARISE!&quot;</p>
              <p className="text-purple-300 text-sm">- Sung Jin-Woo 👤</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Discovery Hint */}
      {discoveredEggs.size === 0 && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 pointer-events-none hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-xs text-white/50">
            💡 Try triple-clicking or typing anime names...
          </div>
        </motion.div>
      )}

      {/* Achievement Counter */}
      {discoveredEggs.size > 0 && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 py-2">
            <p className="text-xs sm:text-sm text-white">
              🎌 Easter Eggs: {discoveredEggs.size}/3
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}