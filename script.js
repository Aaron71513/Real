function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    document.getElementById('time').textContent = `Time: ${time}`;
}

function updateSunset() {
    const sunsetHour = 19;
    const sunsetMinute = 45;
    const now = new Date();
    const sunset = new Date();
    sunset.setHours(sunsetHour, sunsetMinute, 0, 0);
    const diff = sunset - now;
    if (diff > 0) {
        const mins = Math.floor(diff / 60000);
        document.getElementById('sunset').textContent = `Time until sunset: ${mins} min`;
    } else {
        document.getElementById('sunset').textContent = `Sun has set.`;
    }
}

function loadSurfData() {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        document.getElementById('location').textContent = `Location: Island Beach State Park`;
        
        document.getElementById('weather').textContent = `Weather: Sunny, 73°F`;
        document.getElementById('waves').textContent = `Wave Interval: 5 min`;
        document.getElementById('tide').textContent = `Tide: Rising`;
    }, error => {
        document.getElementById('location').textContent = 'Location not available.';
    });
}

document.getElementById('trainingButton').addEventListener('click', () => {
    document.getElementById('trainingMode').classList.toggle('hidden');
});

updateTime();
updateSunset();
loadSurfData();
setInterval(updateTime, 60000);
setInterval(updateSunset, 60000);
