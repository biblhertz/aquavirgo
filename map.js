mapboxgl.accessToken = 'pk.eyJ1Ijoia2V3ZXJuZXIiLCJhIjoiY21hdzdmNjQ0MDlkbDJsc2RpdW1wbXM4ZyJ9.TaOtqpOOoXZI2SYSPJVaOg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kewerner/clpv72kf201dq01qtd03ig1ka', //clpv72kf201dq01qtd03ig1ka', //ckz8gxm82000z14p666y9alzh',
    center: [12.51000, 41.9050],
    hash: false, // otherwise conflict with regular id-based hashes
    zoom: 13,
    bearing: -10,
    pitch: 25,
    antialias: true
});

const bounds = [
    [12.40, 41.81], // [west, south]
    [12.7, 41.95]  // [east, north]
];

map.setMaxBounds(bounds);

// const slider = document.getElementById('slider');

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        $("#welcome").fadeOut('5000');
        map.setStyle('mapbox://styles/kewerner/' + layerId);
    };
}

map.on('style.load', () => {

    map.addSource('percorso-line', {
        'type': 'geojson',
        'data': 'percorso.geojson'
    });
    map.addSource('places-poly', {
        'type': 'geojson',
        'data': 'places-polygon.geojson'
    });
    map.addSource('places', {
        'type': 'geojson',
        'data': 'places.geojson'
    });
    map.addLayer({
        "id": "percorso",
        "type": "line",
        "slot": "top",
        "source": "percorso-line",
        // "layout": {
        //     'text-z-elevate': true,
        // },
        "paint": {
            "line-opacity": 0.5,
            "line-color": "blue",
            "line-width": 5,
        },        "interactive": true
    });
    map.addLayer({
        "id": "places-poly",
        "type": "fill-extrusion",
        "source": "places-poly",
        "layout": {
            'text-z-elevate': true,
        },
        "paint": {
            'fill-extrusion-height': 1,
            'fill-extrusion-base': 10,
            'fill-extrusion-color': 'blue',
            'fill-extrusion-opacity': 0.25
        },
        "interactive": true
    });
    map.addLayer({
        "id": "places-circle",
        "type": "circle",
        "source": "places",
        "slot": "middle",
        'paint': {
            'circle-color': '#4264fb',
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        },
        "layout": {
            'circle-z-elevate': true,
        },
        "interactive": true
    });
    map.addLayer({
        "id": "places-label",
        "type": "symbol",
        "source": "places",
        "slot": "top",
        'layout': {
            'symbol-z-elevate': true,
            'text-field': ['get', 'title'],
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold']
        },
        'paint': {
            'text-color': 'darkblue',
            'text-halo-color': 'antiquewhite',
            'text-halo-width': 1
        },
        "interactive": true
    });

});
map.on('click', function(e) {

    $("#welcome").fadeOut('5000');

    var features = map.queryRenderedFeatures(e.point, {
        layers: ['places-poly', 'places-label', 'places-circle']
    });
    if (!features.length) {
        return;
    }
    var feature = features[0];
    window.open('#' + feature.properties.name, '_parent');
    document.getElementsByClassName('active')[0].removeAttribute("class");
    document.getElementById(feature.properties.name).setAttribute('class', 'active');
    document.getElementById('features').removeAttribute('class');
});

var placeNames = Object.keys(places);
for (var i = 0; i < placeNames.length; i++) {
    var placeName = placeNames[i];
};

document.getElementById('list').onclick = function(e) {
    var pos = e.target.getAttribute('data-id');
    $("#welcome").fadeOut('5000');
    if (pos !== null) {
        // document.getElementsByClassName('active')[0].removeAttribute("class");
        // e.target.setAttribute('class', 'active');
        map.flyTo(places[pos]);
//test
        window.open('#' + pos, '_parent');
        document.getElementsByClassName('active')[0].removeAttribute("class");
        document.getElementById(pos).setAttribute('class', 'active');
        document.getElementById('features').removeAttribute('class');
    }
};

Fancybox.bind("[data-fancybox]", {

});
