# Park Days

A phone-first, installable Universal Orlando itinerary for October 4–6, 2026. Built with plain HTML, CSS and JavaScript. No packages, tracking, or accounts.

## Use
Open the GitHub Pages URL, choose a day, and tap an activity to check it off. Progress saves in this browser on this device. It does not sync between phones. Optional activities count toward the displayed total.

On iPhone: Safari → Share → Add to Home Screen. On Android: Chrome → Install app / Add to Home screen. Open once online to prepare offline access.

## Publish on GitHub Pages
In repository Settings → Pages choose **Deploy from a branch**, `main`, `/ (root)`. All asset paths are relative so project sites work under their repository subdirectory.

## Edit
- `itinerary.js`: day plans and official-source notes.
- `styles.css`: appearance.
- `app.js`: checklist and saving.
- `sw.js`: offline cache. Bump CACHE when releasing an update.

Run a static server (for example `python3 -m http.server 8765`) to preview; service workers need localhost or HTTPS. No build is required.

The site is a planning aid, not a live queue or booking service. Hours were checked September 24, 2026; confirm current hours and attraction availability with Universal. Express coverage remains conditional on the passes purchased. Meals are suggestions, not reservations.
