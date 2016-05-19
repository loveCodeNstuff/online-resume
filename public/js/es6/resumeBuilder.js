/***************************************************
                      Bio
***************************************************/
const bio = {
    "name": "Richard C Felix",
    "role": "Web Developer",
    "contacts": {
      "mobile": "(123) 123-4567",
      "email": "me@richardcfelix.com",
      "github": "github.com/loveCodeNstuff/",
      "twitter": "https://twitter.com/nice",
      "location": "1169 Grand Concourse Bronx, NY 10452"
    },
    "welcomeMessage": "O Yeah Hi!",
    "skills": [
      "HTML5 ", "CSS3", "JavaScript ", "Node.js "
    ],
    "skillsPics": [
      "img/html5.png", "img/css3.jpg", "img/js.png", "img/node.png"
    ],
    "biopic": "/img/pic.png",
    "heroPics": [
      "img/bg-lg.png", "img/bg-md.png", "img/bg-sm.png"
    ],
    "display": ()=>{

      const heroPic = '<picture class="hero">' +
                        `<source media="(min-width: 769px)" srcset=${bio.heroPics[0]}>`  +
                        `<source media="(min-width: 465px)" srcset="${bio.heroPics[1]}">` +
                        `<img src="${bio.heroPics[2]}" alt="Computer screen with code">` +
                      '</picture>';

      $('#hero')
        .append(heroPic)
        .append(`<div class="animated fadeIn name">` +
                  `Richard C Felix` +
                  `<div class="animated fadeIn role">` +
                    `Full Stack Web Developer` +
                    `</div>` +
                    `<center>` +
                      `<div class="animated fadeIn mePic">` +
                        `<img src="${bio.biopic}" class="img-circle img-responsive">` +
                      `</div>` +
                      `<div class="contactInfo animated fadeIn">` +
                        `mobile: ${bio.contacts.mobile} <br/>` +
                        `email: ${bio.contacts.email} <br/>` +
                        `github: ${bio.contacts.github} <br/>` +
                        `twitter: ${bio.contacts.twitter} <br/>` +
                        `location: ${bio.contacts.location}` +
                      `</div>` +
                    `</center>` +
                `</div>`);

      $('#footerTitle').append('<h2 class="col-md-12 text-center text-uppercase">' +
                                'Keep in Touch ' +
                              '</h2>');

      $('#footerEntry')
        .append(`<div class="col-md-2 text-center">` +
                  `mobile <br/> ${bio.contacts.mobile}` +
                `</div>`)
        .append(`<div class="col-md-2 text-center">` +
                  `email <br/> ${bio.contacts.email}` +
                `</div>`)
        .append(`<div class="col-md-3 text-center">` +
                  `Github <br/> ${bio.contacts.github}` +
                `</div>`)
        .append(`<div class="col-md-2 text-center">` +
                  `Twitter <br/> ${bio.contacts.twitter}` +
                `</div>`)
        .append(`<div class="col-md-2 text-center">` +
                  `Location <br/> ${bio.contacts.location}` +
                `</div>`);

      $('#skillsTitle').append('<h1 class="col-md-12 text-center text-uppercase">' +
                                ' Talents ' +
                              '</h1>');

      if(bio.skills.length !== 0) {

          for(let x = 0; x < bio.skills.length; x++) {

            let skillEntry = '<div class="col-md-3 col-xs-12 text-center">' +
                                `<h3>${bio.skills[x]}</h3>` +
                                `<img src=${bio.skillsPics[x]} class='img-responsive' alt='pictures of web icons'>` +
                              '</div>';

            $('#skillEntryRow').append(skillEntry);
          }
      }
    }
};

bio.display();

