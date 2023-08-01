// const heading = document.querySelectorAll(".heading path");

// for (let i = 0; i < heading.length; i++) {
//   console.log(`Letter ${i} is ${heading[i].getTotalLength()}`);
// }

const theme = document.querySelector("#toggleTheme");
const bgLight = document.querySelector("#bgLight");
const bgDark = document.querySelector("#bgDark");
const bgVideo = document.querySelector(".videoBg");
const container = document.querySelector(".container");

theme.addEventListener("click", ()=>{
  if(theme.classList.contains("fa-lightbulb")){
    theme.classList.remove("fa-lightbulb");
    theme.classList.add("fa-moon");
    container.style.backgroundImage = "url(./sunset1.jpg)"
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
    container.style.backgroundSize = "cover";
  }else{
    theme.classList.remove("fa-moon");
    theme.classList.add("fa-lightbulb");
    container.style.backgroundImage = "url(./wallpaperflare.com_wallpaper.jpg)"
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
    container.style.backgroundSize = "cover";
  }
})

const searchBtn = document.querySelector("#searchBtn");
const firstBox = document.querySelector(".firstBox");
const displayBox = document.querySelector(".displayBox");
const inputBox = document.querySelector(".inputBox");
const heading = document.querySelector(".heading");

searchBtn.addEventListener("click", ()=>{
  firstBox.style.opacity = "0";
  displayBox.style.opacity = "1";
});
window.addEventListener('DOMContentLoaded', ()=>{
  inputBox.style.opacity = "1";
})


const Img = document.querySelector(".icon");
const Description = document.querySelector(".descriptionSpan");
const Temp = document.querySelector(".infoSpan");
const FeelsLike = document.querySelector(".infoSpan1");
const maxTemp = document.querySelector(".infoSpan2");
const minTemp = document.querySelector(".infoSpan3");
const Humidity = document.querySelector(".infoSpan4");
const Pressure = document.querySelector(".infoSpan5");
const visibility = document.querySelector(".infoSpan6");
const Speed = document.querySelector(".infoSpan7");
const Deg = document.querySelector(".infoSpan8");


// API scripting
let weather = {
  apiKey: "5d6a46f182c45a07120673cee3574afd",
  fetchingWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey).then((response)=>response.json()).then((data)=>this.showWeather(data))
  },
  showWeather:function(data){
    const{name} = data;
    const {icon, description} = data.weather[0];
    const{temp, feels_like, temp_max, temp_min, humidity, pressure} = data.main;
    const {speed, deg} = data.wind;
    const visiblity = data.visibility;
    Img.src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    Description.innerText = description;
    Temp.innerText = "Temp: "+ temp +"°";
    FeelsLike.innerText = "Feels Like: "+ feels_like +"°";
    maxTemp.innerText = "Max Temp: "+ temp_max +"°";
    minTemp.innerText = "Min Temp: "+ temp_min +"°";
    Humidity.innerText = "Humidity: "+ humidity;
    Pressure.innerText = "Pressure: "+ pressure;
    Speed.innerText = "Wind Speed: "+ speed +"km/h";
    Deg.innerText = "Wind degree: "+ deg +"°";
    visibility.innerText = "Visiblity: "+ visiblity;
  },
  search: function(){
    this.fetchingWeather(document.querySelector(".input").value);
    this.fetchingWeather(document.querySelector(".searchBar").value);
  },
}
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn =>{
  btn.addEventListener("click", ()=>{
    weather.search();
  });
});
// document.querySelector(".searchBar").addEventListener("click", ()=>{
//     weather.searchFunc();
// });
// document.querySelector(".searchBtn").addEventListener("keypress",(event)=>{
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById(".searchBtn").click();
// }
// });






// Api key = 5d6a46f182c45a07120673cee3574afd


