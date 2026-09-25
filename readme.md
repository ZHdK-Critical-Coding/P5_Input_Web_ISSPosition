# P5 -> ISS Position

A p5.js sketch that fetches the current position of the International Space
Station every two seconds and draws its track as dots on the canvas
(longitude mapped to x, latitude to y).

## How to Use

1. Start Live Server (click **Go Live** in the VS Code status bar).
2. Leave the page open: a new dot is added every two seconds, so the orbit
   builds up slowly over time.

## How it Works

The position comes from the [Where the ISS at?](https://wheretheiss.at) API
(`/v1/satellites/25544`). The request is routed through the AllOrigins proxy
(`api.allorigins.win`) to avoid CORS restrictions, so no special browser
setup is needed. Latitude (-90 to 90) and longitude (-180 to 180) are
normalised to the canvas size.

## Libraries

- p5.js 1.10.0
- p5.sound 1.0.1
