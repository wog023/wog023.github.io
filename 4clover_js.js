

function changeLogo() {
	var pic1 = "images/pic1.jpg"
	var pic2 = "images/pic2.jpg"
	var pic = document.getElementById('pic')

	switch(pic.getAttribute('src')){
		case "images/pic1.jpg":
		pic.src=pic2
		break;

		case "images/pic2.jpg":
		pic.src=pic1
		break;
	}
}



/////////////////////pre next 按鈕動////////////////////////
var preBtn = document.getElementById('preBtn')
	preBtn.onmouseover = function (){
		this.src = "images/pre_icon_bright.png"
	}
	preBtn.onmouseout = function (event){
		this.src = "images/pre_icon.png"
	}
var nextBtn = document.getElementById('nextBtn')
	nextBtn.onmouseover = function (event){
		this.src = "images/next_icon_bright.png"
	}
	nextBtn.onmouseout = function (event){
		this.src = "images/next_icon.png"
	}
////////////////////////play 按鈕//////////////////////////
// var playBtn = document.getElementById('playBtn')
// document.getElementById('playNow').onpause = function(){
// 	playBtn.onmouseover = function (){
// 		this.src = "images/play_icon_bright.png"
// 	}
// 	playBtn.onmouseout = function (){
// 		this.src = "images/play_icon.png"
// 	}
// }
	
///////////////////////album 簡介//////////////////////////////
document.getElementById('album').onmouseover = function(){
	getElementById('albumInfo').style.visibility = "visible"
}
//////////////////////////////////////////////////////////// 






			

			










			
		




