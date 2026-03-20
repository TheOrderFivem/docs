# Bridge Docs

Documentation site for Community Bridge and The Orders Recipe, built with [Nextra](https://nextra.site).

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export

This site is configured for static export for GitHub Pages hosting:

```bash
npm run build
```

The output will be in the `out/` directory.

## Project Structure

```
├── pages/               # MDX documentation pages
│   ├── community-bridge/   # Community Bridge docs
│   │   ├── libraries/      # Library documentation
│   │   └── modules/        # Module documentation
│   ├── the-orders-recipe/  # The Orders Recipe docs
│   ├── blog/               # Blog posts
│   └── contributors.mdx    # Contributors page
├── public/              # Static assets
├── components/          # React components
├── styles.css          # Global styles
├── theme.config.tsx    # Nextra theme configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # Dependencies
```

## Documentation

- [Nextra Documentation](https://nextra.site/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