/***************************************************
                      Education
***************************************************/
const education = {
    "schools": [
      {
        "name": "LaGuardia Community College",
        "location": "331-10 Thomson Ave, Long Island City, NY 11101",
        "degree": "AS",
        "majors": [
          "Computer Programming"
        ],
        "dates": "2013-2014",
        "url": "http://www.laguardia.edu/home/"
      },
      {
        "name": "New York City School of Technology",
        "location": "300 Jay St Brooklyn, NY 11201",
        "degree": "BS",
        "majors": [
          "Computer Systems"
        ],
        "dates": "2014-2015",
        "url": "http://www.citytech.cuny.edu/"
      }
    ],

    "onlineCourses": [
      {
        "title": "Front End Nano Degree",
        "school": "Udacity",
        "date": "March 2016 to Present",
        "url": "http://www.udacity.com"
      }
    ],
    "display": ()=>{

      $('#educationTitle').append('<h1 class="col-md-12 text-center text-uppercase">' +
                                ' Education ' +
                              '</h1>');

      for(let x = 0; x < education.schools.length; x++) {

        $('#educationEntry')
          .append(`<div class="col-md-6 text-center">` +
                    `<a href="${education.schools[x].url}" target="_blank">${education.schools[x].name}</a> <br/>` +
                    `${education.schools[x].degree} <br/>` +
                    `${education.schools[x].dates} <br/>` +
                    `${education.schools[x].location} <br/>` +
                    `${education.schools[x].majors} </div>`);
      }

      $('#onlineClassTitle').append('<h2 class="col-md-12 text-center text-uppercase">' +
                                      ' Online Courses ' +
                                    '</h2>');

      for(let x = 0; x < education.onlineCourses.length; x++) {

        $('#onlineClassEntry')
          .append(`<div class="col-md-12 text-center">` +
                    `${education.onlineCourses[x].title} <br/>` +
                    `${education.onlineCourses[x].school} <br/>` +
                    `${education.onlineCourses[x].date} <br/>` +
                    `<a href="${education.onlineCourses[x].url}" target="_blank">${education.onlineCourses[x].url}</a> </div>`);
      }
    }
};

education.display();

/***************************************************
                      Work
***************************************************/
const work = {
    "jobs": [
      {
        "employer": "Pachulski Stang Zhiel & Jones",
        "title": "Records Manager",
        "location": "780 3rd Avenue New York, NY 10017",
        "dates": "May 2008 to Dec 2013",
        "description": "Managing File Clerks"
      },
      {
        "employer": "Primex",
        "title": "Full Stack Web Developer",
        "location": "54 west 21 street New York, NY 10010",
        "dates": "Oct 2015 to Present",
        "description": "Making and Maintaining Firms Websites"
      }
    ],
    "display": ()=>{

      $('#workTitle').append('<h1 class="col-md-12 text-center text-uppercase">' +
                                ' Work Experience ' +
                              '</h1>');

      for(let x = 0; x < work.jobs.length; x++) {

        $('#workEntry')
          .append(`<div class="col-md-6 text-center">` +
                    `${work.jobs[x].employer} <br/>` +
                    `${work.jobs[x].title} <br/>` +
                    `${work.jobs[x].dates} <br/>` +
                    `${work.jobs[x].location} <br/>` +
                    `${work.jobs[x].description} </div>`);
      }
    }
};

work.display();

/***************************************************
                    Projects
***************************************************/
const projects = {
  "projects": [
    {
      "title": "Portfolio",
      "dates": "April 2016",
      "description": "created a portfolio site",
      "images": [
        "https://raw.githubusercontent.com/loveCodeNstuff/portfolioSite/master/public/img/logo.png"
      ]
    },
    {
      "title": "Oline Resume",
      "dates": "May 2016",
      "description": "created a Online Resume",
      "images": [
        "/img/bg-md.png"
      ]
    }
  ],
  "display": ()=>{

    $('#projectsTitle')
      .append(`<div class="col-md-12 text-center">` +
                `<h1>Projects</h1>` +
              `</div>`);

    for(let x = 0; x < projects.projects.length; x++) {

      $('#projectsEntry')
        .append(`<div class="col-md-6 text-center">` +
                  `${projects.projects[x].title} <br/>` +
                  `${projects.projects[x].dates} <br/>` +
                  `${projects.projects[x].description} <br/>` +
                  `<img src=${projects.projects[x].images[0]} alt='project pictures'>"` +
                `<div/>`);
    }
  }
};

