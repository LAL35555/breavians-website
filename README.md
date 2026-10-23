# Breavians Website

## Overview
A modern, responsive website for **Breavians** – an IT services company offering:
- Web Development
- Mobile App Development
- AI / Machine Learning
- Cloud Solutions & DevOps
- Digital Marketing
- IT Consulting

The site uses a **Blue & White** theme, smooth scroll animations, and a custom hero code‑window design.

## Project Structure
```
Breavians/
├─ index.html          # Main HTML file (includes Google Font *Inter*)
├─ css/
│   └─ style.css      # All styling – variables, layout, animations, responsive breakpoints
├─ js/
│   └─ main.js        # Vanilla JS handling navbar, scroll‑reveal, counters, form, etc.
└─ README.md           # This file
```

## Local Development
1. Open `index.html` in a browser (Chrome/Firefox) to view the site locally.
2. If you make changes, simply refresh the page – no build step required.

## Deployment (Free)
You can host the site on **Vercel**, **Netlify**, or **GitHub Pages** – all free for static sites.
### Quick Vercel Deploy
```bash
# If you have Git installed
git init && git add . && git commit -m "Initial commit"
# Push to a new GitHub repo (create one first)
git remote add origin https://github.com/your‑username/breavians.git
git push -u origin master
# Then, in Vercel dashboard, import the repo and deploy.
```
The default build command is **none**, and the output directory is the root.

### Netlify Deploy
1. Drag‑and‑drop the entire `Breavians` folder onto the Netlify dashboard.
2. Set *Publish directory* to the root.
3. Netlify will give you a temporary URL (e.g., `breavians.netlify.app`).

## Domain Configuration (breavians.com)
1. **Add an A record** in GoDaddy DNS pointing to the IP address provided by Vercel/Netlify (or use a CNAME to their domain).
2. Verify the domain in the hosting provider’s settings (Vercel → Domains, Netlify → Domain Management).
3. Wait for DNS propagation (usually a few minutes).

## Official Email (Zoho Mail – Free up to 5 users)
1. Sign up at https://www.zoho.com/mail/login.html.
2. Choose the **Free Plan**.
3. During setup, add your domain `breavians.com`.
4. **Verify ownership** by adding the following DNS TXT record in GoDaddy:
   - Name/Host: `@` (or leave blank)
   - Value: `zoho-verification=xxxxxxxxxxxx`
5. After verification, create email accounts (e.g., `info@breavians.com`).
6. Add the MX records Zoho provides to GoDaddy DNS (e.g., `mx.zoho.com` with priority 10).
7. Optional: set up SPF/DKIM for better deliverability (Zoho offers these records).

## Next Steps
- Replace placeholder phone number (`+91 XXXXX XXXXX`) with a real contact.
- Add your actual logo (replace the text‑based logo in the navbar).
- Populate the **About** section with your company's story and team bios.
- Connect the **Contact** form to a backend/email service (e.g., Formspree, Netlify Forms) if you need real submissions.
- Publish the site and share the live URL.

---
*If you need any further customisations (e.g., adding a blog, portfolio, or integrating a CMS), just let me know!*