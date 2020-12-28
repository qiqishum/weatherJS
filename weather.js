//weather class, make request to API

class Weather {
    constructor(city, country) {
        this.apiKey = '906bc15c339248f84f34d694671caf2c';
        this.city = city;
        this.country = country;
    }


    //Fetch weather from API
    // async getWeather() will return a promise
    async getWeather() {

        //response variable
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.province}&appid=${this.apiKey}`)

        //response data
        const responseData = await response.json();
        return responseData;
    }

    //pass in new city and country
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}
