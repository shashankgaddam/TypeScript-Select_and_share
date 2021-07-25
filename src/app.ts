//import axios from "axios";

// Code goes here!
const form = document.querySelector('form')!;
//const addressInput = document.getElementById('address')! as HTMLInputElement;

//const GOOGLE_API_KEY = 'AIzaSyB5WuQjvIOfsqpmzkTOFqizD4WsYSM9iWI';

//declare var google: any;

// type GoogleGeoCodingResponse = {results: {geometry: {location: {lat: number; lng: number}}}[];
// status: 'OK' | 'ZERO_RESULTS';
// };

// function searchAddressHanlder(event: Event) {
//   event.preventDefault();
//   const enteredAddress = addressInput.value;

//   //Send this to Googles API
//   axios.get<GoogleGeoCodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}+Amphitheatre+Parkway,+Mountain+View,+CA&key=${GOOGLE_API_KEY}`).then((response)=> {
//     if(response.data.status !== 'OK') {
//       throw new Error('Could not fetch location!');    
//     }
//   const coordinates = response.data.results[0].geometry.location;
//   const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: coordinates,
//     zoom: 8,
//   });
//   new google.maps.Marker({
//     position: coordinates,
//     map: map,
//   });

//   }).catch((err)=> {
//     alert(err.message);
//     console.log(err);
//   });
// }

declare var ol: any;
 
function searchAddressHandler(event: Event) {
  event.preventDefault();
 
  const coordinates = {lat: 40.41, lng: -73.99}; // Can't fetch coordinates from Google API, use dummy ones
 
  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}


form.addEventListener('submit', searchAddressHandler);