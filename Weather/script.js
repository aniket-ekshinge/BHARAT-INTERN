document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "98eab6f10164978b2a46cf65612e9c69"; 
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function() {
      const cityInput = document.getElementById('cityInput').value.trim();
      if (cityInput === '') {
        alert('Please enter a city name');
        return;
      }
  
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const location = data.name;
          const temperature = Math.round(data.main.temp) + '°C';
          const description = data.weather[0].description;
  
          document.getElementById('location').innerText = 'Location: ' + location;
          document.getElementById('temperature').innerText = 'Temperature: ' + temperature;
          document.getElementById('description').innerText = 'Description: ' + description;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          alert('Failed to fetch weather data. Please try again.');
        });
    });
  });
  