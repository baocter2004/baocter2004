var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");


async function changeWeatherUI(capitalSearch) {
    
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=a1a2aabd8116860e28163ef78f6f0dc7`;

    let data = await fetch(urlApi).then(res => res.json());

    if (data.cod == 200) {
        content.classList.remove('hide');

        console.log(data);

        city.innerText = data.name;
        country.innerText = data.sys.country;

        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';

        let temp = Math.round(data.main.temp);
        value.innerText  = temp;
        shortDesc.innerText = data.weather[0].main;
        time.innerText = new Date().toLocaleString("vi");
        console.log(temp);
        if(temp < 20){
            body.setAttribute('class','cold');
        }else if(temp < 26){
            body.setAttribute('class','warm');
        }else{
            body.setAttribute('class','hot');
        }
    } else {
        content.classList.add('hide');
    }
}

search.addEventListener('keypress',function(e){
    if(e.code === "Enter"){
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})
changeWeatherUI("Ha Noi");