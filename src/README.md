# 🎨 Shreyansh Dixit - Portfolio Website

A modern, professional portfolio website featuring a dark theme, bold typography, and neon accent colors (yellow #D4FF00 and cyan #A8F5FF). Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎯 **Modern UI/UX Design** - Contemporary, bold design with generous white space and rounded corners
- 🌙 **Dark Theme** - Pure black (#000000) background with neon accents
- ✨ **3D Animations** - Comprehensive animations using Framer Motion
- 🎮 **Interactive Elements** - Tilt cards, scroll reveals, and hover effects
- 🎭 **Anime Easter Eggs** - Hidden references to Bleach, Solo Leveling, and Naruto
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎪 **Floating Shapes** - Dynamic background animations
- 🖱️ **Custom Cursor** - Unique cursor design (desktop only)
- 📧 **Interactive Contact Cards** - Modern card-based contact section

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shreyanshdixit6206/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy automatically
4. Your site will be live in ~2 minutes! 🎉

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy! 🚀

## 📂 Project Structure

```
portfolio/
├── components/              # React components
│   ├── AnimeCursor.tsx     # Custom cursor component
│   ├── AnimeEasterEggs.tsx # Hidden anime references
│   ├── Approach.tsx        # UI/UX approach section
│   ├── ConsoleArt.tsx      # Console ASCII art
│   ├── Contact.tsx         # Contact section
│   ├── Experience.tsx      # Experience & education
│   ├── FloatingShapes.tsx  # Background animations
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   ├── Projects.tsx        # Featured projects
│   ├── ScrollReveal.tsx    # Scroll animation wrapper
│   ├── Stats.tsx           # Statistics section
│   ├── TiltCard.tsx        # 3D tilt card effect
│   └── ui/                 # UI components library
├── styles/
│   └── globals.css         # Global styles and Tailwind
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── vercel.json             # Vercel deployment config

```

## 🎨 Customization

### Colors
Edit the neon accent colors in `/styles/globals.css`:
```css
--color-neon-yellow: #D4FF00;
--color-neon-cyan: #A8F5FF;
```

### Content
Update your personal information in:
- `/components/Hero.tsx` - Name, title, description
- `/components/Projects.tsx` - Your projects
- `/components/Experience.tsx` - Work experience & education
- `/components/Contact.tsx` - Contact information

### Anime Easter Eggs
Customize the easter eggs in `/components/AnimeEasterEggs.tsx`

## 🐛 Troubleshooting

### Build fails with "Output Directory not found"
- Check `vercel.json` has `"outputDirectory": "build"`
- Or update Vercel settings to use `build` as output directory

### Images not loading
- Ensure all image paths are correct
- Check if images are included in the repository

### Animations not working
- Verify Framer Motion is installed: `npm install motion`
- Check browser console for errors

## 📝 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Shreyansh Dixit**
- Portfolio: [Your Live URL]
- GitHub: [@Shreyanshdixit6206](https://github.com/Shreyanshdixit6206)
- LinkedIn: [Your LinkedIn]

## 🙏 Acknowledgments

- Built with [Figma Make](https://figma.com)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Motion (Framer Motion)](https://motion.dev)

---

Made with ❤️ and lots of ☕
