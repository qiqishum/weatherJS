//init storage
const storage = new Storage();

//get stored location date
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//init ui
const ui = new UI();


//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    //get the value from the input
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //call changeLocation()
    weather.changeLocation(city, country);

    //set location in localStorage
    storage.setLocationData(city, country);

    //get new response and repaint ui from new request
    getWeather();

    //jquery close the modal
    $('#locModal').modal('hide');
})

//get weather when DOM load
function getWeather() {
    weather.getWeather()
        .then(results => {
            // console.log(results.wind.speed)
            // call ui method paint the results back from the async method getWeather()
            ui.paint(results);
        })
        .catch(err => console.log(err))
}
