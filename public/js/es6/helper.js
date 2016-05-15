const HTMLheaderName = '<h1 id="name">%data%</h1>',
    HTMLheaderRole = '<span>%data%</span><hr>';

const HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
      HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
      HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
      HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
      HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
      HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
      HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

const HTMLbioPic = '<img src="%data%" class="biopic">',
     HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

const HTMLskillsStart = '<h3 id="skills-h3">Skills</h3><ul id="skills" class="flex-box"></ul>',
      HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

const HTMLworkStart = '<div class="work-entry"></div>',
      HTMLworkEmployer = '<a href="#">%data%',
      HTMLworkTitle = ' - %data%</a>',
      HTMLworkDates = '<div class="date-text">%data%</div>',
      HTMLworkLocation = '<div class="location-text">%data%</div>',
      HTMLworkDescription = '<p><br>%data%</p>';

const HTMLprojectStart = '<div class="project-entry"></div>',
      HTMLprojectTitle = '<a href="#">%data%</a>',
      HTMLprojectDates = '<div class="date-text">%data%</div>',
      HTMLprojectDescription = '<p><br>%data%</p>',
      HTMLprojectImage = '<img src="%data%">';

const HTMLschoolStart = '<div class="education-entry"></div>',
      HTMLschoolName = '<a href="#">%data%',
      HTMLschoolDegree = ' -- %data%</a>',
      HTMLschoolDates = '<div class="date-text">%data%</div>',
      HTMLschoolLocation = '<div class="location-text">%data%</div>',
      HTMLschoolMajor = '<em><br>Major: %data%</em>';

const HTMLonlineClasses = '<h3>Online Classes</h3>',
      HTMLonlineTitle = '<a href="#">%data%',
      HTMLonlineSchool = ' - %data%</a>',
      HTMLonlineDates = '<div class="date-text">%data%</div>',
      HTMLonlineURL = '<br><a href="#">%data%</a>';

const internationalizeButton = '<button>Internationalize</button>',
      googleMap = '<div id="map"></div>';


$(document).ready( ()=>{
  /*
  This is the fun part. Here's where we generate the custom Google Map for the website.
  See the documentation below for more details.
  https://developers.google.com/maps/documentation/javascript/reference
  */
  let map;    // declares a global map variable


  /*
  Start here! initializeMap() is called when page is loaded.
  */
  function initializeMap() {

    let locations;

    const mapOptions = {
      disableDefaultUI: true
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

      // initializes an empty array
      let locations = [];

      // adds the single location property from bio to the locations array
      locations.push(bio.contacts.location);

      // iterates through school locations and appends each location to
      // the locations array
      for (let school in education.schools) {
        locations.push(education.schools[school].location);
      }

      // iterates through work locations and appends each location to
      // the locations array
      for (let job in work.jobs) {
        locations.push(work.jobs[job].location);
      }

      return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

      // The next lines save location data from the search result object to local variables
      let lat = placeData.geometry.location.lat(),  // latitude from the place service
          lon = placeData.geometry.location.lng(),  // longitude from the place service
          name = placeData.formatted_address,   // name of the place from the place service
          bounds = window.mapBounds;            // current boundaries of the map window

      // marker is an object with additional data about the pin for a single location
      let marker = new google.maps.Marker({
        map: map,
        position: placeData.geometry.location,
        title: name
      });

      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      let infoWindow = new google.maps.InfoWindow({
        content: name
      });

      // hmmmm, I wonder what this is about...
      google.maps.event.addListener(marker, 'click', function() {
        // your code goes here!
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      map.fitBounds(bounds);
      // center the map
      map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0]);
      }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(map);

      // Iterates through the array of locations, creates a search object for each location
      for (let place in locations) {

        // the search request object
        let request = {
          query: locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
      }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

  }

  /*
  Uncomment the code below when you're ready to implement a Google Map!
  */

  // Calls the initializeMap() function when the page loads
  window.addEventListener('load', initializeMap);

  // Vanilla JS way to listen for resizing of the window
  // and adjust map bounds
  window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
   map.fitBounds(mapBounds);
  });

});
