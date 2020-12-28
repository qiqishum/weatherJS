//UI

class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        // this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
        this.location = document.getElementById('w-location');
        this.feelslike = document.getElementById('w-feels-like')

    }

    //paint ui with results
    paint(weather) {
        const tempC = (weather.main.temp - 273.15).toFixed(0);
        const feelsLike = (weather.main.feels_like - 273.15).toFixed(0);
        const iconCode = weather.weather[0].icon;
        const humiCode = weather.main.humidity;
        const countryName = weather.sys.country;
        const windC = (weather.wind.speed * 3.6).toFixed(0);
        this.location.textContent = weather.name + ', ' + countryName;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = tempC + ' °C';
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconCode}@2x.png`)
        this.humidity.textContent = `Relative Humidity : ${humiCode} %`;
        this.feelslike.textContent = `Feels Like : ${feelsLike} °C`;
        this.wind.textContent = `Wind : ${windC} km/hr`;
        this.pressure.textContent = 'Pressure : ' + weather.main.pressure + ' hPa';

    }
}
