const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();


//get weather when DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    weather.changeLocation(city, country);
    storage.setLocationData(city, country);
    getWeather();
    $('#locModal').modal('hide');


})


function getWeather() {
    weather.getWeather()
        .then(results => {
           // console.log(results.wind.speed)
            ui.paint(results);
        })
        .catch(err => console.log(err))
}