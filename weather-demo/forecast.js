function displayForecast(data){
    var current = data.properties.periods[0];
    var display = document.getElementById("forecast");
    display.textContent = "";
    var icon = document.createElement("img");
    icon.src = current.icon;
    var desc = document.createElement("p");
    desc.textContent = current.detailedForecast;
    display.appendChild(icon);
    display.appendChild(desc);
  }
  
  function useXHR(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', ()=>{
        displayForecast(JSON.parse(xhr.responseText));
    });
    const url = "https://api.weather.gov/gridpoints/TOP/48,54/forecast";
    xhr.open("GET", url);
  
    xhr.send();
    
  }
  
  window.addEventListener('load', function(){
    useXHR();
    const oneHour = 60 * 60 * 1000;
    setInterval(useXHR, oneHour);
  });