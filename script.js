var myDemo = document.getElementById("demoparent");
console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName ("li");

console.log ("Number of li links:" +myDemoTags.length);
var linksInMenu = myDemo.getElementsByTagName ("li");
console.log("Number of Li items in Menu " +linksInMenu.length);
var myComments = document.getElementById ("commentary");

myComments.setAttribute("align","right");

myComments.setAttribute("style","color:red");

var newItem = document.createElement ("li");

var newText = document.createTextNode ("Hey this wasn't here before!");

myDemo.appendChild(newItem);
newItem.appendChild(newText);

alert("Hello World");
var aquaticanimals=prompt("How many aquatic animals do you know about?");
alert (aquaticanimals);

if (aquaticanimals<2) {
  alert("You are a beginner marine historian!");
}else {
  alert("You are a advanced marine historian!");
}
function myFunction() {
  var hour = new Date().getHours();
  var greeting;
  if (hour >4) {
    greeting = "Beginner marine historian!";
  } else {
    greeting = "Advanced marine historian!";
  }
  document.getElementById("demo").innerHTML = greeting;
}
var x = 2;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML=z;
console.log("Hello world!");

