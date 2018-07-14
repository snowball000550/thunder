// vippage.js
document.getElementById("vipleveltext").onmouseover=function(){
	document.getElementById("viplevel").classList.add("showflex");
}
document.getElementById("vipleveltext").onmouseout=function(){
	document.getElementById("viplevel").classList.remove("showflex");
}