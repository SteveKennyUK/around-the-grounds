/* Create interactive Google Map 
   Create initMap() function to be invoked once the following JavaScript file has been loaded in index.html:
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_056RXCG-BAcN58URaksq8TBBk4M4s4w&callback=initMap"></script>
   Credit: Guidance provided by Code Institute tutorials and Google Maps Platform - https://developers.google.com/maps/documentation/javascript/overview */

   function initMap() {
    // Set initial map properties
    const mapProp = {
        center: new google.maps.LatLng(51.509, -0.122),
        zoom: 8,
        scrollwheel: true
    };

    const map = new google.maps.Map(document.getElementById("map"), mapProp);
} 


