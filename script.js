const button = document.getElementById("search-button");
const input = document.getElementById("city-input");


const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


async function getData(cityName) {
  const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key= e6571adc62124c0893660821242009&q=${cityName}&aqi=yes`);
  return await promise.json()
}

button.addEventListener("click",async () =>{
    // alert("clicked");
    const value = input.value;
    const result = await getData(value);
    // console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    

     
});