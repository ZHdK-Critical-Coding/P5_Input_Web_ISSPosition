// API URL for the International Space Station (ISS) position
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

// Array to store ISS positions over time
let positions = []

// Async function to fetch the current ISS position
async function getISS() {
    // Use AllOrigins proxy to bypass CORS restrictions
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(api_url)}`);
    
    // Parse the response as JSON (AllOrigins wraps the content)
    const d = await response.json();
    
    // Parse the actual API JSON content inside AllOrigins wrapper
    const data = JSON.parse(d.contents);

    // Return only latitude and longitude
    return {
      latitude: data.latitude,
      longitude: data.longitude
    }
}

// Handle window resizing: adjust canvas size dynamically
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5.js setup function (runs once at start)
async function setup() {
  // Create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);
  
  // Every 2 seconds, fetch the ISS position and store it
  setInterval(async () => {
    positions.push(await getISS());  // add new position to the array
    console.log(position)             // <-- BUG: 'position' is undefined, should be 'positions[positions.length - 1]'
  }, 2000)
}

// p5.js draw function (runs every frame)
function draw() {
  background(200); // light grey background
  
  // Draw all recorded ISS positions
  if (positions.length > 0) {
    positions.forEach(position => {
      // Normalize latitude (-90 to 90) to 0–1
      const norm_lat = (position.latitude + 90) / 180;
      
      // Normalize longitude (-180 to 180) to 0–1
      const norm_lon = (position.longitude + 180) / 360;
      
      // Draw a circle at the normalized position
      ellipse(windowWidth * norm_lon, windowHeight * norm_lat, 10);
    })
  }
}