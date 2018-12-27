var map = L.map('map').fitWorld();

var googleRoadmapLayer = L.gridLayer.googleMutant({type: 'roadmap'});
var osmMapLayer;
var cycleMapLayer;
var transportMapLayer;
var landscapeMapLayer;
var satelliteMapLayer;
var googleRoadmapLayer;
var aqiLayer;

var mapFeatureGroup = L.featureGroup([googleRoadmapLayer]);
var layerFeatureGroup = L.featureGroup();
mapFeatureGroup.addTo(map);
layerFeatureGroup.addTo(map);
L.control.scale({maxWidth: 150}).addTo(map);

var lastInsertedLayer;
var lastInsertedMapLayer = googleRoadmapLayer;
var lastInsertedGoogleLayer;

function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
  L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
  alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});

window.onload = function() {

  var googleRoadmapLink = document.getElementById("googleroadmap");
  var googleTrafficMapLink = document.getElementById("googletraffic");
  var googleTransitMapLink = document.getElementById("googletransit");
  var googleBicyclingMapLink = document.getElementById("googlebike");
  var osmMapLink = document.getElementById("openstreetmap");
  var cycleMapLink = document.getElementById("cycle");
  var transportMapLink = document.getElementById("transport");
  var landscapeMapLink = document.getElementById("landscape");
  var satelliteMapLink = document.getElementById("satellite");
  var aqiLink = document.getElementById("aqi");
  var removeLayerLink = document.getElementById("removelayer");

  googleRoadmapLink.onclick = function() {

    if (lastInsertedGoogleLayer !== undefined) {
      googleRoadmapLayer.removeGoogleLayer(lastInsertedGoogleLayer);
      lastInsertedGoogleLayer = undefined;
    }
    
    if (lastInsertedMapLayer !== googleRoadmapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(googleRoadmapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = googleRoadmapLayer;
    }

    return false;
  }

  googleTrafficMapLink.onclick = function() {

    if (lastInsertedGoogleLayer === undefined) {
      lastInsertedGoogleLayer = 'TrafficLayer';
      googleRoadmapLayer.addGoogleLayer(lastInsertedGoogleLayer);
    } else if (lastInsertedGoogleLayer !== 'TrafficLayer') {
      googleRoadmapLayer.removeGoogleLayer(lastInsertedGoogleLayer);
      lastInsertedGoogleLayer = 'TrafficLayer';
      googleRoadmapLayer.addGoogleLayer(lastInsertedGoogleLayer);
    }

    if (lastInsertedMapLayer !== googleRoadmapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(googleRoadmapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = googleRoadmapLayer;
    }

    return false;
  }

  googleTransitMapLink.onclick = function() {

    if (lastInsertedGoogleLayer === undefined) {
      lastInsertedGoogleLayer = 'TransitLayer';
      googleRoadmapLayer.addGoogleLayer(lastInsertedGoogleLayer);
    } else if (lastInsertedGoogleLayer !== 'TransitLayer') {
      googleRoadmapLayer.removeGoogleLayer(lastInsertedGoogleLayer);
      lastInsertedGoogleLayer = 'TransitLayer';
      googleRoadmapLayer.addGoogleLayer(lastInsertedGoogleLayer);
    }

    if (lastInsertedMapLayer !== googleRoadmapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(googleRoadmapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = googleRoadmapLayer;
    }

    return false;
  }

  googleBicyclingMapLink.onclick = function() {

    if (lastInsertedGoogleLayer === undefined) {
      lastInsertedGoogleLayer = 'BicyclingLayer';
      googleRoadmapLayer.addGoogleLayer(lastInsertedGoogleLayer);
    } else if (lastInsertedGoogleLayer !== 'BicyclingLayer') {
      googleRoadmapLayer.removeGoogleLayer(lastInsertedGoogleLayer);
      lastInsertedGoogleLayer = 'BicyclingLayer';
      googleRoadmapLayer.addGoogleLayer(lastInsertedGoogleLayer);
    }

    if (lastInsertedMapLayer !== googleRoadmapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(googleRoadmapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = googleRoadmapLayer;
    }

    return false;
  }

  osmMapLink.onclick = function() {

    if (osmMapLayer === undefined) {
      osmMapLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: 'mapbox.streets',
        accessToken: config.mapboxKey
      });
    }

    if (lastInsertedMapLayer !== osmMapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(osmMapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = osmMapLayer;
    }

    return false;
  }

  cycleMapLink.onclick = function() {

    if (cycleMapLayer === undefined) {
      cycleMapLayer = L.tileLayer('https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={apiKey}', {
        id: 'cycle',
        apiKey: config.thunderforestKey
      });
    }

    if (lastInsertedMapLayer !== cycleMapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(cycleMapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = cycleMapLayer;
    }

    return false;
  }

  transportMapLink.onclick = function() {

    if (transportMapLayer === undefined) {
      transportMapLayer = L.tileLayer('https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={apiKey}', {
        id: 'transport-dark',
        apiKey: config.thunderforestKey
      });
    }

    if (lastInsertedMapLayer !== transportMapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(transportMapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = transportMapLayer;
    }

    return false;
  }

  landscapeMapLink.onclick = function() {

    if (landscapeMapLayer === undefined) {
      landscapeMapLayer = L.tileLayer('https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={apiKey}', {
        id: 'landscape',
        apiKey: config.thunderforestKey
      });
    }

    if (lastInsertedMapLayer !== landscapeMapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(landscapeMapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = landscapeMapLayer;
    }

    return false;
  }

  satelliteMapLink.onclick = function() {

    if (satelliteMapLayer === undefined) {
      satelliteMapLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        id: 'mapbox.streets-satellite',
        accessToken: config.mapboxKey
      });
    }

    if (lastInsertedMapLayer !== satelliteMapLayer) {
      mapFeatureGroup.removeLayer(lastInsertedMapLayer);
      mapFeatureGroup.addLayer(satelliteMapLayer);
      layerFeatureGroup.bringToFront();
      lastInsertedMapLayer = satelliteMapLayer;
    }

    return false;
  }

  aqiLink.onclick = function() {

    if (aqiLayer === undefined) {
      aqiLayer = L.tileLayer('https://tiles.waqi.info/tiles/{aqi}/{z}/{x}/{y}.png?token={accessToken}', {
        aqi: 'usepa-aqi',
        accessToken: config.waqiKey
      });
    }

    if (lastInsertedLayer !== undefined && lastInsertedLayer !== aqiLayer) {
      layerFeatureGroup.removeLayer(lastInsertedLayer);
      layerFeatureGroup.addLayer(aqiLayer);
      lastInsertedLayer = aqiLayer;
    } else if (lastInsertedLayer === undefined) {
      layerFeatureGroup.addLayer(aqiLayer);
      lastInsertedLayer = aqiLayer;
    }

    return false;
  }

  removeLayerLink.onclick = function() {
    if (lastInsertedLayer !== undefined) {
      layerFeatureGroup.removeLayer(lastInsertedLayer);
      lastInsertedLayer = undefined;
    }

    return false;
  }
}
