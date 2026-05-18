# Placeholder Image Generator

A simple Express.js server that generates placeholder images on the fly. Perfect for prototyping web designs, testing layouts, or anytime you need dummy images.

## Features

- Generate placeholder images with custom dimensions
- Customize background and text colors
- Add custom text overlay
- Pure SVG output - lightweight and scalable
- Web UI for easy image generation

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

Then visit `http://localhost:3000` to use the web interface.

## API

### Basic Usage

```
GET /{width}x{height}
```

Example:
```
http://localhost:3000/800x400
```

### Query Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `bg` | Background color (hex without #) | `eeeeee` | `bg=ff5733` |
| `textColor` | Text color (hex without #) | `000000` | `textColor=ffffff` |
| `text` | Custom text to display | `{width}x{height}` | `text=Hello` |
| `fontSize` | Font size in pixels | auto (min dimension / 8) | `fontSize=48` |

### Examples

```
# 500x300 with blue background and white text
http://localhost:3000/500x300?bg=007bff&textColor=ffffff

# 200x200 with custom text
http://localhost:3000/200x200?text=Placeholder

# 1200x600 with large font
http://localhost:3000/1200x600?bg=28a745&textColor=ffffff&text=Hero+Image&fontSize=72
```

## Color Support

You can use either:
- Hex color codes (without the `#` prefix): `ff5733`, `00ccff`
- CSS color names: `red`, `blue`, `green`, `yellow`, etc.

## Deployment

This project includes a `vercel.json` configuration for easy deployment on Vercel.
