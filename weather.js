class Weather {
    constructor(city, country) {
        this.apiKey = '906bc15c339248f84f34d694671caf2c';
        this.city = city;
        this.country = country;
    }


    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.province}&appid=${this.apiKey}`)
        const responseData = await response.json();
       return responseData;


    }
changeLocation(city, country) {
        this.city = city;
        this.country = country;
}

}