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

We implemented a custom design for the stock cards using SVG. Here's how to use it: app/demo.svg

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

