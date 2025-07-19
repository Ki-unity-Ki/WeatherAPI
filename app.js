import { local } from 'wix-storage';
import { fetch } from 'wix-fetch';

$w.onReady(() => {
  $w('#spinner').hide();
  $w('#result').hide();

  // Load favorite city if saved
  const savedCity = local.getItem("favoriteCity");
  if (savedCity) {
    $w('#cityInput').value = savedCity;
    $w('#saveFavorite').checked = true;
    fetchWeather(savedCity, getSelectedUnit());
  }

  // Handle submit
  $w('#submitButton').onClick(() => {
    const city = $w('#cityInput').value.trim();
    if (!city) return;

    const unit = getSelectedUnit();

    // Save favorite if checked
    if ($w('#saveFavorite').checked) {
      local.setItem("favoriteCity", city);
    }

    fetchWeather(city, unit);
  });
});

function getSelectedUnit() {
  return $w('#unitToggle').value; // "F" or "C"
}

function fetchWeather(city, unit) {
  $w('#spinner').show();
  $w('#result').hide();

  const apiKey = 'd398a8ff231d403ab4a181441251307';
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

  fetch(apiUrl, { method: 'get' })
    .then(res => res.json())
    .then(data => {
      const current = data.current;
      const temp = unit === 'F' ? current.temp_f : current.temp_c;

      $w('#cityText').text = data.location.name;
      $w('#temperatureText').text = `${temp}°${unit}`;
      $w('#weatherIcon').src = 'https:' + current.condition.icon;

      // Build 3-day forecast (excluding today)
      const forecastItems = data.forecast.forecastday.slice(1, 4).map(day => ({
        _id: day.date,
        date: day.date,
        icon: 'https:' + day.day.condition.icon,
        temp: `${unit === 'F' ? day.day.avgtemp_f : day.day.avgtemp_c}°${unit}`
      }));

      // Bind repeater
      $w('#forecast').onItemReady(($item, itemData) => {
        $item('#forecastDate').text = itemData.date;
        $item('#forecastTemp').text = itemData.temp;
        $item('#forecastImage').src = itemData.icon;
      });

      $w('#forecast').data = forecastItems;

      $w('#spinner').hide();
      $w('#result').show('fade');
    });
}
