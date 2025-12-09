import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Approach } from './components/Approach';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { FloatingShapes } from './components/FloatingShapes';
import { AnimeEasterEggs } from './components/AnimeEasterEggs';
import { AnimeCursor } from './components/AnimeCursor';
import { ConsoleArt } from './components/ConsoleArt';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      <ConsoleArt />
      <FloatingShapes />
      <AnimeEasterEggs />
      <AnimeCursor />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Stats />
        <Approach />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}