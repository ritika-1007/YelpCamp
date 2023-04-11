mapboxgl.accessToken = mapToken;
const showMapCampground = JSON.parse(campground);

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: showMapCampground.geometry.coordinates, // starting position [lng, lat]
    zoom: 12, // starting zoom
});

const marker1 = new mapboxgl.Marker()
    .setLngLat(showMapCampground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${showMapCampground.title}</h3><p>${showMapCampground.location}</p>`
            )
    )
    .addTo(map);
