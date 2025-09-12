# Anagram Solver
Anagram Solver is a Progressive Web App (PWA) built with pure HTML, CSS, and JavaScript that finds all possible anagrams from a given set of letters. The app works offline and includes a comprehensive Scrabble word dictionary.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively
- Run the application instantly (no build process required):
  - `python3 -m http.server 8000` (starts in < 1 second)
  - Navigate to `http://localhost:8000`
  - Application loads in < 10ms, word dictionary (2.3MB) loads in < 20ms
- Alternative servers that work:
  - `python -m http.server 8000`
  - `npx serve .`
  - `php -S localhost:8000`
  - Any static file server
- Kill server: `pkill -f "http.server 8000"`

## Validation
- **ALWAYS** manually test the complete anagram solving workflow after making changes:
  1. Type letters in the input field (try "listen")
  2. Verify letter tiles appear with Scrabble point values
  3. Click the sparkle (✨) solve button
  4. Verify anagram results modal appears with correct words (should show "silent", "enlist", "tinsel", etc.)
  5. Test edge cases with letters that have no anagrams (try "xyz" - should show "no anagrams found")
  6. Test the shuffle button (🔀) - letter tiles should reposition randomly
  7. Test the update check button (🔄) - should show "App is up to date!"
  8. Close modal using X button
- **CRITICAL**: Test PWA functionality:
  - Service worker registration (check browser console for "ServiceWorker registration successful")
  - Offline capability (disconnect network, refresh page, app should still work)
  - Install prompt (📱 Install App button should appear)
- **UI Responsiveness**: Test on different viewport sizes - tiles should reposition appropriately
- **Performance**: App should be responsive with input handling in < 100ms
- **NO BUILD PROCESS**: This is a static web app - no compilation, bundling, or transpilation needed

## Application Structure
- `index.html` - Main application (44KB, self-contained with embedded CSS/JS)
- `words.js` - Scrabble word dictionary (2.3MB, 3,514 lines, ~270K words)
- `sw.js` - Service worker for PWA functionality and offline support
- `manifest.json` - PWA manifest with app metadata and icons
- `robots.txt` - Search engine directives
- `screenshots/` - Application screenshots for documentation

## Key Features to Test
- **Anagram Solving**: Finds all valid anagrams using local Scrabble dictionary
- **Letter Tiles**: Drag-and-drop Scrabble-style tiles with point values
- **Responsive Layout**: Automatic tile positioning based on viewport size
- **PWA Support**: Works offline, installable, service worker caching
- **API Integration**: Falls back to local search when dictionary API unavailable (expected)
- **Update Mechanism**: Manual update check with user feedback

## Common Tasks
The following validated commands and outputs can be referenced to save time:

### Repository Structure
```
.
├── .git/
├── .gitignore
├── README.md (minimal: "Anagram Solver")
├── index.html (44,503 bytes)
├── manifest.json (PWA manifest)
├── robots.txt
├── screenshots/ (PNG files showing app states)
├── server.log
├── sw.js (2,462 bytes)
└── words.js (2,277,284 bytes)
```

### Word Dictionary Structure
- Source: Official Scrabble dictionary
- Format: JavaScript array exported as `WORD_LIST`
- Size: ~270,000 words from 'aa' to 'zymurgy'
- Module exports for both browser and Node.js environments

### Testing Scenarios
1. **Valid anagrams**: "listen" → "silent", "enlist", "tinsel", "inlets", etc.
2. **No anagrams**: "xyz" → "no anagrams found"
3. **Short words**: "is" → "si"
4. **Long words**: Test with 8+ letters for comprehensive results
5. **Mixed case**: App handles uppercase/lowercase automatically

### Performance Expectations
- Server startup: < 1 second
- Page load: < 10ms
- Dictionary load: < 20ms  
- Anagram search: < 500ms for most inputs
- Tile animations: Smooth 60fps

### Error Handling
- External API failure: Graceful fallback to local search (normal behavior)
- Invalid input: App handles gracefully, no crashes expected
- Network issues: PWA continues working offline
- Large inputs: Performance may degrade with 15+ letters but should not crash

## Development Guidelines
- **NO BUILD TOOLS**: Do not add npm, webpack, or build processes - keep it simple
- **Inline Everything**: CSS and JavaScript are embedded in index.html by design
- **PWA Compliance**: Maintain service worker and manifest.json for offline functionality
- **Performance**: Keep dictionary loading fast, optimize anagram algorithms if needed
- **Accessibility**: Maintain keyboard navigation and screen reader compatibility
- **Mobile-First**: Ensure touch interactions work properly on mobile devices

## Troubleshooting
- **App not loading**: Check if port 8000 is available, try different port
- **Service worker issues**: Clear browser cache, check console for errors  
- **Anagram results missing**: Verify words.js loaded properly (2.3MB file)
- **PWA not installing**: Ensure HTTPS or localhost, check manifest.json
- **Performance issues**: Large letter sets (15+) may be slow, this is expected

Always validate your changes work correctly by running through the complete user workflow described in the Validation section.