$.ajax({
  url: 'https://data.cityofnewyork.us/resource/23z9-6uk9.json',
  // https://api.publicapis.org/entries
  dataType: 'json',
  success: function (data) {
    

var whatCity = prompt("What city do you want to go to school in?") // make  choices available for certain cities


function userLangu() {
  var langVar = [];
  var whatLang = prompt("What language do you want to take?(Capitilize first letter thanks)")
  for (i = 0; i < data.length; i++) {
    if(data[i].language_classes == undefined){
      langVar.push("None".split(", "))
      }
  else{
    langVar.push(data[i].language_classes.split(", "));
  }
}
document.write("These schools in " + whatCity + " have " + whatLang + ": <br>")
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < langVar[i].length; j++){
  if (langVar[i][j] == whatLang && data[i].city == whatCity.toUpperCase()){
document.write(data[i].school_name + "<br> ")//Searches for schools with languages that the user wants to take.
      }
    }
  }
} 
  

function userRoutes() {
  var busVar = [];
  var whatBus = prompt("What bus do you want to take to school? (Capitilize first letter thanks)")
  for (i = 0; i < data.length; i++) {
    if(data[i].bus == undefined){
      busVar.push("None".split(", "))
      }
  else{
    busVar.push(data[i].bus.split(", "));
  }
}
document.write("These schools in " + whatCity + " have " + whatBus + ": <br>")
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < busVar[i].length; j++){
  if (busVar[i][j] == whatBus && data[i].city == whatCity.toUpperCase()){
document.write(data[i].school_name + "<br> ")//Searches for schools with bus routes that you want. 
      }
    }
  }
}


function userSports() {
  var sportsVar = [];
  var whatSports = prompt("What school sports do you want to take?(Capitilize first letter thanks)")
  for (i = 0; i < data.length; i++) {
    if(data[i].school_sports == undefined){
      sportsVar.push("None".split(", "))
      }
  else{
    sportsVar.push(data[i].school_sports.split(", "));
  }
}
document.write("These schools in " + whatCity + " have " + whatSports + ": <br>")
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < sportsVar[i].length; j++){
  if (sportsVar[i][j] == whatSports && data[i].city == whatCity.toUpperCase()){
document.write(data[i].school_name + "<br> ")//Searches for schools with school sports you want.
      }
    }
  }
}


function userExam() {
var examVar = [];
  var whatExam = prompt("What AP classes do you want your school to have?(Capitilize first letter thanks)")
  for (i = 0; i < data.length; i++) {
    if(data[i].advancedplacement_courses == undefined){
      examVar.push("None".split(", "))
      }
  else{
    examVar.push(data[i].advancedplacement_courses.split(", "));
  }
}
document.write("These schools in " + whatCity + " have " + whatExam + ": <br>")
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < examVar[i].length; j++){
  if (examVar[i][j] == whatExam && data[i].city == whatCity.toUpperCase()){
document.write(data[i].school_name + "<br> ")//Searches for schools with AP classes that you want. 
      }
    }
  }
}


function userActivity() {
var actVar = [];
  var whatAct = prompt("What extracurricular activities do you want your school to have? (Capitilize first letter thanks)")
  for (i = 0; i < data.length; i++) {
    if(data[i].extracurricular_activities == undefined){
      actVar.push("None".split(", "))
      }
  else{
    actVar.push(data[i].extracurricular_activities.split(", "));
  }
}
document.write("These schools in " + whatCity + " have " + whatAct + ": <br>")
for (i = 0; i < data.length; i++) {
  for(var j = 0; j < actVar[i].length; j++){
  if (actVar[i][j] == whatAct && data[i].city == whatCity.toUpperCase()){
document.write(data[i].school_name + "<br> ")//Searches for schools with extracurricular activities you want.
      }
    }
  }
}

function choose() {
  var choice = parseInt(prompt("Select a choice using numbers \n 1) Choose languages you're interested in \n 2) Find out the bus routes for schools \n 3) Find out schools that has sports you want \n 4) Find out which school has AP exams \n 5) Find schools that have your extracurricular activities \n 6) Exit"));//Gives user choices


function nothing() {
	alert("Choose a number");
	choose(); 
}


function exit() {
  alert("You have exited.")//Exit script.
	window.stop; 
} 



if (choice === 1) {
  userLangu(); //choices for language
} else if (choice === 2) { 
  userRoutes(); //choices for bus routes
} else if (choice === 3) { 
  userSports(); //choices for sports
} else if (choice === 4) {
  userExam(); //choices for available AP exams
} else if (choice === 5) { 
  userActivity(); //choices for extracurricular activities 
} else if (choice === 6) { 
  exit(); //exit
} else {
	nothing(); //will go off if user doesn't type anything
} 

} 

choose(); //for prompt to pop out

} 

});


