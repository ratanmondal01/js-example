// text change
function textChange(){

document.getElementById('h3').style.color = "red";

}
function loremChange(){
	document.getElementsByClassName('text-h1')[2].innerHTML = "Hello World!"
}

function changeDate(){
	document.getElementById('h5').innerHTML = Date()
}


function dateChange(){
	document.getElementById('c_h4').innerHTML = Date()
}

function changeClass(){
  
  document.getElementsByClassName('c_h3')[6].innerHTML = Date()	
}

function colorChange(){
	document.getElementsByClassName('c_h1')[2].style.color = "green";
}
function customColor(){
	document.getElementById('custom-h2').style.color = "red";
}
function customPara(){
	document.getElementById('cutome_h1').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ad accusamus vel nulla nihil porro consequatur, quia delectus cumque impedit mollitia."
}