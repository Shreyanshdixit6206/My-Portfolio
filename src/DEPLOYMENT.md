# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/My-Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"** (use GitHub)
3. Click **"Add New..."** → **"Project"**
4. **Import** your `My-Portfolio` repository
5. Vercel will auto-detect Vite
6. Click **"Deploy"**
7. Wait 1-2 minutes ⏳
8. Your site is live! 🎉

### Important: Output Directory

If deployment fails with "Output Directory not found":

**Option A: Via Vercel Dashboard**
1. Go to Project **Settings**
2. Scroll to **"Build & Development Settings"**
3. Find **"Output Directory"**
4. Click **"Override"**
5. Change to: **`build`**
6. Save and redeploy

**Option B: Already Configured**
- The `vercel.json` file is already set up for you
- It specifies `"outputDirectory": "build"`

---

## Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Click **"Sign up"** or **"Login"** (use GitHub)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click **"Deploy site"**
7. Wait 2-3 minutes ⏳
8. Your site is live! 🎉

---

## Deploy to GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add to `package.json`:

```json
{
  "homepage": "https://YOUR-USERNAME.github.io/My-Portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

Your site will be live at: `https://YOUR-USERNAME.github.io/My-Portfolio`

---

## Custom Domain Setup

### On Vercel:

1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Update DNS settings at your domain registrar:
   - Add CNAME record pointing to Vercel

### On Netlify:

1. Go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

---

## Environment Variables (Future Use)

If you add API keys or secrets later:

### Vercel:
1. Go to **Settings** → **Environment Variables**
2. Add your variables (e.g., `VITE_API_KEY`)
3. Redeploy

### Netlify:
1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy

---

## Troubleshooting

### Build Errors

**"Cannot find module"**
- Solution: Delete `node_modules` and run `npm install` again

**"Output Directory not found"**
- Solution: Change output directory to `build` in deployment settings

**"Build failed"**
- Check build logs in your deployment dashboard
- Test locally: `npm run build`

### After Deployment

**Blank page**
- Check browser console for errors
- Verify `index.html` is in the build output

**Images not loading**
- Ensure all image paths start with `/`
- Check if images are in the repository

**404 on refresh**
- Vercel/Netlify handle this automatically for SPAs
- For other hosts, add routing configuration

---

## Performance Optimization

After deployment, check performance:

1. **Lighthouse Score**: Run in Chrome DevTools
2. **GTmetrix**: https://gtmetrix.com
3. **PageSpeed Insights**: https://pagespeed.web.dev

### Tips:
- Images are optimized automatically by build process
- Animations are GPU-accelerated
- Code splitting is automatic with Vite
- Mobile performance is optimized

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployment:

**When you push to GitHub:**
1. Changes are detected automatically
2. Build process starts
3. Site is redeployed
4. Live in ~2 minutes! ⚡

**To update your site:**
```bash
# Make changes to your code
git add .
git commit -m "Update projects section"
git push
```

Your site auto-deploys! 🎉

---

## Support

Need help? Check these resources:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Docs](https://vitejs.dev)

---

**Happy Deploying! 🚀**
