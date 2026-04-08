document.addEventListener("DOMContentLoaded", () => {
    if (!mapToken) {
        console.error("Map token missing!");
        return;
    }

    const map = new maplibregl.Map({
        container: "map",
        style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
        center: coordinates,
        zoom: 10
    });

    new maplibregl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
});