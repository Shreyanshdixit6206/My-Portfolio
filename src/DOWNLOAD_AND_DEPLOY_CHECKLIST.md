# ✅ Download & Deploy Checklist

Follow this step-by-step checklist to download and deploy your portfolio.

---

## 📥 Part 1: Download All Files from Figma Make

### Step 1: Download Files
- [ ] Click the **download button** in Figma Make
- [ ] Save all files to a new folder on your computer (e.g., `shreyansh-portfolio`)
- [ ] Verify you have **82 files** total (see FILE_STRUCTURE.md)

### Step 2: Verify Critical Files Exist
Check that these essential files are present:

**Configuration Files (9 files):**
- [ ] `.gitignore`
- [ ] `.npmrc`
- [ ] `.env.example`
- [ ] `package.json`
- [ ] `tsconfig.json`
- [ ] `vite.config.ts`
- [ ] `vercel.json`
- [ ] `index.html`
- [ ] `main.tsx`

**Main Files:**
- [ ] `App.tsx`
- [ ] `README.md`
- [ ] `DEPLOYMENT.md`

**Folders:**
- [ ] `components/` folder with 14 main components
- [ ] `components/ui/` folder with 49 UI components
- [ ] `styles/` folder with `globals.css`
- [ ] `public/` folder with `favicon.svg`

---

## 💻 Part 2: Local Setup & Testing

### Step 3: Install Dependencies
Open terminal/command prompt in your project folder:

```bash
npm install
```

- [ ] Wait for installation to complete (1-2 minutes)
- [ ] No errors should appear

### Step 4: Test Locally
```bash
npm run dev
```

- [ ] Server starts successfully
- [ ] Open `http://localhost:5173` in browser
- [ ] Website loads correctly
- [ ] Navigation works
- [ ] Animations are smooth
- [ ] Mobile view looks good (resize browser)
- [ ] Press `Ctrl+C` to stop server when done

### Step 5: Test Build
```bash
npm run build
```

- [ ] Build completes successfully
- [ ] A `build/` folder is created
- [ ] No errors in terminal

---

## 🔗 Part 3: Push to GitHub

### Step 6: Create GitHub Repository
1. [ ] Go to [github.com](https://github.com)
2. [ ] Click **"+"** → **"New repository"**
3. [ ] Name: `My-Portfolio` (or your choice)
4. [ ] Description: "My personal portfolio website"
5. [ ] Choose **Public**
6. [ ] **DO NOT** check "Add README" or ".gitignore"
7. [ ] Click **"Create repository"**

### Step 7: Initialize Git & Push
In your terminal:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Complete portfolio website"

# Add remote (REPLACE YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/My-Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

- [ ] All commands execute without errors
- [ ] Refresh GitHub page - all files should be visible

---

## 🚀 Part 4: Deploy to Vercel

### Step 8: Sign Up / Login to Vercel
1. [ ] Go to [vercel.com](https://vercel.com)
2. [ ] Click **"Sign Up"** (or Login if you have account)
3. [ ] Choose **"Continue with GitHub"**
4. [ ] Authorize Vercel to access your GitHub

### Step 9: Import Project
1. [ ] Click **"Add New..."** → **"Project"**
2. [ ] Find your `My-Portfolio` repository
3. [ ] Click **"Import"**

### Step 10: Configure Build Settings
Vercel should auto-detect these settings:

- [ ] Framework Preset: **Vite**
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `build` (or it might say `dist` - we'll fix if needed)
- [ ] Install Command: `npm install`

**Important:** If "Output Directory" says `dist`:
1. [ ] Click on **Output Directory** field
2. [ ] Change it to: `build`
3. [ ] Or trust that `vercel.json` will handle it

### Step 11: Deploy!
1. [ ] Click **"Deploy"** button
2. [ ] Wait 1-3 minutes for build to complete
3. [ ] Watch the build logs (optional - they're interesting!)

### Step 12: Verify Deployment
- [ ] You see **"Congratulations! 🎉"** message
- [ ] Click **"Visit"** button
- [ ] Your portfolio loads correctly
- [ ] Test all sections scroll smoothly
- [ ] Test navigation menu
- [ ] Test on mobile (use browser dev tools or real phone)
- [ ] Check for console errors (F12 → Console tab)

---

## 🎯 Part 5: Post-Deployment

### Step 13: Save Your URLs
Write down your URLs:

- [ ] **Live URL**: `https://______.vercel.app`
- [ ] **GitHub**: `https://github.com/______/My-Portfolio`
- [ ] **Vercel Dashboard**: `https://vercel.com/______/my-portfolio`

### Step 14: Share Your Portfolio!
- [ ] Add live URL to your resume
- [ ] Update LinkedIn profile
- [ ] Share on Twitter/X
- [ ] Add to GitHub profile README
- [ ] Tell friends and family! 🎉

---

## 🐛 Troubleshooting

### If Build Fails with "Output Directory not found"

**Quick Fix:**
1. [ ] Go to Vercel project → **Settings**
2. [ ] Scroll to **"Build & Development Settings"**
3. [ ] Find **"Output Directory"**
4. [ ] Click **"Override"**
5. [ ] Change to: `build`
6. [ ] Click **"Save"**
7. [ ] Go to **Deployments** → Click **"..."** → **"Redeploy"**

### If Images Don't Load
- [ ] Check if `public/` folder is in GitHub
- [ ] Check browser console for errors
- [ ] Verify image paths in components

### If Site is Blank
- [ ] Check browser console for errors (F12)
- [ ] Verify `build/index.html` exists after build
- [ ] Check if `main.tsx` imports `App.tsx` correctly

### If Animations Don't Work
- [ ] Check if `motion` package installed
- [ ] Clear browser cache (Ctrl+Shift+R)
- [ ] Try in incognito/private window

### Need Help?
- [ ] Read `DEPLOYMENT.md` for detailed guides
- [ ] Check `README.md` for project info
- [ ] Look at build logs in Vercel dashboard
- [ ] Google the specific error message

---

## 🎊 Success Criteria

Your deployment is successful when:

✅ Website loads at your Vercel URL  
✅ All sections are visible  
✅ Navigation menu works  
✅ Animations are smooth  
✅ Mobile view is responsive  
✅ Contact cards display correctly  
✅ Footer links work  
✅ No console errors  
✅ Page loads quickly (< 3 seconds)  

---

## 📱 Optional: Test on Real Devices

After deployment, test on:
- [ ] iPhone/iOS device
- [ ] Android device
- [ ] Tablet
- [ ] Different browsers (Chrome, Safari, Firefox)

---

## 🔄 Future Updates

When you want to update your portfolio:

```bash
# Make changes to your files
git add .
git commit -m "Updated projects section"
git push
```

- [ ] Vercel auto-deploys in ~2 minutes
- [ ] No need to do anything else! ✨

---

## 🎉 Congratulations!

Once all boxes are checked, your portfolio is:
- ✅ Built successfully
- ✅ Deployed to production
- ✅ Accessible worldwide
- ✅ Auto-deployed on every git push

**You're officially a deployed developer! 🚀**

---

**Estimated Time:**
- Download & Setup: 5 minutes
- GitHub Push: 2 minutes
- Vercel Deploy: 3 minutes
- **Total: ~10 minutes**

**Let's do this! 💪**
