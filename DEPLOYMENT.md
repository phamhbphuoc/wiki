# Deployment Guide for Your Wiki

## 🚀 Quick Start: Deploy to Vercel (Recommended)

Vercel is the easiest and most performant way to deploy your Next.js wiki. It's made by the creators of Next.js and is **100% free** for personal projects.

### Step 1: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to** [vercel.com](https://vercel.com)
2. **Click** "Sign Up" or "Login"
3. **Choose** "Continue with GitHub"
4. **Authorize** Vercel to access your GitHub account
5. **Click** "Import Project" or "Add New..."
6. **Select** "Import Git Repository"
7. **Find and import** your wiki repository
8. **Click** "Deploy"

That's it! Vercel will:
- ✅ Auto-detect Next.js configuration
- ✅ Install dependencies with Bun (if available) or npm
- ✅ Build your site
- ✅ Deploy to a production URL

Your site will be live in ~60 seconds at: `https://your-repo-name.vercel.app`

### Step 3: Automatic Deployments

Every time you push to GitHub:
- **Main branch** → Automatically deploys to production
- **Other branches** → Creates preview deployments with unique URLs
- **Pull requests** → Gets preview links for testing before merge

---

## 🌐 Adding a Custom Domain (Vercel)

### Step 1: Buy a Domain

Purchase a domain from providers like:
- **Namecheap** (affordable, easy to use)
- **Cloudflare** (includes free DNS and CDN)
- **Google Domains** / **Squarespace Domains**
- **GoDaddy**

### Step 2: Add Domain in Vercel

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `wiki.yourdomain.com` or `yourdomain.com`)
4. Click **Add**

Vercel will show you which DNS records to add.

### Step 3: Configure DNS

At your domain provider, add the DNS records shown by Vercel:

**For root domain** (`yourdomain.com`):
```
Type: A
Name: @
Value: 76.76.21.21
```

**For subdomain** (`wiki.yourdomain.com`):
```
Type: CNAME
Name: wiki
Value: cname.vercel-dns.com
```

**For www**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Wait and Verify

- DNS propagation: 5 minutes to 48 hours (usually ~10 minutes)
- Vercel automatically provisions **free SSL certificate**
- Check status in Vercel dashboard under Domains
- Visit your custom domain!

### Tips:
- ✅ Use Cloudflare for DNS (faster propagation)
- ✅ Vercel handles SSL/HTTPS automatically
- ✅ No need to modify your code or config files

---

## 📝 DNS Propagation

After configuring DNS:
- It can take **24-48 hours** for DNS changes to propagate globally
- You can check status at: https://dnschecker.org
- HTTPS certificate may take a few minutes to provision

---

## 🔍 Troubleshooting

### Issue: 404 on all pages except homepage

**Solution**: This is normal for GitHub Pages with Next.js. The static export handles routing.

### Issue: Images not loading

**Check**:
1. Images are in the `public/` folder
2. Paths start with `/` (e.g., `/images/demo.png`)
3. `images.unoptimized: true` is set in `next.config.mjs`

### Issue: Custom domain not working

**Check**:
1. DNS records are correct
2. CNAME file exists in `public/` folder
3. Wait for DNS propagation (24-48 hours)
4. Check GitHub Pages settings

---

## 🎯 Alternative: Deploy to Vercel (Even Easier!)

If you want even simpler deployment:

1. **Go to** [vercel.com](https://vercel.com)
2. **Sign in** with GitHub
3. **Import** your repository
4. Vercel auto-detects Next.js and deploys!
5. **Custom domain** is super easy in Vercel dashboard

**Advantages**:
- ✅ Automatic deployments on every push
- ✅ Preview deployments for PRs
- ✅ Better performance (Edge network)
- ✅ No need for static export
- ✅ Easy custom domain setup
- ✅ Free for personal projects

---

## 📊 Comparison

| Feature | GitHub Pages | Vercel |
|---------|-------------|--------|
| Cost | Free | Free (hobby) |
| Setup | Manual config | Auto-detect |
| Custom domain | Manual DNS | Easy UI |
| Build time | ~2-3 min | ~1-2 min |
| Performance | Good | Excellent |
| Preview deploys | No | Yes |
| Analytics | No | Yes (paid) |

---

## ✅ Checklist

- [ ] GitHub repository created and code pushed
- [ ] GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- [ ] `next.config.mjs` configured for static export
- [ ] GitHub Pages enabled in repository settings
- [ ] (Optional) Custom domain purchased
- [ ] (Optional) DNS records configured
- [ ] (Optional) CNAME file added to `public/` folder
- [ ] First deployment successful
- [ ] Site accessible at GitHub Pages URL
- [ ] (Optional) Custom domain working with HTTPS

---

Good luck with your deployment! 🎉
