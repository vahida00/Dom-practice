// console.log(document.getElementById("header-title"));
// var header=document.getElementById("header-title");
// header.innerText="Good";
// header.innerHTML="bye";
// header.textContent="Hello";
// console.log(header.innerText);
// console.log(header.textContent);
// console.log(header.innerHTML);

// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].style.backgroundColor="#ff3568";
// // items[1].textContent="bold"; change the text
// items[1].style.fontWeight="bold";

// var header=document.querySelector("#main-header");
// header.style.borderBottom="solid 4px #ccc";

// var item=document.querySelector("li");

// // for(var i=0;i<item.length;i++){
// item.style.backgroundColor="#ff3568";

// var input=document.querySelector("input");
// input.value="Enter item";

// Traversing DOM
// parentNode and parentElement are interchangable;
var item=document.querySelector("#items");
// console.log(item.parentNode);
// console.log(item.childNodes);
// console.log(item.children[1]);
// console.log(item.firstChild);
// console.log(item.firstElementChild);
// console.log(item.lastElementChild);

// siblings
// previousSibling

// console.log(item.previousSibling);
// console.log(item.previousElementSibling);

// console.log(item.nextSibling);
 // console.log(item.nextElementSibling);

// var newDiv=document.createElement("div");
// console.log(newDiv);

// newDiv.className="Hello";
// newDiv.id="Hello1";
// newDiv.setAttribute("title","value");
// var newDivText=document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);

// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){
	// alert("buttonClicked");
	// document.querySelector("#main").style.backgroundColor="#ff3568";
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className); 
	// console.log(e.target.classList); 
	// console.log(e.type);
	// console.log(e.clientX);
	// console.log(e.clientY); 
	// console.log(e.offsetX);
	// console.log(e.offsetY);  
// 	console.log(e.altKey);
// 	console.log(e.shiftKey);
// 	console.log(e.ctrlKey);

// }

// runEvent is a function works same as buttonClicked
// var button = document.getElementById('button');
// // button.addEventListener('dblclick',runEvent);
// // button.addEventListener('click',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// var box=document.getElementById('box');
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mouseover',runEvent);

// input Events

// var itemInput=document.querySelector('input[type="text"]');
 var form=document.querySelector('form');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('input',runEvent);

// var select=document.querySelector('select');
// select.addEventListener('change',runEvent);
form.addEventListener('submit',runEvent);
function runEvent(e){
	// e.preventdefault();
	console.log("EVENT TYPE" + e.type);
	// console.log(e.target.value);
	// output.innerHTML='<h3>'+e.target.value+'</h3>'
	// document.body.style.display='none';
	// output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'
	// box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";	
	console.log(e.target.value);
}
