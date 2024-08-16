# Weather App

This is a simple Node.js weather application that provides weather information based on a user's location or a specified location. The app is built using Node.js and Express and utilizes Handlebars for templating. It fetches weather data using the `request` package.

## Demo

You can check out the live version of the app [here](https://weather-app-dm6e.onrender.com).

## Features

- Fetches weather information based on the user's current location or any specified location.
- Displays temperature, weather conditions, and other relevant weather data.
- Responsive and user-friendly interface.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Siddharth-Agg-arwal/weather-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the application:**

   ```bash
   npm run start
   ```

   The app will be available at `http://localhost:3000`.

## Development

For development, the app uses `nodemon` to automatically restart the server when code changes are detected. To start the app in development mode, run:

```bash
npm run dev
```

## Packages Used

- **express**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **handlebars**: A popular templating engine that allows you to generate HTML dynamically based on data.
- **request**: A simple HTTP client for making requests to external APIs, used here to fetch weather data.
- **nodemon**: A tool that helps develop Node.js-based applications by automatically restarting the server when file changes in the directory are detected.

## Deployment

The application is deployed on Render. You can access the deployed version using [this link](https://weather-app-dm6e.onrender.com).

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
