var myDemo = document.getElementById("demoparent");
console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName ("li");

console.log ("Number of li links:"+myDemoTags.length);
var linksInMenu = myDemo.getElementsByTagName ("li");
console.log("Number of Li items in Menu " +linksInMenu.length);
var myComments = document.getElementById ("commentary");

myComments.setAttribute("align","right");

myComments.setAttribute("style","color:red");

var newItem = document.createElement ("li");

var newText = document.createTextNode ("Hey this wasn't here before!");

myDemo.appendChild(newItem);
newItem.appendChild(newText);

