let latitude, longitude, destination;

//done1
$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

//done2
function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

//done3
$(function () {
	//Task 1 add the button for navigation
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

//Task 2 get the coordinated from position parameters
//done4
function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude;


	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	//Task 3Adding onResult() on map’s geocoder
    var map = new mapboxgl.Map({
		container: 'map',
		style: 'map://styles/mapbox/streets-v11',
		centre: [longitude, latitude],
		zoom: 16
	});

	map.addControl(
		new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		})
	);

	var img1 = document.querySelector("#amber")


	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([75.85133, 26.98547])
		.addTo(map);

	var img2 = document.querySelector("#gateway")

	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([72.835163, 18.920180])
		.addTo(map);

	var img3 = document.querySelector("#gate")

	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([77.22931, 28.61495])
		.addTo(map);


	var img4 = document.querySelector("#lotus")

	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([77.25880, 28.553501])
		.addTo(map);


	var img5 = document.querySelector("#victoria")

	var marker5 = new mapboxgl.Marker({
		element: img5
	})
		.setLngLat([88.342785, 22.546170])
		.addTo(map);
}