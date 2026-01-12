# Brett Pollak - Professional Portfolio Website

A modern portfolio and thought leadership website for Brett Pollak, Executive Director of Workplace Technology & Infrastructure Services at UC San Diego.

## Features

- **Professional Portfolio**: Showcase expertise in AI implementation and digital transformation
- **Media & Publications**: Comprehensive list of 30+ articles, interviews, and speaking engagements
- **LinkedIn Integration**: Ready for SociableKIT LinkedIn feed integration
- **Responsive Design**: Built with Tailwind CSS for optimal viewing on all devices
- **Static Site Export**: Optimized for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brettpollak-website.git
cd brettpollak-website/brettpollak-site
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

## Project Structure

```
brettpollak-site/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── blog/                # Blog page (coming soon)
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
4. Replace the placeholder in `app/linkedin/page.tsx` with your embed code

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
- **Blog Posts**: Edit `app/blog/page.tsx` to add your blog posts
- **Contact Info**: Edit `app/contact/page.tsx`

### Adding Blog Posts

When you're ready to add blog posts, you can:
1. Create individual blog post files in `app/blog/[slug]/page.tsx`
2. Or update `app/blog/page.tsx` to list your posts

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
