
mapboxgl.accessToken = 'pk.eyJ1Ijoicy1zb2xvbW9uIiwiYSI6ImNramh0ZjJhZTNpM3IydG10djk5aDRkdXMifQ.VEAehfjXO_IPK-N9ktPmXQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-0.1278, 51.5074])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
      
    map.addControl(directions, 'top-left');
}

