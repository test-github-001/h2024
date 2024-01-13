function getLocation() {
    navigator.geolocation.getCurrentPosition(showMap, showError);
}

function showMap(position) {
    const { latitude, longitude } = position.coords;
    const map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([latitude, longitude]).addTo(map).bindPopup('место доставки медведя ').openPopup();
}

function showError() {
    alert("Геолокация недоступна.");
}