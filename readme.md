# P5.js: ISS Position

[Deutsch](README_DE.md)

Fetches the current position of the International Space Station every two
seconds and draws its track as dots on the canvas (longitude mapped to x,
latitude to y). An example of polling a web API with `fetch()` and turning
live data into a drawing.

## Installation

Requirements: an internet connection and a current browser.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used).

## How to Run

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Leave the page open: a new dot is added every two seconds, so the orbit
   builds up slowly over time.

The position comes from the [Where the ISS at?](https://wheretheiss.at) API
(`/v1/satellites/25544`). The request is routed through the AllOrigins
proxy (`api.allorigins.win`) to avoid CORS restrictions, so no special
browser setup is needed.

## Coding Help

- **`sketch.js` → `api_url`**: the API endpoint. Change it to fetch other
  data (and adjust `getISS()`).
- **`getISS()`**: fetches the URL through the AllOrigins proxy. The proxy
  wraps the answer, so the real JSON is parsed from `d.contents`. Returns
  `latitude` and `longitude`.
- **`setup()`**: creates a full-window canvas and starts a `setInterval`
  that pushes a new position into `positions` every 2000 ms and logs the
  newest position to the console.
- **`draw()`**: normalizes latitude (−90…90) and longitude (−180…180) to
  0–1 and draws a circle for each stored position. Latitude is inverted
  (`1 - …`) so north is at the top.
- **`windowResized()`**: resizes the canvas with the window.
