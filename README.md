# Weather Dashboard

A simple weather dashboard application built with React that allows users to search for a city and view real-time weather information using the OpenWeather API.

## Features

1. Search for any city and get real-time weather details.
2. Displays weather data including temperature, humidity, wind speed, pressure, and conditions.
3. Auto-refreshes every 30 seconds to fetch the latest weather updates.
4. Stores last searched city in local storage for a persistent experience.
5. Supports Enter key for quick search input submission.
6. Fully responsive and mobile-friendly design.

## Tech Stack

1. React (Functional Components, Context API, Hooks)
2. CSS for styling
3. OpenWeather API for weather data

## Installation Setup

1. Clone Repository
2. Install dependencies using npm or yarn
3. Create a free account on OpenWeather API and get your API key
4. Replace `API_KEY` in `src/context/WeatherContext.js` with your actual API key
5. Run `npm start` or `yarn start` to start the application

## Usage

1. Open the application in your browser
2. Search for a city in the input field
3. Press Enter or click the search button to fetch weather data
4. View real-time weather information for the searched city
5. The application will auto-refresh every 30 seconds to fetch the latest weather updates
6. The last searched city will be stored in local storage for a persistent experience
7. The application is fully responsive and mobile-friendly
8. Supports Enter key for quick search input submission
9. You can search for any city and view real-time weather information
10. The application uses the OpenWeather API to fetch weather data
11. The application is built with React and uses functional components, context API, and hooks
12. The application is styled using CSS

## Project Structure

/weather-dashboard
│-- /src
│ │-- /components
│ │ ├── Search.js
│ │ ├── WeatherDisplay.js
│ │-- /context
│ │ ├── WeatherContext.js
│ │-- App.js
│ │-- index.js
│-- /public
│-- package.json
│-- README.md

## API Reference

The application uses the OpenWeather API to fetch weather data.
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
