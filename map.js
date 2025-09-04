mapboxgl.accessToken = 'pk.eyJ1Ijoia2V3ZXJuZXIiLCJhIjoiY21hdzdmNjQ0MDlkbDJsc2RpdW1wbXM4ZyJ9.TaOtqpOOoXZI2SYSPJVaOg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kewerner/cjcvpi18c0oxl2rpzlbzxki2m', //clpv72kf201dq01qtd03ig1ka' //clpv72kf201dq01qtd03ig1ka', //ckz8gxm82000z14p666y9alzh',
    center: [12.48200, 41.9050],
    hash: false, // attention: conflict with regular id-based hashes
    zoom: 15,
    bearing: 0,
    pitch: 0,
    antialias: true
});

// $(document).ready(function() {
//     // Open div when clicking RIGHT
//     $('.slidePoints').click(function() {
//         $('#slidePoints').slideToggle(300);
//     });
// });

$( function() {
    $( "#maps" ).accordion();
} );

const bounds = [
    [12.40, 41.81], // [west, south]
    [12.7, 41.95]  // [east, north]
];

map.setMaxBounds(bounds);

$("#welcome").delay( 3000 ).fadeOut('5000');


// const slider = document.getElementById('slider');

const layerList = document.getElementById('maps');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        // $("#welcome").fadeOut('5000');
        map.setStyle('mapbox://styles/kewerner/' + layerId);
    };
}

// new approach raster tiles instead of styles:
// var sliderLigorio1561 = document.getElementById('sliderLigorio1561');
// var sliderBlaeu1663 = document.getElementById('sliderBlaeu1663');
// var sliderFabretti1680 = document.getElementById('sliderFabretti1680');
// var sliderNolli1748 = document.getElementById('sliderNolli1748');
// var sliderVasi1781 = document.getElementById('sliderVasi1781');
// var sliderIngenieri1821 = document.getElementById('sliderIngenieri1821');
// var sliderCenso1829 = document.getElementById('sliderCenso1829');
// var sliderRuga1832 = document.getElementById('sliderRuga1832');
// var sliderCGregoriano1835 = document.getElementById('sliderCGregoriano1835');
// var sliderCRustico1835 = document.getElementById('sliderCRustico1835');
// var sliderRuga1835 = document.getElementById('sliderRuga1835');
// var sliderTrojani1839 = document.getElementById('sliderTrojani1839');
// var sliderCenso1866 = document.getElementById('sliderCenso1866');
// var sliderMaggi1875 = document.getElementById('sliderMaggi1875');
// var sliderSpithoever1881 = document.getElementById('sliderSpithoever1881');
// var sliderPiano1882 = document.getElementById('sliderPiano1882');
// var sliderVirano1888 = document.getElementById('sliderVirano1888');
// var sliderArtiGraf1935 = document.getElementById('sliderArtiGraf1935');
// var sliderIGM25k1940 = document.getElementById('sliderIGM25k1940');
// var sliderSignorelli1950 = document.getElementById('sliderSignorelli1950');
// var sliderCTR2020 = document.getElementById('sliderCTR2020');

