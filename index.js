const express = require("express");
const app = express();

// Function to convert color to valid CSS format (name or hex code)
function getColorValue(color) {
  // Check if the color is a valid CSS color name
  const cssColorNames = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ];

  if (cssColorNames.includes(color.toLowerCase())) {
    return color.toLowerCase();
  } else {
    return "#" + color;
  }
}

app.get("/", (req, res) => {
  // serve index.html
  res.sendFile(__dirname + "/index.html");
});

app.get("/:dimensions", (req, res) => {
  // Parse URL parameters
  const { dimensions } = req.params;
  const [width, height] = dimensions.split("x");
  const { bg, text, textColor, fontSize } = req.query;

  // Set default values
  const canvasWidth = parseInt(width) || 800;
  const canvasHeight = parseInt(height) || 400;
  const canvasBackgroundColor = getColorValue(bg || "eeeeee");
  const canvasTextColor = getColorValue(textColor || "000000");
  const canvasText = text || `${canvasWidth}x${canvasHeight}`;
  const defaultFontSize = Math.min(canvasWidth, canvasHeight) / 8;
  const canvasFontSize = fontSize || defaultFontSize;

  // Generate SVG
  const svg = `
    <svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${canvasBackgroundColor}"/>
      <text x="50%" y="50%" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="${canvasFontSize}" fill="${canvasTextColor}" text-anchor="middle" dominant-baseline="middle">${canvasText}</text>
    </svg>
  `.trim();

  // Set response content type
  res.set("Content-Type", "image/svg+xml");

  // Send the SVG as the response
  res.send(svg);
});
// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
