# Kyo Wear - Deployment Guide

## 🚀 Deploy to Vercel

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it `kyo-wear` (or your preferred name)
   - Make it public or private
   - **DO NOT** initialize with README (we already have the code)

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/kyo-wear.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:** https://vercel.com/new

2. **Import your GitHub repository:**
   - Click "Add New" → "Project"
   - Import your `kyo-wear` repository

3. **Configure Environment Variables:**
   Add these in the Vercel dashboard before deploying:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
   STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait ~2 minutes for the build to complete
   - Your site will be live at `kyo-wear.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., `kyowear.com`)
3. Follow Vercel's DNS configuration instructions

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Environment Variables

Required for Stripe payments:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
- `STRIPE_SECRET_KEY` - Your Stripe secret key

Get your keys from: https://dashboard.stripe.com/apikeys

## 🎨 Features Deployed

- ✅ Multi-language support (EN/FR/ES)
- ✅ Stripe payment integration
- ✅ Size recommender algorithm
- ✅ Product DNA transparency layer
- ✅ Video hover on products
- ✅ Free shipping progress bar
- ✅ Parallax hero effect
- ✅ Smooth scroll (Lenis)
- ✅ Cookie consent & privacy policy
- ✅ Custom 404 & success pages

## 📞 Support

For issues, check:
- Vercel build logs
- Browser console for errors
- Stripe dashboard for payment logs
