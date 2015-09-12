
var bio = {
	"name": "Rafael Martinez",
	"role": "Frontend student",
	"contacts": {
		"mobile": "5510586609",
		"email": "ramartinezr@ipn.mx",
		"github": "rafneta",
		"twitter": "@raf_nnet",
		"location": "Mexico City"
	},
	"welcomeMessage": "Welcome!",
	"skills": [
		"CAD",
		"CAE",
		"Mathematica",
		"Matlab",
		"Assembler",
		"C",
		"Python",
		"HTML/CSS",
		"JavaScript"
	],
	"bioPic": "images/r.png"
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName + formattedRole);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 	var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
 	var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
 	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 	$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
 	$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
 	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 	$("#header").append(formattedWelcomeMessage);
 	$("#header").append(HTMLskillsStart);
	var formattedSkill;
	for (skill in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}	
}

var work = {	
	"jobs": [
		{
		  "employer": "Instituto Politécnico Nacional",
		  "title": "Asociate Professor",
		  "location": "Mexico City",
		  "dates": "2008 - present day",
		  "description": "Teaching courses in undergraduated level" 
		},
		{
		  "employer": "Instituto Tecnológico de Estudios Superiores de Monterrey",
		  "title": "Asociate Professor",
		  "location": "Estado de Mexico , Mexico",
		  "dates": "2013 - present day",
		  "description": "Teaching courses in undergraduated level" 
		}
	]
}

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for(job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

var projects = {
	"projects": [
		{
		"title": "Portfolio Site. Udacity Frontend Nanodegree",
		"dates": "2015",
		"description": "Website to display a portfolio of projects",
		"images": [
			"images/udacityportfolio-1.png",
			"images/udacityportfolio-2.png"
		]
		},
		{
		"title": "Online Resume. Udacity Frontend Nanodegree",
		"dates": "2015",
		"description": "interactive online resume",
		"images": [
			"images/udacityresume-1.png",
			"images/udacityresume-2.png"
		]
		}
	]
}

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

var education = {
	"schools": [
		{ "name": "CINVESTAV",
		  "location": "Mexico City",
		  "degree": "Phd",
		  "majors": ["Control theory"],
		  "dates": 2014,
		  "url": "http://www.ctrl.cinvestav.mx"
		},
		{
		  "name": "CINVESTAV",
		  "location": "Mexico City",
		  "degree": "Ms",
		  "majors": ["Control Theory"],
		  "dates": 2009,
		  "url": "http://www.ctrl.cinvestav.mx"
		 },
		 {
		  "name": "UPIITA-IPN",
		  "location": "Mexico City",
		  "degree": "BS",
		  "majors": ["Mechatroncic Engieneering"],
		  "dates": 2007,
		  "url": "http://www.upiita.ipn.mx"
		 }
	],
	"onlineCourses": [
		{
		  "title": "Circuits and Electronics",
		  "school": "edX",
		  "date": 2013,
		  "url": "https://s3.amazonaws.com/verify.edx.org/downloads/a4571236c3ad4f0fa861e4a32eb9831f/Certificate.pdf"
		},
		{
		  "title": "Introduction to Computer Programming Using Python",
		  "school": "edX",
		  "date": 2014,
		  "url": "https://verify.edx.org/cert/127f3a5f5e924d4b849c6324c358d176"
		},
		{
		  "title": "An Introduction to Interactive Programming in Python",
		  "school": "coursera",
		  "date": 2014,
		  "url": "https://www.coursera.org/signature/certificate/DB4S7GNAUY"
		},
		{
		  "title": "The Data Scientist’s Toolbox",
		  "school": "coursera",
		  "date": 2014,
		  "url": "https://www.coursera.org/signature/certificate/82MWGLJQ3H"
		},
		{
		  "title": "Tackling the Challenges of Big Data",
		  "school": "MIT Professional Education",
		  "date": 2014,
		  "url": "https://s3.amazonaws.com/verify.edx.org/downloads/653c57b03f9b4f529f980b1534e1e2e3/Certificate.pdf"
		},
		{
		  "title": "Introduction to Computational Thinking and Data Science",
		  "school": "edX",
		  "date": 2014,
		  "url": "https://verify.edx.org/cert/05f9d6910f0547b5b62f8bab03549c6d"
		},
		{
		  "title": "Intro to HTML and CSS",
		  "school": "Udacity",
		  "date": 2015,
		  "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
		  "title": "Responsive Web Design Fundamentals",
		  "school": "Udacity",
		  "date": 2015,
		  "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
		  "title": "Responsive Images",
		  "school": "Udacity",
		  "date": 2015,
		  "url": "https://www.udacity.com/course/responsive-images--ud882"
		},
		{
		  "title": "JavaScript Basics",
		  "school": "Udacity",
		  "date": 2015,
		  "url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
}

education.display = function() {
 	$("#education").append(HTMLschoolStart);
 	for (school in education.schools) {
 		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
 		formattedschoolName = formattedschoolName.replace("#", education.schools[school].url);
 		$(".education-entry:last").append(formattedschoolName);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedschoolMajor);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
 		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
 		formattedonlineTitle = formattedonlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
 		$(".education-entry:last").append(formattedonlineTitle);
 		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
 		$(".education-entry:last").append(formattedonlineSchool);
 		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
 		$(".education-entry:last").append(formattedonlineDates);
 		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
 		formattedonlineURL = formattedonlineURL.replace("#", education.onlineCourses[onlineCourse].url);
 		$(".education-entry:last").append(formattedonlineURL);		
	}

}
bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

