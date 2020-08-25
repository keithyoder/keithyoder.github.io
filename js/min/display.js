function latLng(array) {
  let latLngArray = [];

  for (let i = 0; i < array.length; i++) {
    const gData = new google.maps.LatLng(array[i][1], array[i][0]);
    latLngArray.push(gData);
  }
  return latLngArray;
}

function createZone(coords, color) {
  return new google.maps.Polygon({
    paths: latLng(coords),
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: color,
    fillOpacity: 0.35
  });  
}

function init() {
    map = new google.maps.Map(document.getElementById("map-holder"), {
        center: {
            lat: 33.824841654922096,
            lng: -84.10580722949305,
        },
        mapTypeId: "satellite",
        zoom: 20
        }), 
      map.data.setControls(["Polygon"]),
      map.data.setStyle({
            editable: true,
            draggable: true
      }), 
    bindDataLayerListeners(map.data)
    panel = document.getElementById("panel");
    const premisesCoords = latLng(
        [[-84.1057655275262, 33.824619455575146],
        [-84.10512912105052, 33.824757118465016],
        [-84.10504227405629, 33.82494307964843],
        [-84.10543003137438, 33.825545333468106],
        [-84.10556334554433, 33.825466527961865],
        [-84.10574063327378, 33.82512690795177],
        [-84.10600848746701, 33.824977190621524],
        [-84.1057655275262, 33.824619455575146]]);
    const premises = new google.maps.Polygon({
      paths: premisesCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillOpacity: 0
    });
    var e = document.getElementById("map-holder");
    geoJsonInput = document.getElementById("geojson-input");
    google.maps.event.addDomListener(window, "resize", resizeGeoJsonInput)
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.RIGHT].push(input);
    resizeGeoJsonInput();
    premises.setMap(map);
    createZone(
      [[-84.10563223841366, 33.8248064027899], [-84.10569725055014, 33.824899709778755], [-84.10563297706888, 33.82493330288104], [-84.1055701075564, 33.8248319273098], [-84.10563223841366, 33.8248064027899]]      
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10570323313353, 33.82490469282171], [-84.10577782159437, 33.825019585609205], [-84.10571217557647, 33.82504530155326], [-84.10563450152752, 33.824938381666044], [-84.10570323313353, 33.82490469282171]]
      ,'#982fb3').setMap(map);
    createZone(
      [[-84.10554843509802, 33.82490638575064], [-84.10544284407281, 33.82495488009923], [-84.10540188275975, 33.82488931719568], [-84.10550303137627, 33.82484108828227], [-84.10554843509802, 33.82490638575064]]
      ,'#982fb3').setMap(map);
    createZone(
      [[-84.10554304448654, 33.82490987170447], [-84.10558581314747, 33.82497161353719], [-84.10548560225637, 33.825018497610046], [-84.10544609729898, 33.8249559942112], [-84.10554304448654, 33.82490987170447]]
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10537133546474, 33.82507861048099], [-84.10542756231895, 33.82505043131779], [-84.10536929237584, 33.824970846347625], [-84.10531620349663, 33.82499647961838], [-84.10537133546474, 33.82507861048099]]
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10542635742037, 33.82516027560186], [-84.10536927142108, 33.82507865835292], [-84.10542607976983, 33.825050827349344], [-84.10548466403431, 33.825139873472935], [-84.10542635742037, 33.82516027560186]]
      ,'#982fb3').setMap(map);
    createZone(
      [[-84.10540043638481, 33.824729344873475], [-84.10523839324175, 33.8248030722664], [-84.10527141270155, 33.824853542483865], [-84.10542830097417, 33.82477642056756], [-84.10540043638481, 33.824729344873475]]
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10521602403766, 33.82484264506254], [-84.10514102172034, 33.82497616884233], [-84.10520562523904, 33.824995852930684], [-84.10526731604638, 33.82486304291039], [-84.10521602403766, 33.82484264506254]]
      ,'#982fb3').setMap(map);
    createZone(
      [[-84.10566899256243, 33.825128910808196], [-84.1056186487565, 33.82521568076149], [-84.10555596783685, 33.82519150982439], [-84.10560149728714, 33.82510548403723], [-84.10566899256243, 33.825128910808196]]
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10557231254803, 33.825301684677854], [-84.1056162075272, 33.82521860964842], [-84.10555333801473, 33.825192049470864], [-84.10551056411511, 33.82527754858091], [-84.10557231254803, 33.825301684677854]]
      ,'#982fb3').setMap(map);
    createZone(
      [[-84.10520585574137, 33.82499746752187], [-84.10526096675473, 33.82507918494416], [-84.10520234581942, 33.82510540570137], [-84.10514260380457, 33.825021281650116], [-84.10520585574137, 33.82499746752187]]
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10519941215331, 33.82510493133423], [-84.10526228690448, 33.82519042617939], [-84.10531862900986, 33.82516240807666], [-84.10526075720715, 33.825077518130605], [-84.10519941215331, 33.82510493133423]]
      ,'#982fb3').setMap(map);
    createZone(
      [[-84.10525930609016, 33.825190343491634], [-84.10532059351841, 33.82527552926056], [-84.10537806194203, 33.82524775924885], [-84.1053189590473, 33.825160610705055], [-84.10525930609016, 33.825190343491634]]
      ,'#ffcc00').setMap(map);
    createZone(
      [[-84.10531841946228, 33.82527602103469], [-84.10537880059725, 33.8253625427759], [-84.10543514794132, 33.82533521669448], [-84.10537694086248, 33.82524827713509], [-84.10531841946228, 33.82527602103469]]
      ,'#982fb3').setMap(map);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
}

function refreshGeoJsonFromData() {
    var first = true
    var total = 0;
    map.data.forEach(function(){ total++; });
    if (total > 1) {
        map.data.forEach(function(feature){
            if (first) {
                map.data.remove(feature);
                first = false
            };
        });
    };
    map.data.toGeoJson(function(e) {
        text = JSON.stringify(e.features[0].geometry.coordinates)
        geoJsonInput.value = text.substring(1, text.length - 1).replace(/\[/g, '(').replace(/]/g, ')')
    })
}

function bindDataLayerListeners(e) {
    e.addListener("addfeature", refreshGeoJsonFromData), e.addListener("removefeature", refreshGeoJsonFromData), e.addListener("setgeometry", refreshGeoJsonFromData)
}

function resizeGeoJsonInput() {
    var e = geoJsonInput.getBoundingClientRect(),
        n = panel.getBoundingClientRect();
    geoJsonInput.style.height = n.bottom - e.top - 8 + "px"
}

var map, dropContainer, panel, geoJsonInput;
google.maps.event.addDomListener(window, "load", init);
var mapResized = !1;
//window.onbeforeunload = function() {
//    return "Are you sure you want to leave?"
//};
