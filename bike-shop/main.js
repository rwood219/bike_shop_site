console.log('connected')

//const API_KEY = AIzaSyBPEH03QgE4RiOf0fugqjUgin9J504W5GU// Initialize and add the map


function initMap() {

{
    var uluru = {lat: -25.344, lng: 131.036};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  
  }
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}