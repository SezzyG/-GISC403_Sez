
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-41.142876, 172.416096], 9.75);
L.control.scale().addTo(map);

// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1ojukv000801q5994v22he/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	attribution: '&copy; OpenStreetMap &amp; MapBox'
}).addTo(map);
// END REPLACE BLOCK

// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-41.139891, 172.122953],
		[-41.151267, 172.129133],
		[-41.167551, 172.135999],
		[-41.174270, 172.124326],
		[-41.193132, 172.134626],
		[-41.206307, 172.151792],
		[-41.215863, 172.156942],	
		[-41.232648, 172.185094],
		[-41.304168, 172.194628],
		[-41.374160, 172.276197],
		[-41.419323, 172.384956],
		[-41.483372, 172.412146],
		[-41.572063, 172.348056],
		[-41.646121, 172.266487],
		[-41.738936, 172.252892],
		[-41.750528, 172.367477],
		[-41.667886, 172.417973],
		[-41.679492, 172.588880],
		[-41.506647, 172.652970],
		[-41.331882, 172.649086],
		[-41.216571, 172.744250],
		[-41.062996, 172.872430],
		[-41.028210, 172.815623],
		[-40.848855, 172.736481],
		[-40.782712, 172.672391],
		[-40.795946, 172.571401],
		[-40.865013, 172.507310],
		[-40.834162, 172.388841],
		[-40.863544, 172.282024],
		[-40.809177, 172.215991],
		[-40.887040, 172.130538],
	],{
		color: '#FF5733',
		fillColor: '',
		fillOpacity: 0.0,
	}).addTo(map).bindPopup('<strong>Kahurangi National Park:</strong><br>The general area of Kahurangi National Park, showing there is a lot more to be explored.');


// Define your custom marker options with different colors
var markerOptions1 = {
    radius: 8,
    fillColor: "#476639", // Salisbury
    color: "",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var markerOptions2 = {
    radius: 8,
    fillColor: "#476639", // Gordons Pyramid 
    color: "",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var markerOptions3 = {
    radius: 8,
    fillColor: "#476639", // Flora Car
    color: "", //
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var markerOptions4 = {
    radius: 8,
    fillColor: "#F5CD43", // Asbestos
    color: "",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

var markerOptions5 = {
    radius: 8,
    fillColor: "#F5CD43", // Balloon
    color: "",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

// Create six circle markers and add them to the map
const marker1 = L.circleMarker([-41.185813, 172.648816], markerOptions1).bindPopup('<strong>Salisbury Lodge:</strong><br>This is where we stayed overnight in a nice, large lodge with a bunch of other cool hikers out for the weekend.').addTo(map);
const marker2 = L.circleMarker([-41.191215, 172.679514], markerOptions2).bindPopup('<strong>Gordons Pyramid:</strong><br>The most satisfying summit to reach. We took plenty of photos up the top and my brother had to endure me shouting "I love New Zealand!" Eighty times.').addTo(map);
const marker3 = L.circleMarker([-41.190067, 172.747074], markerOptions3).bindPopup('<strong>Flora Carpark:</strong><br>Where everything started! Before the burning legs begun! Absolutely loved the journey but I was glad to see the car two days later!').addTo(map);
const marker4 = L.circleMarker([-41.129544, 172.692223], markerOptions4).bindPopup('<strong>Asbestos Cottage:</strong><br>Passed through here on our way past and I made us take a detour as I was curious and used to work in the asbestos testing industry. So cool!').addTo(map);
const marker5 = L.circleMarker([-41.169067, 172.622389], markerOptions5).bindPopup('<strong>Balloon Hill:</strong><br>It seemed not that much further from where we were at Salisbury and we were going to try and walk it but decided to call it a night.').addTo(map);

// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: '#9A4DCF',
		weight: 1.4,
		fillOpacity: 0.0,
		interactive: false,
    		onEachFeature: function(feature, layer) {
        		if (feature.properties && feature.properties.popupContent) {
            			layer.bindPopup(feature.properties.popupContent);
        }
    }
}).addTo(map);

// Bring the GeoJSON layer to the back once it's loaded
geojsonLayer.on('add', function() {
    geojsonLayer.bringToBack();
});

// END OF DOCUMENT