🌦️ Weather App Project Summary
This project involved building a functional weather forecast application using Wix Velo, integrating with the WeatherAPI.com service, and providing both current conditions and a 3-day forecast for a user-specified city.

✅ Features Implemented:

User input for city name
Fahrenheit/Celsius toggle
Current weather display (temperature, icon, city name)
3-day weather forecast using a repeater
Loading spinner
“Save as favorite” checkbox with local storage support

🧠 My Approach:

I started with a clear focus on implementing the minimum viable product and incrementally layering features. The process began with basic input handling and API integration. Once the current weather data was confirmed functional, I proceeded to add the forecast display using a repeater component.

The UI was designed with mobile responsiveness in mind, and the layout was kept clean and focused. Dev Mode was used throughout to enable full control over data binding and event handling.

🔧 Barriers and How They Were Overcome:

Repeater not populating forecast: This was the most complex challenge. Initially, the forecast repeater failed to populate because of a mismatch between data length and repeater items. The solution involved slicing the forecast data to match the number of UI elements, and ensuring an _id property was included in each item.
Image not showing in Safari: Fixed by using the full https: prefix for weather icon URLs.
Radio buttons missing values: Resolved by enabling Velo Dev Mode, which revealed the value fields hidden from the basic editor.
Repeater image not loading: Discovered that a Vector Image was being used, which doesn't accept .src in code. Replacing it with a standard Image element solved the issue.
Wix Editor crashes: Temporarily blocked progress; resolved by switching browsers and platforms (Safari to Chrome on desktop).

🔍 Tools Used:

Wix Editor with Velo (Dev Mode)
JavaScript (client-side only)
WeatherAPI.com (external API)
Browser developer tools (console debugging)

💡 Learning and Resourcefulness:

While I already had programming experience, I relied on tools like ChatGPT to debug code and clarify platform-specific behaviors efficiently. This reflects how I work in real-life dev environments—resourcefully and with urgency, leveraging tools to meet deadlines.

📎 Project Link:

## https://nicktheki.wixsite.com/weatherapi

💼 Relevance to Role:

## This project demonstrates:

- Practical front-end skills in a real-world constraint (Wix + Velo)
- Ability to adapt to unfamiliar tools quickly
- Strong problem-solving and persistence
- Clean, functional, and complete implementation
