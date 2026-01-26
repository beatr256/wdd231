const tempSpan = document.querySelector("#temp");
const descSpan = document.querySelector("#desc");
const forecastDiv = document.querySelector("#forecast");

const lat = 0.44;   // Jinja latitude
const lon = 33.20;  // Jinja longitude
const apiKey = "YOUR_API_KEY";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    tempSpan.textContent = data.list[0].main.temp.toFixed(1);
    descSpan.textContent = data.list[0].weather[0].description;

    const forecastDays = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    forecastDays.forEach(day => {
        const p = document.createElement("p");
        p.textContent = `${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp.toFixed(1)}°C`;
        forecastDiv.appendChild(p);
    });
}

getWeather();
