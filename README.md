# Stock Market App - React Native

A React Native application built with Expo that allows users to discover and track stocks with a Tinder-like swipe interface.

## Getting Started

### Prerequisites
- Node.js (>= 14.0.0)
- npm or yarn
- Expo CLI

### Installation

1. Install Expo CLI globally:
```bash
npm install -g expo-cli
```

2. Clone the repository:
```bash
git clone <repository-url>
```

3. Install dependencies:
```bash
npm install
```

### Running the App

1. Start the development server:
```bash
npm start
# or
expo start
```

2. Run on specific platforms:
```bash
npm run ios     # for iOS
npm run android # for Android
```

## Application Structure

The app consists of three main sections:

### 1. Discover (Swipe Interface)
- Tinder-like swipe interface for stock discovery
- Swipe right to add to favorites
- Swipe left to skip
- Shows stock symbol, name, price, and daily change

### 2. Market List
- Complete list of available stocks
- Quick view of all stock information
- Searchable and sortable list (coming soon)

### 3. Favorites
- List of saved stocks from swipe actions
- Detailed view of saved stocks
- Remove stocks from favorites

## Custom Stock Card Design

We implemented a custom design for the stock cards using SVG. Here's how to use it:

```tsx
// Example of custom stock card implementation
<svg viewBox="0 0 400 700" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="360" height="660" rx="40" fill="white" stroke="#E2E8F0" stroke-width="2"/>
  
  <g>
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0 0; 50 -20; 150 -50; 300 -100"
      dur="3s"
      repeatCount="indefinite"
    />
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0; 5; 15; 25"
      additive="sum"
      dur="3s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="opacity"
      values="1; 1; 0.5; 0"
      dur="3s"
      repeatCount="indefinite"
    />
    
    <rect x="40" y="80" width="320" height="480" rx="20" fill="white" filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"/>
    <text x="70" y="140" font-size="42" font-weight="bold" fill="#2D3748">AAPL</text>
    <text x="70" y="170" font-size="20" fill="#718096">Apple Inc.</text>
    <text x="200" y="300" font-size="52" text-anchor="middle" font-weight="bold" fill="#2D3748">$175.64</text>
    <rect x="150" y="340" width="100" height="36" rx="18" fill="#4CAF50"/>
    <text x="200" y="365" font-size="18" text-anchor="middle" fill="white">+1.27%</text>
  </g>

  <g transform="translate(120, 600)">
    <g transform="translate(0, 0)">
      <circle cx="0" cy="0" r="25" fill="transparent" stroke="#FF4C4C" stroke-width="1.5"/>
      <path d="M-8 -8 L8 8 M-8 8 L8 -8" stroke="#FF4C4C" stroke-width="1.5"/>
    </g>

    <g transform="translate(160, 0)">
      <circle cx="0" cy="0" r="25" fill="transparent" stroke="#4CAF50" stroke-width="1.5"/>
      <path d="M0 8 C-8 -4 -16 0 -8 -8 C0 -16 0 -16 8 -8 C16 0 8 -4 0 8" fill="none" stroke="#4CAF50" stroke-width="1.5"/>
    </g>
  </g>
</svg>
```

## Key Features

- 🎯 Intuitive swipe interface
- 📊 Real-time stock data display
- 💾 Local storage for favorites
- 🎨 Custom SVG designs
- 📱 Cross-platform compatibility

## Project Structure
```
app/
├── (tabs)/                # Tab-based navigation
│   ├── _layout.tsx       # Tab layout configuration
│   ├── index.tsx         # Discover screen (Swiper)
│   ├── market.tsx        # Market list screen
│   └── favorites.tsx     # Favorites screen
├── components/
│   ├── cards/            # Card components
│   └── ui/               # UI components
├── hooks/                # Custom hooks
└── context/             # Application state
```

## Testing

Run tests with:
```bash
npm test
```

