/* Create interactive Google Map 
   Create initMap() function to be invoked once the following JavaScript file has been loaded in index.html:
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_056RXCG-BAcN58URaksq8TBBk4M4s4w&callback=initMap"></script>
   Credit: Guidance provided by Code Institute tutorials and Google Maps Platform - https://developers.google.com/maps/documentation/javascript/overview */

   function initMap() {
    // Set initial map properties
    const mapProp = {
        center: new google.maps.LatLng(51.509, -0.122),
        zoom: 9,
        scrollwheel: true,
    };
    // Place map inside <div> element with id="map"
    const map = new google.maps.Map(document.getElementById("map"), mapProp);

    // Add information for each marker
    const stadiums = [
        {
            lat: 51.55505,
            lng: -0.10835,
            name: "Emirates Stadium",
            club: "Arsenal",
        },
        {
            lat: 51.49089,
            lng: -0.28908,
            name: "Brentford Community Stadium",
            club: "Brentford",
        },
        {
            lat: 51.48177,
            lng: -0.19042,
            name: "Stamford Bridge",
            club: "Chelsea",
        },
        {
            lat: 51.39854,
            lng: -0.08533,
            name: "Selhurst Park",
            club: "Crystal Palace",
        },
        {
            lat: 51.60431,
            lng: -0.06638,
            name: "Tottenham Hotspur Stadium",
            club: "Tottenham Hotspur",
        },
        {
            lat: 51.65003,
            lng: -0.40203,
            name: "Vicarage Road",
            club: "Watford",
        },
        {
            lat: 51.53892,
            lng: -0.01625,
            name: "London Stadium",
            club: "West Ham United",
        },
        {
            lat: 51.55621,
            lng: -0.27926,
            name: "Wembley Stadium",
            club: "National Stadium",
        },
    ];

    // Loop through stadiums array and add location markers to map
    for (let i = 0; i < stadiums.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(stadiums[i].lat, stadiums[i].lng),
            map: map,
            title: stadiums[i].name,
            animation: google.maps.Animation.DROP,
        });
        // Create information windows for each marker
        // 1) Create empty array to store information for windows 
        var infoObj = [];
        // 2) Create content for each window
        let markerContent = `<h3>` + stadiums[i].name + `</h3>` + 
        `<p> Home of ` + stadiums[i].club + `</p>`;
        // 3) Set up the information windows, adding the content and width
        const infoWindow = new google.maps.InfoWindow({
            content: markerContent,
            maxWidth: 400
        });
        // 4) Add event listener for when each marker is clicked
        marker.addListener("click", function() {
            // Close any open windows, calling the closeOthers() function below
            closeOthers();
            // Open new window for the clicked marker
            infoWindow.open(map, marker);
            infoObj[0] = infoWindow;
        });
    }

    function closeOthers() {
        if (infoObj.length > 0) {
            infoObj[0].set("marker", null);
            infoObj[0].close();
            infoObj[0].length = 0;
        }
    }
}
