/* Create interactive Google Map 
   Create initMap() function to be invoked once the following JavaScript file has been loaded in index.html:
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_056RXCG-BAcN58URaksq8TBBk4M4s4w&callback=initMap"></script>
   Credit: Guidance provided by Code Institute tutorials, Eamonn Smyth (see Credits section in README) and Google Maps Platform - https://developers.google.com/maps/documentation/javascript/overview */

   function initMap() {
    // Set initial map properties
    const mapProp = {
        center: new google.maps.LatLng(51.58, -0.09),
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
            logo: "assets/images/stadiums/arsenal-crest.jpg",
        },
        {
            lat: 51.49089,
            lng: -0.28908,
            name: "Brentford Community Stadium",
            club: "Brentford",
            logo: "assets/images/stadiums/brentford-crest.jpg",
        },
        {
            lat: 51.48177,
            lng: -0.19042,
            name: "Stamford Bridge",
            club: "Chelsea",
            logo: "assets/images/stadiums/chelsea-crest.jpg",
        },
        {
            lat: 51.39854,
            lng: -0.08533,
            name: "Selhurst Park",
            club: "Crystal Palace",
            logo: "assets/images/stadiums/palace-crest.jpg",
        },
        {
            lat: 51.60431,
            lng: -0.06638,
            name: "Tottenham Hotspur Stadium",
            club: "Tottenham Hotspur",
            logo: "assets/images/stadiums/spurs-crest.jpg",
        },
        {
            lat: 51.65003,
            lng: -0.40203,
            name: "Vicarage Road",
            club: "Watford",
            logo: "assets/images/stadiums/watford-crest.jpg",
        },
        {
            lat: 51.53892,
            lng: -0.01625,
            name: "London Stadium",
            club: "West Ham United",
            logo: "assets/images/stadiums/west-ham-crest.jpg",
        },
        {
            lat: 51.55621,
            lng: -0.27926,
            name: "Wembley Stadium",
            club: "National Stadium",
            logo: "assets/images/stadiums/wembley-logo.png",
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
        let markerContent = `<h3 class="text-center">` + stadiums[i].name + `</h3>` +  `<p class="text-center"><strong> Home of ` + stadiums[i].club + `</strong></p>`;
        // 3) Set up the information windows, adding the content and width
        const infoWindow = new google.maps.InfoWindow({
            content: markerContent,
            maxWidth: 400,
        });
        // 4) Add event listener for when each marker is clicked
        marker.addListener("click", function () {
            // Close any open windows, calling the closeOthers() function below
            closeOthers();
            // Open new window for the clicked marker
            infoWindow.open(map, marker);
            infoObj[0] = infoWindow;
            // Zoom in when marker is clicked
            map.setZoom(12);
            map.setCenter(marker.getPosition());
            // Zoom out when marker information window is closed
            google.maps.event.addListener(infoWindow, "closeclick", function () {
                map.setZoom(9);
                map.setCenter({ lat: 51.58, lng: -0.09 });
            });
        });
        /* Each time a marker is clicked, run a function to change the contents of the 
        information cards to match the stadium marker that has been clicked*/
        marker.addListener(
            "click",
            (function (i) {
                return function () {
                    document.getElementById("card-title").textContent = stadiums[i].club;
                    document.getElementById("crest-card").innerHTML = `<img class="card-img-top mt-5" src="${stadiums[i].logo}" alt="${stadiums[i].club} logo">`;
                };
            })(i)
        );
    }
    // Function to close an open info window when another info window is opened
    function closeOthers() {
        if (infoObj.length > 0) {
            infoObj[0].set("marker", null);
            infoObj[0].close();
            infoObj[0].length = 0;
            map.setZoom(9);
        }
    }
}