map.on('style.load', () => {

    // new approach raster tiles instead of styles:

    map.addSource('Ligorio1561', {
        'type': 'raster',
        'url': 'mapbox://kewerner.4px6csms'
    });
    map.addLayer({
        'id': 'Ligorio1561',
        'source': 'Ligorio1561',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderLigorio1561.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Ligorio1561',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    map.addSource('Blaeu1663', {
        'type': 'raster',
        'url': 'mapbox://kewerner.6imzrhkp'
    });
    map.addLayer({
        'id': 'Blaeu1663',
        'source': 'Blaeu1663',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderBlaeu1663.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Blaeu1663',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('Fabretti1680', {
        'type': 'raster',
        'url': 'mapbox://kewerner.cq3bwln5'
    });
    map.addLayer({
        'id': 'Fabretti1680',
        'source': 'Fabretti1680',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderFabretti1680.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Fabretti1680',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });


    map.addSource('Nolli1748', {
        'type': 'raster',
        'url': 'mapbox://kewerner.nollidg1403481'
    });
    map.addLayer({
        'id': 'Nolli1748',
        'source': 'Nolli1748',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderNolli1748.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Nolli1748',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });


    map.addSource('Vasi1781', {
        'type': 'raster',
        'url': 'mapbox://kewerner.3xr1zv5p'
    });
    map.addLayer({
        'id': 'Vasi1781',
        'source': 'Vasi1781',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderVasi1781.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Vasi1781',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('Ingegnieri1821', {
        'type': 'raster',
        'url': 'mapbox://kewerner.098024f3'
    });
    map.addLayer({
        'id': 'Ingegnieri1821',
        'source': 'Ingegnieri1821',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderIngegnieri1821.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Ingegnieri1821',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoPigna01', {
        'type': 'raster',
        'url': 'mapbox://kewerner.crafjfxl'
    });
    map.addLayer({
        'id': 'CatUrbanoPigna01',
        'source': 'CatUrbanoPigna01',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoPigna01.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoPigna01',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoCampoMarzio02', {
        'type': 'raster',
        'url': 'mapbox://kewerner.01isrivp'
    });
    map.addLayer({
        'id': 'CatUrbanoCampoMarzio02',
        'source': 'CatUrbanoCampoMarzio02',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoCampoMarzio02.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoCampoMarzio02',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoCampoMarzio04', {
        'type': 'raster',
        'url': 'mapbox://kewerner.6bagejnb'
    });
    map.addLayer({
        'id': 'CatUrbanoCampoMarzio04',
        'source': 'CatUrbanoCampoMarzio04',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoCampoMarzio04.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoCampoMarzio04',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoCampoMarzio06', {
        'type': 'raster',
        'url': 'mapbox://kewerner.9f4rii7l'
    });
    map.addLayer({
        'id': 'CatUrbanoCampoMarzio06',
        'source': 'CatUrbanoCampoMarzio06',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoCampoMarzio06.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoCampoMarzio06',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoColonna04', {
        'type': 'raster',
        'url': 'mapbox://kewerner.2isi2m17'
    });
    map.addLayer({
        'id': 'CatUrbanoColonna04',
        'source': 'CatUrbanoColonna04',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoColonna04.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoColonna04',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoTrevi02', {
        'type': 'raster',
        'url': 'mapbox://kewerner.anhq6gpb'
    });
    map.addLayer({
        'id': 'CatUrbanoTrevi02',
        'source': 'CatUrbanoTrevi02',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoTrevi02.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoTrevi02',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CatUrbanoTrevi04', {
        'type': 'raster',
        'url': 'mapbox://kewerner.47llp60k'
    });
    map.addLayer({
        'id': 'CatUrbanoTrevi04',
        'source': 'CatUrbanoTrevi04',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCatUrbanoTrevi04.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CatUrbanoTrevi04',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });


    // follows Dg150-4290 :
    map.addSource('Censo1829', {
        'type': 'raster',
        'url': 'mapbox://kewerner.2d6nzzr1'
    });
    map.addLayer({
        'id': 'Censo1829',
        'source': 'Censo1829',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCenso1829.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Censo1829',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    // follows Dg150-4320 :
    map.addSource('Ruga1832', {
        'type': 'raster',
        'url': 'mapbox://kewerner.cvlrq6mj'
    });
    map.addLayer({
        'id': 'Ruga1832',
        'source': 'Ruga1832',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderRuga1832.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Ruga1832',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('CGregoriano1835', {
        'type': 'raster',
        'url': 'mapbox://kewerner.b2stqxqs'
    });
    map.addLayer({
        'id': 'CGregoriano1835',
        'source': 'CGregoriano1835',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCGregoriano1835.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CGregoriano1835',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

     map.addSource('CRustico1835', {
        'type': 'raster',
        'url': 'mapbox://kewerner.09qw7ojm'
    });
    map.addLayer({
        'id': 'CRustico1835',
        'source': 'CRustico1835',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCRustico1835.addEventListener('input', function(e) {
        map.setPaintProperty(
            'CRustico1835',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    map.addSource('Ruga1835', {
        'type': 'raster',
        'url': 'mapbox://kewerner.c1bblrth'
    });
    map.addLayer({
        'id': 'Ruga1835',
        'source': 'Ruga1835',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderRuga1835.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Ruga1835',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('Trojani1839', {
        'type': 'raster',
        'url': 'mapbox://kewerner.ch4tq3zq'
    });
    map.addLayer({
        'id': 'Trojani1839',
        'source': 'Trojani1839',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderTrojani1839.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Trojani1839',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    // follows Dg155-4660 :
    map.addSource('Censo1866', {
        'type': 'raster',
        'url': 'mapbox://kewerner.c4vqwjzq'
    });
    map.addLayer({
        'id': 'Censo1866',
        'source': 'Censo1866',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderCenso1866.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Censo1866',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    // follows Dg155-4750 :
    map.addSource('Maggi1875', {
        'type': 'raster',
        'url': 'mapbox://kewerner.33n9rnp6'
    });
    map.addLayer({
        'id': 'Maggi1875',
        'source': 'Maggi1875',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderMaggi1875.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Maggi1875',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    // follows Dg155-4810 :
    map.addSource('Spithoever1881', {
        'type': 'raster',
        'url': 'mapbox://kewerner.dbfy17cj'
    });
    map.addLayer({
        'id': 'Spithoever1881',
        'source': 'Spithoever1881',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderSpithoever1881.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Spithoever1881',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    map.addSource('Piano1882', {
        'type': 'raster',
        'url': 'mapbox://kewerner.16uej3d7'
    });
    map.addLayer({
        'id': 'Piano1882',
        'source': 'Piano1882',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderPiano1882.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Piano1882',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    // follows Dg155-4880 :
    map.addSource('Virano1888', {
        'type': 'raster',
        'url': 'mapbox://kewerner.8lslgx7r'
    });
    map.addLayer({
        'id': 'Virano1888',
        'source': 'Virano1888',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderVirano1888.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Virano1888',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    // follows Dg160-5351 :
    map.addSource('ArtiGraf1935', {
        'type': 'raster',
        'url': 'mapbox://kewerner.5b6zvtym'
    });
    map.addLayer({
        'id': 'ArtiGraf1935',
        'source': 'ArtiGraf1935',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderArtiGraf1935.addEventListener('input', function(e) {
        map.setPaintProperty(
            'ArtiGraf1935',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });
    map.addSource('IGM25k1940', {
        'type': 'raster',
        'url': 'mapbox://kewerner.ajebhzye'
    });
    map.addLayer({
        'id': 'IGM25k1940',
        'source': 'IGM25k1940',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderIGM25k1940.addEventListener('input', function(e) {
        map.setPaintProperty(
            'IGM25k1940',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    // follows Dg165-5501 :
    map.addSource('Signorelli1950', {
        'type': 'raster',
        'url': 'mapbox://kewerner.7f9jv378'
    });
    map.addLayer({
        'id': 'Signorelli1950',
        'source': 'Signorelli1950',
        'type': 'raster',
        'paint': {
            'raster-opacity': 0
        }
    });
    sliderSignorelli1950.addEventListener('input', function(e) {
        map.setPaintProperty(
            'Signorelli1950',
            'raster-opacity',
            parseInt(e.target.value, 10) / 100
        );
    });

    // bad quality:
    // map.addSource('CTR2020', {
    //     'type': 'raster',
    //     'url': 'mapbox://kewerner.62130ms1'
    // });
    // map.addLayer({
    //     'id': 'CTR2020',
    //     'source': 'CTR2020',
    //     'type': 'raster',
    //     'paint': {
    //         'raster-opacity': 0
    //     }
    // });
    // sliderCTR2020.addEventListener('input', function(e) {
    //     map.setPaintProperty(
    //         'CTR2020',
    //         'raster-opacity',
    //         parseInt(e.target.value, 10) / 100
    //     );
    // });

    // end of new approach raster tiles instead of styles:

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
        "type": "line", //fill-extrusion
        "slot": "top",
        "source": "percorso-line",
        "paint": {
          "line-elevation-reference": "ground",
          "line-gap-width": 6,
            "line-opacity": 1,
            "line-color": "royalblue",
            "line-width": 2,
            // "line-dasharray": [3, 1],
        },        "interactive": true
    });
    map.addLayer({
        "id": "places-poly",
        "type": "fill-extrusion",
        "slot": "top",
        "source": "places-poly",
        "layout": {
            'text-z-elevate': true,
        },
        "paint": {
            'fill-extrusion-height': 1,
            'fill-extrusion-base': 10,
            'fill-extrusion-color': 'royalblue',
            'fill-extrusion-opacity': 0.75
        },
        "interactive": true
    });
    map.addLayer({
        "id": "places-circle",
        "type": "circle",
        "slot": "top",
        "source": "places",
        'paint': {
            'circle-color': 'royalblue',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': 'white'
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
            'text-color': 'royalblue',
            'text-halo-color': 'white', //antiquewhite
            'text-halo-width': 0.1
        },
        "interactive": true
    });

});

// let toggler = document.querySelector(".toggler");
//
// window.addEventListener("click", event => {
//   if(event.target.className == "toggler" || event.target.className == "toggle") {
//     document.body.classList.toggle("show-nav");
//   } else if (event.target.className == "overlay") {
//     document.body.classList.remove("show-nav");
//   }
//   // Change Toggler Icon
//   if(document.body.className == "show-nav") {
//     toggler.innerHTML = "&laquo";
//   } else {
//     toggler.innerHTML = "&raquo";
//   }
// });

map.on('click', function(e) {

    // $("#welcome").fadeOut('5000');

    var features = map.queryRenderedFeatures(e.point, {
        layers: ['places-poly', 'places-label', 'places-circle']
    });
    if (!features.length) {
        document.getElementById('features').setAttribute('class', 'hidden');
        return;
    }
    // else {
    //     document.getElementById('features').addAttribute('class');
    // }
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

document.getElementById('points').onclick = function(e) {
    var pos = e.target.getAttribute('data-id');
    // $("#welcome").fadeOut('5000');
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


document.getElementById('urbe').addEventListener('click', () => {
    map.flyTo({
        center: [ 12.48, 41.903741  ],
        zoom: 14,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('suburbio').addEventListener('click', () => {
    map.flyTo({
        center: [ 12.585036, 41.903741  ],
        zoom: 13,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});
document.getElementById('caturbano').addEventListener('click', () => {
    map.flyTo({
        center: [ 12.483, 41.903741  ],
        zoom: 15,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

Fancybox.bind("[data-fancybox]", {

});

map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
map.addControl(new mapboxgl.FullscreenControl(), 'bottom-left');
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    }), 'bottom-left'
);