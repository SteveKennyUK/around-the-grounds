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
            image: "assets/images/stadiums/emirates-stadium.jpg",
            info: "Located in Islington, the Emirates Stadium is home to Arsenal F.C. and was built to replace their previous Highbury stadium. It also hosts music concerts and occasional international fixtures.",
            capacity: "60,361",
            year: "2006",
            address: "Emirates Stadium, Hornsey Road, London N7 7AJ",
            station: "Drayton Park",
            ticket: "020 7619 5000",
            website: "https://www.arsenal.com/the-club/emirates-stadium",
        },
        {
            lat: 51.49089,
            lng: -0.28908,
            name: "Brentford Community Stadium",
            club: "Brentford",
            logo: "assets/images/stadiums/brentford-crest.jpg",
            image: "assets/images/stadiums/brentford-stadium.jpg",
            info:  "Located in West London, Brentford Community Stadium is the most recent addition to London's stadiums. Replacing Brentford's Griffin Park, the team was promoted to the Premier League in the first season at the new stadium.",
            capacity: "17,250",
            year: "2020",
            address: "166 Lionel Rd N, Brentford TW8 9QT",
            station: "Kew Bridge",
            ticket: "020 8847 2511",
            website: "https://newstadium.brentfordfc.com/",    
        },
        {
            lat: 51.48177,
            lng: -0.19042,
            name: "Stamford Bridge",
            club: "Chelsea",
            logo: "assets/images/stadiums/chelsea-crest.jpg",
            image: "assets/images/stadiums/chelsea-stadium.jpg",
            info: "Located in an affluent area of South West London, Stamford Bridge is the home ground for Chelsea, the current Champions League holders. There are plans in place for a full redevelopment of the stadium in time for the 2021-22 season.",
            capacity: "41,837",
            year: "1877",
            address: "Stamford Bridge, Fulham Road, London SW6 1HS",
            station: "Fulham Broadway",
            ticket: "0371 811 1905",
            website: "https://www.chelseafc.com/en",
        },
        {
            lat: 51.39854,
            lng: -0.08533,
            name: "Selhurst Park",
            club: "Crystal Palace",
            logo: "assets/images/stadiums/palace-crest.jpg",
            image: "assets/images/stadiums/selhurst-park.jpg",
            info: "The home of Crystal Palace, Selhurst Park is situated in Norwood, South London. A mixture of old and new, the ground has traditional character. However, the club has announced plans to build a bigger, more modern main stand.",
            capacity: "25,456",
            year: "1924",
            address: "Selhurst Park, Holmesdale Road, London SE25 6PU",
            station: "Norwood Junction/Selhurst",
            ticket: "0871 2000 071",
            website: "https://www.cpfc.co.uk/",
        },
        {
            lat: 51.60431,
            lng: -0.06638,
            name: "Tottenham Hotspur Stadium",
            club: "Tottenham Hotspur",
            logo: "assets/images/stadiums/spurs-crest.jpg",
            image: "assets/images/stadiums/th-stadium.jpg",
            info: "Heralded as one of the finest stadiums in the world, this throughly modern stadium is home to Tottenham Hotspur. The retractable pitch has a synthetic NFL pitch underneath, allowing hosting of regular NFL games.",
            capacity: "60,361",
            year: "2006",
            address: "Emirates Stadium, Hornsey Road, London N7 7AJ",
            station: "Drayton Park",
            ticket: "020 7619 5000",
            website: "https://www.arsenal.com/the-club/emirates-stadium",
        },
        {
            lat: 51.65003,
            lng: -0.40203,
            name: "Vicarage Road",
            club: "Watford",
            logo: "assets/images/stadiums/watford-crest.jpg",
            image: "assets/images/stadiums/vicarage-road.jpg",
            info: "On the outskirts of North West London, Vicarage Road is home to Watford F.C. The traditional ground has been improved with the addition of the Sir Elton John Stand, named after the singer with a deep-rooted connection with the club.",
            capacity: "60,361",
            year: "2006",
            address: "Emirates Stadium, Hornsey Road, London N7 7AJ",
            station: "Drayton Park",
            ticket: "020 7619 5000",
            website: "https://www.arsenal.com/the-club/emirates-stadium",
        },
        {
            lat: 51.53892,
            lng: -0.01625,
            name: "London Stadium",
            club: "West Ham United",
            logo: "assets/images/stadiums/west-ham-crest.jpg",
            image: "assets/images/stadiums/london-stadium.jpg",
            info: "Originally built in Stratford as the centrepiece stadium for the 2012 London Olympics, the stadium became the home of West Ham United in 2016. The stadium also continues to host athletics events as well as music concerts.",
            capacity: "60,361",
            year: "2006",
            address: "Emirates Stadium, Hornsey Road, London N7 7AJ",
            station: "Drayton Park",
            ticket: "020 7619 5000",
            website: "https://www.arsenal.com/the-club/emirates-stadium",
        },
        {
            lat: 51.55621,
            lng: -0.27926,
            name: "Wembley Stadium",
            club: "National Stadium",
            logo: "assets/images/stadiums/wembley-logo.png",
            image: "assets/images/stadiums/wembley-stadium.jpg",
            info: "Wembley Stadium is, after Camp Nou, the second largest stadium in Europe and the standard playing venue of the English national team. It also hosts English domestic cup finals and most recently the semi-finals and final of Euro 2020.",
            capacity: "60,361",
            year: "2006",
            address: "Emirates Stadium, Hornsey Road, London N7 7AJ",
            station: "Drayton Park",
            ticket: "020 7619 5000",
            website: "https://www.arsenal.com/the-club/emirates-stadium",
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
        let markerContent = `<h3 class="text-center">` + stadiums[i].name + `</h3>` + `<p class="text-center"><strong> Home of ` + stadiums[i].club + `</strong></p>`;
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
                    document.getElementById("card-front").innerHTML = `<h3 class="mt-2">${stadiums[i].name}</h3>
                    <img class="card-img-top" src="${stadiums[i].image}" alt="Aerial view of ${stadiums[i].name}">
                    <p>${stadiums[i].info}</p>`;
                    document.getElementById("card-back").innerHTML = `
                    <li class="list-group-item"><i class="fas fa-users" aria-hidden="true"></i><strong> Capacity: </strong><br> ${stadiums[i].capacity} </li>
                    <li class="list-group-item"><i class="far fa-calendar-alt" aria-hidden="true"></i><strong> Year Opened: </strong><br> ${stadiums[i].year} </li>
                    <li class="list-group-item"><i class="fas fa-home" aria-hidden="true"></i><strong> Address: </strong><br> ${stadiums[i].address}</li>
                    <li class="list-group-item"><i class="fas fa-train" aria-hidden="true"></i><strong> Nearest Station: </strong><br> ${stadiums[i].station}</li>
                    <li class="list-group-item"><i class="fas fa-ticket-alt" aria-hidden="true"></i><strong> Ticket Office: </strong><br> ${stadiums[i].ticket}</li>
                    <li class="list-group-item"><i class="fas fa-laptop" aria-hidden="true"></i><a href="${stadiums[i].website}" target="_blank" rel="noopener" aria-label="${stadiums[i].club} home page (link opens in a new tab)"><strong> Website</strong></a></li>
                    `;
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
