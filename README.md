# Brett Pollak - Professional Portfolio Website

A modern portfolio and thought leadership website for Brett Pollak, Executive Director of Workplace Technology & Infrastructure Services at UC San Diego.

## Features

- **Professional Portfolio**: Showcase expertise in AI implementation and digital transformation
- **Media & Publications**: Comprehensive list of 30+ articles, interviews, and speaking engagements
- **LinkedIn Integration**: Ready for SociableKIT LinkedIn feed integration
- **Responsive Design**: Built with Tailwind CSS for optimal viewing on all devices
- **Static Site Export**: Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20.x LTS
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brettpollak-website.git
cd brettpollak-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

`npm run dev` now wraps `next dev`, waits for the app to come up on localhost, and relies on Next.js hot reload so changes appear automatically as you edit files.
If your default shell Node version is unsupported but Homebrew `node@20` is installed, the scripts will automatically re-exec on that supported runtime.

While the dev server is running, it also keeps a lightweight deployment queue visible in the terminal:

- If files have changed locally, it tells you those changes are live on localhost but not ready for GitHub/Vercel yet.
- If local `main` is ahead of `origin/main` with no uncommitted changes, it tells you the repo is ready to push and points you to the push prompt.

The repo is pinned to Node 20.x LTS. CI and deploy also use Node 20. If you run newer Node majors locally and see lint/typecheck/build hang, switch first:
```bash
nvm use
```

If you want the browser to open automatically:
```bash
npm run dev:open
```

## Local Development Workflow

- `npm run dev`: Start the localhost preview with automatic hot reload
- `npm run dev:open`: Same as above, but opens the preview in your default browser
- `npm run doctor:local`: Check for broken local Next.js runtime files before localhost startup
- `npm run clean`: Remove generated local build artifacts (`.next/` and `out/`)
- `npm run deploy:status`: Show whether changes are only local, uncommitted, or ready to push to GitHub main for Vercel
- `npm run deploy:prompt`: Ask whether to push local `main` to `origin/main` and trigger Vercel
- `npm run typecheck`: Run TypeScript without emitting files
- `npm run lint`: Run ESLint against the active app code
- `npm run check`: Run lint and typecheck together
- `npm run verify`: Run lint, typecheck, and a production build

## Automated Checks

This repo now includes a CI workflow at `.github/workflows/ci.yml` that runs on pull requests and pushes to `main`. It currently verifies:

- ESLint
- TypeScript typechecking
- Production build

The lint and typecheck config also ignore generated and archived directories like `out/`, `functions/`, and `brettpollak-site/` so validation stays focused on the active app.

If local validation starts behaving strangely, the recovery path should be:

```bash
nvm use
npm run clean
npm ci
npm run verify
```

## GitHub and Vercel Push Flow

The deploy queue is intentionally conservative:

1. Changes show up on localhost immediately through Next.js hot reload.
2. If your working tree is dirty, the queue tells you the changes are local only.
3. Once you commit those changes on `main` and local `main` is ahead of `origin/main`, the queue marks the repo as ready.
4. Run `npm run deploy:prompt` and confirm the push.
5. The script pushes `main` to `origin/main`, which is the handoff point for Vercel to pick up the deployment.

The push prompt will not push if:

- you are not on `main`
- you have uncommitted changes
- local `main` is behind `origin/main`
- there is nothing new to push

## Project Structure

```
brettpollak-website/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── tritongpt/           # TritonGPT case study
│   ├── products/            # Product showcase
│   ├── media/               # Media & publications page
│   ├── linkedin/            # LinkedIn feed page
│   └── contact/             # Contact page
├── components/              # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                     # Utility functions
│   └── mediaData.ts        # Media & publications data
└── public/                  # Static assets
```

## Configuration

### LinkedIn Feed Integration

To add the LinkedIn feed:

1. Sign up for [SociableKIT](https://www.sociablekit.com/)
2. Create a LinkedIn feed widget in your dashboard
3. Copy the embed code
4. Update the widget embed in `app/linkedin/LinkedInContent.tsx`

### Podcast Moderation Setup (Firebase)

The podcast moderation workflow uses Firestore and Firebase Authentication.

1. Enable Firebase Authentication with the **Google** provider.
2. In Firebase Authentication settings, add your site domains (for example `brettcpollak.com` and localhost).
3. Copy `firestore.rules` from this repo into Firebase Console > Firestore Database > Rules.
4. Publish the rules.
5. Use `/podcasts/moderation` to review submissions.

Only the admin allowlisted in `lib/admin.ts` can moderate submissions. Current admin email:
- `brettcpollak@gmail.com`

### Podcast Submission Email Notifications

This repo includes a Firebase Cloud Function that emails you whenever a new podcast submission is created in Firestore:
- Function name: `notifyNewPodcastSubmission`
- Trigger: `podcast_submissions/{submissionId}` document create
- Provider: Resend API

Setup steps:

1. Install Firebase CLI and login:
```bash
npm install -g firebase-tools
firebase login
```

2. Select the Firebase project for this repo:
```bash
firebase use --add
```

3. Install and build functions:
```bash
cd functions
npm install
npm run build
cd ..
```

4. Set required secret and params:
```bash
firebase functions:secrets:set RESEND_API_KEY
firebase functions:params:set PODCAST_NOTIFICATION_TO="brettcpollak@gmail.com"
firebase functions:params:set PODCAST_NOTIFICATION_FROM="Podcast Moderation <onboarding@resend.dev>"
firebase functions:params:set PODCAST_MODERATION_URL="https://brettcpollak.com/podcasts/moderation"
```

5. Deploy the function:
```bash
firebase deploy --only functions:notifyNewPodcastSubmission
```

Notes:
- If you use Resend in production, set `PODCAST_NOTIFICATION_FROM` to a domain/sender you verified in Resend.
- After deployment, submit a test podcast and check function logs with:
```bash
firebase functions:log --only notifyNewPodcastSubmission
```

### GitHub Pages Deployment

The site is configured for automatic deployment to GitHub Pages:

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set Source to "GitHub Actions"
4. Push to the main branch to trigger deployment

**Note**: Update the `basePath` and `assetPrefix` in `next.config.ts` to match your repository name.

## Customization

### Adding Media Items

Edit `lib/mediaData.ts` to add new publications, articles, or speaking engagements:

```typescript
{
  publication: 'Publication Name',
  title: 'Article Title',
  url: 'https://...',
  date: 'YYYY-MM-DD',
  category: 'article' | 'interview' | 'whitepaper' | 'speaking'
}
```

### Updating Content

- **About Page**: Edit `app/about/page.tsx`
- **Home Page**: Edit `app/page.tsx`
- **TritonGPT Case Study**: Edit `app/tritongpt/TritonGPTContent.tsx`
- **Contact Info**: Edit `app/contact/page.tsx`

## Building for Production

To build the static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## License

© 2026 Brett Pollak. All rights reserved.

## Contact

For questions or issues with the website, please contact Brett Pollak via:
- [LinkedIn](https://www.linkedin.com/in/brettpollak/)
- [X (Twitter)](https://x.com/brettcpollak)
