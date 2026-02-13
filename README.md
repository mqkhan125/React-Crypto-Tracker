React-Crypto-Tracker

A modern and interactive cryptocurrency tracking application built with React, allowing users to search and view real-time crypto market data dynamically.

This project demonstrates core React concepts such as API integration, controlled components, state management with hooks, conditional rendering, dynamic data mapping, and modern UI styling.

React-Crypto-Tracker

## 📸 Preview


🔗 Overview

The React-Crypto-Tracker application enables users to:

Fetch real-time cryptocurrency market data from CoinStats API
Search cryptocurrencies by name
View market statistics including price, market cap, volume, and supply
See cryptocurrency icons alongside names
Experience a clean and professional UI layout

It is a practical project commonly used in finance dashboards, crypto tracking platforms, and portfolio applications.

✨ Features

Live cryptocurrency data fetching using API
Search functionality with dynamic filtering
Professional and responsive table layout
Formatted financial values using toFixed(2)
Modern UI design with hover effects
Clean and structured component architecture

🛠️ Technologies Used

React
JavaScript (ES6+)
Axios
CSS
React Hooks (useState, useEffect)
CoinStats API

🚀 Getting Started

Follow the steps below to run the project locally.

Clone the repository

git clone https://github.com/your-username/React-Crypto-Tracker.git

Navigate to the project directory

cd React-Crypto-Tracker

Install dependencies

npm install

Create a .env file and add your API key

VITE_COINSTATS_API_KEY=your_api_key_here

⚠️ Never commit your API key to GitHub.

Start the development server

npm run dev

The application will be available at:

👉 http://localhost:5173

📁 Project Structure

src/
├── components/
│ └── CurrencyTracker.jsx
├── styles.css
├── App.jsx
└── main.jsx

🧠 Component Behavior

The search input is a controlled component

On user input, state updates dynamically

Cryptocurrency data is fetched using Axios inside useEffect

Data is stored using useState

Filtered results are rendered using map

Financial values are formatted using toFixed(2)

Each row dynamically displays live API data

🔮 Possible Enhancements

Add sorting by price or market cap

Add real-time auto refresh

Add pagination

Implement dark mode toggle

Add price change indicators (green/red)

Integrate charts for data visualization

Make fully responsive for mobile devices

👤 Author

M Qasim khan
Frontend Developer | React Enthusiast