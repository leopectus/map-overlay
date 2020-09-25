// IMPORTANT: Replace the apikey with your own from https://developer.here.com
let apiKey = 'gu2xI9YN1IE6pyN2NXUWHy-cilUtvePc9tKShlNwCY0';

// Step 1: set up a basic map
let platform = new H.service.Platform({
  apikey: 'apiKey'
});
let defaultLayers = platform.createDefaultLayers();

let map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map, {
  center: { lat: 40.71, lng: -74.01 },
  zoom: 14,
  pixelRatio: window.devicePixelRatio || 1
});

window.addEventListener('resize', () => map.getViewPort().resize());
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
let ui = H.ui.UI.createDefault(map, defaultLayers);

function addOverlayToMap() {

  // Step 2: get an overlay image
  let overlayImage = new Image();
  overlayImage.src = '/overlay.png';

  // Step 3: create an overlay object and add it to the map
  let overlay = new H.map.Overlay(
    new H.geo.Rect(
      40.73822, -74.03192,
      40.69484, -73.96696
    ),
    overlayImage,
    {
      volatility: true,
      opacity: 0.7
    }
  );

  map.addObject(overlay);

}

addOverlayToMap();
