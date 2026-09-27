# Park Days

A phone-first, installable Universal Orlando itinerary for October 4–6, 2026. Built with plain HTML, CSS and JavaScript. No packages, tracking, or accounts.

## Use
Open the GitHub Pages URL, choose a day, and tap an activity to check it off. Progress saves in this browser on this device. On a trip day the app opens on that day. From Oct 4 on, checkmarks and added items from before the trip are treated as tests and cleared; Reset all checkmarks is in Trip info. It does not sync between phones. Optional activities count toward the displayed total.

On iPhone: Safari → Share → Add to Home Screen. On Android: Chrome → Install app / Add to Home screen. Open once online to prepare offline access.

## Publish on GitHub Pages
In repository Settings → Pages choose **Deploy from a branch**, `main`, `/ (root)`. All asset paths are relative so project sites work under their repository subdirectory.

## Edit
- `itinerary.js`: day plans and official-source notes. `locs` holds `[lat, lng]` pins (from Universal’s attraction data via themeparks.wiki) that the opt-in Near you card matches against and the route map draws. Things added on the day ("+ Add something", in Near you and at the end of each day) are saved in this browser with their time and, when location is on, a pin; they join the map trail and the recap. Stops with pins form the day’s numbered route in plan order, starting at the park entrance; optional ones join it as dashed pins while Extras is on. Pin colors match the checklist tags. The filter chips under the day tabs (Rides, Food, Shows, Meets, Express) filter both List and Map, and their dots are the pin colors. The recap maps show only the stops that were checked off. The full-screen map pinch-zooms, and its stop card steps through the route with arrows or a swipe. Meal and treat pins come from the same data. Land shapes and labels for the map are in `LANDS` in `app.js`.
- `styles.css`: appearance.
- `app.js`: checklist, saving (including when each item was checked off), the route map and the trip recap.
- `sw.js`: offline cache. Bump CACHE when releasing an update.

Run a static server (for example `python3 -m http.server 8765`) to preview; service workers need localhost or HTTPS. No build is required.

Ride items and the Near you card show current standby waits from themeparks.wiki (fetched by the phone every few minutes; hidden when offline or stale). Park hours in the day header refresh from the same source and are outlined when they differ from the plan. The weather line comes from Open-Meteo. The last good hours and forecast are kept for offline use.

The site is a planning aid, not a booking service. Hours were checked September 24, 2026; confirm current hours and attraction availability with Universal. Express coverage remains conditional on the passes purchased. Meals are suggestions, not reservations.