projects.display();

/*************
     Map
*************/
$('#mapTitle')
  .append(`<div class="col-md-12 text-center">` +
            `<h1>Where I have lived and worked</h1>` +
          `</div>`)
$('#mapDiv').append(googleMap);


/************************************************************
              Plain Jane Version
************************************************************/
// "use strict";
//
// /***************
//       Bio
// ***************/
// var bio = {
//   "name": "Richard C Felix",
//   "role": "Web Developer",
//   "contacts": {
//     "mobile": "(123) 123-4567",
//     "email": "me@richardcfelix.com",
//     "github": "https://github.com/loveCodeNstuff/",
//     "twitter": "https://twitter.com/nice",
//     "location": "1169 Grand Concourse Bronx, NY 10452"
//   },
//   "welcomeMessage": "O Yeah Hi!",
//   "skills": ["HTML5 ", "CSS3", "JavaScript ", "Node.js "],
//   "skillsPics": ["img/html5.png", "img/css3.jpg", "img/js.png", "img/node.png"],
//   "biopic": "/img/pic.png",
//   "heroPics": ["http://placehold.it/1200x400", "img/whattat.jpg", "img/pic.png"],
//   "display": function display() {
//
//     var heroPic = '<picture class="hero">' + ("<source media=\"(min-width: 769px)\" srcset=" + bio.heroPics[0] + ">") + ("<source media=\"(min-width: 465px)\" srcset=\"" + bio.heroPics[1] + "\">") + ("<img src=\"" + bio.heroPics[2] + "\" alt=\"Picture of MacBook Pro, skectchbook and iphone\">") + '</picture>';
//     $("#hero").append(heroPic);
//
//     const bioName = HTMLheaderName.replace("%data%", bio.name),
//         bioRole = HTMLheaderRole.replace("%data%", bio.role),
//         bioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
//         bioEmail = HTMLemail.replace("%data%", bio.contacts.email),
//         bioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
//         bioGithub = HTMLgithub.replace("%data%", bio.contacts.github),
//         bioLocation = HTMLlocation.replace("%data%", bio.contacts.location),
//         bioPic = HTMLbioPic.replace("%data%", bio.biopic),
//         bioWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//
//     $('#header')
//       .prepend(bioRole)
//       .prepend(bioName)
//       .append(bioPic)
//       .append(bioWelcome);
//
//     $('#lets-connect')
//       .append(bioMobile)
//       .append(bioEmail)
//       .append(bioTwitter)
//       .append(bioGithub)
//       .append(bioLocation);
//
//     $('#skillsTitle').append('<h1 class="col-md-12 text-center text-uppercase">' + ' Talents ' + '</h1> <br/>');
//
//     if (bio.skills.length !== 0) {
//
//       for (var x = 0; x < bio.skills.length; x++) {
//
//         var skillEntry = '<div class="col-md-3 col-xs-12 text-center">' + ("<h3>" + bio.skills[x] + "</h3>") + ("<img src=" + bio.skillsPics[x] + " class='img-responsive'>") + '</div>';
//
//         $('#skillEntryRow').append(skillEntry);
//       }
//     }
//   }
// };
//
// bio.display();
//
// /***************
//    Education
// ***************/
// var education = {
//   "schools": [{
//     "name": "LaGuardia Community College",
//     "location": "331-10 Thomson Ave, Long Island City, NY 11101",
//     "degree": "AS",
//     "majors": ["Computer Programming"],
//     "dates": "2013-2014",
//     "url": "http://www.laguardia.edu/home/"
//   }, {
//     "name": "New York City School of Technology",
//     "location": "300 Jay St Brooklyn, NY 11201",
//     "degree": "BS",
//     "majors": ["Computer Systems"],
//     "dates": "2014-2015",
//     "url": "http://www.citytech.cuny.edu/"
//   }],
//
//   "onlineCourses": [{
//     "title": "Front End Nano Degree",
//     "school": "Udacity",
//     "date": "March 2016 to Present",
//     "url": "http://www.udacity.com"
//   }],
//   "display": function display() {
//
//     $('#education').append(HTMLschoolStart);
//
//     for (var x = 0; x < education.schools.length; x++) {
//
//       var educationName = HTMLschoolName.replace("%data%", education.schools[x].name),
//           educationDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree),
//           educationDates = HTMLschoolDates.replace("%data%", education.schools[x].dates),
//           educationLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location),
//           educationMajor = HTMLschoolMajor.replace("%data%", education.schools[x].majors);
//
//       $('.education-entry').append(educationName + educationDegree).append(educationDates).append(educationLocation).append(educationMajor).append('<br/><br/>');
//     }
//
//     $('.education-entry').append(HTMLonlineClasses);
//
//     for (var _x = 0; _x < education.onlineCourses.length; _x++) {
//
//       var onlineClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[_x].title),
//           onlineClassSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[_x].school),
//           onlineClassDate = HTMLonlineDates.replace("%data%", education.onlineCourses[_x].date),
//           onlineClassUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[_x].url);
//
//       $('.education-entry').append(onlineClassTitle + onlineClassSchool).append(onlineClassDate).append(onlineClassUrl);
//     }
//   }
// };
//
// education.display();
//
// /***************
//       Work
// ***************/
// var work = {
//   "jobs": [{
//     "employer": "Pachulski Stang Zhiel & Jones",
//     "role": "Records Manager",
//     "location": "780 3rd Avenue New York, NY 10017",
//     "dates": "May 2008 to Dec 2013",
//     "description": "Managing File Clerks"
//   }, {
//     "employer": "Primex",
//     "role": "Full Stack Web Developer",
//     "location": "54 west 21 street New York, NY 10010",
//     "dates": "Oct 2015 to Present",
//     "description": "Making and Maintaining Firms Websites"
//   }],
//   "display": function display() {
//
//     $('#workExperience').append(HTMLworkStart);
//
//     for (var x = 0; x < work.jobs.length; x++) {
//
//       const workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer),
//           workTitle = HTMLworkTitle.replace("%data%", work.jobs[x].role),
//           workDates = HTMLworkDates.replace("%data%", work.jobs[x].dates),
//           workLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location),
//           workDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
//
//       $('.work-entry')
//         .append(workEmployer + workTitle)
//         .append(workDates)
//         .append(workLocation)
//         .append(workDescription);
//     }
//   }
// };
//
// work.display();
//
// /***************
//     Projects
// ***************/
// var projects = {
//   "projects": [{
//     "title": "Portfolio",
//     "dates": "April 2016",
//     "description": "created a portfolio site",
//     "images": ["https://raw.githubusercontent.com/loveCodeNstuff/portfolioSite/master/public/img/logo.png"]
//   }, {
//     "title": "Oline Resume",
//     "dates": "May 2016",
//     "description": "created a Online Resume",
//     "images": ["/img/pic.png"]
//   }],
//   "display": function display() {
//
//     $('#projects').append(HTMLprojectStart);
//
//     for (var x = 0; x < projects.projects.length; x++) {
//
//       var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title),
//           projectDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates),
//           projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description),
//           projectImages = HTMLprojectImage.replace("%data%", projects.projects[x].images[0]);
//
//       $('.project-entry').append(projectTitle).append(projectDates).append(projectDescription).append(projectImages).append("<br/><br/>");
//     }
//   }
// };
//
// projects.display();
//
// /*************
//      Map
// *************/
// $('#mapDiv').append(googleMap);
