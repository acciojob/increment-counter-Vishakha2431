//your JS code here. If required.
let btn=document.getElementById("incrementBtn")
let para=document.getElementById("counter")
btn.addEventListener("click",increment)
let count=0
function increment() {
	alert(count)
	count=count+1
para.innerText=count
	
}