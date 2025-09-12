# Anagram Solver

A Progressive Web App (PWA) that helps you find anagrams from any set of letters. Works offline and can be installed on your device!

## Features

- 🔤 Find anagrams from any combination of letters
- 📱 Progressive Web App - works offline and can be installed
- 🎯 Interactive letter tiles with circular layout
- 🌙 Dark/light mode support  
- ⚡ Fast local algorithm with extensive word database
- 🔍 Clean, modern interface

## Development

This is a static site that requires no build process. Simply serve the files with any static web server.

### Local Development

```bash
# Start a local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### PR Previews

This repository includes automated PR preview deployments. When you open a pull request, a preview deployment will be automatically created and linked in the PR comments.

**Setup Guide**: See [`.github/PR_PREVIEW_SETUP.md`](.github/PR_PREVIEW_SETUP.md) for configuration instructions.

**Supported Platforms:**
- Netlify (default)
- Vercel (alternative)
- Surge.sh (minimal setup)

## Files

- `index.html` - Main application file with embedded CSS and JavaScript
- `sw.js` - Service worker for offline functionality
- `words.js` - Word database for anagram finding
- `manifest.json` - PWA manifest
- `robots.txt` - Search engine directives
