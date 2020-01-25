var songs =[
"songs/song_1.mp3",
"songs/song_2.mp3",
"songs/song_3.mp3",
"songs/song_4.mp3",
"songs/song_5.mp3",
"songs/song_6.mp3",
"songs/song_7.mp3",
"songs/song_8.mp3",
"songs/song_9.mp3",
"songs/song_10.mp3",
"songs/song_11.mp3"
]

var a1 = document.getElementsByTagName('li')
var a2 = document.getElementById('songNow')


function B1(i){			//播放
	a2.src = songs[i]
	document.getElementById('songNow').play() 
}
function B2(i){			//改顏色
	a1[i].style.backgroundColor = "rgba(100, 211, 120,0.25)"
}
function B3(){			//顏色回復
	for (var n = 0; n < 11; n++) {
		document.getElementsByTagName('li')[n].style.backgroundColor = "#101410"
	} 
}
function B4(i){				
	document.getElementById('nextBtn').onclick = function(){	//Next
			B3()
			i=i+1
			B2(i)
			B1(i)
			console.log(i)
	}
	document.getElementById('preBtn').onclick = function(){    //Pre
			B3()
			//B1()
			i=i-1
			B2(i)
			B1(i)
			console.log(i)
	}
}

function C1(i){	
	a1[i].onclick = function(){	  //click
		B3(i)
		B1(i)
		B2(i)
		B4(i)		
	}
}

for (var i=1;i<10;i++) {	//執行全部
	C1(i)
}

///////////////////////////////////////////////////////////////////////

document.getElementById('songNow').volume =0.3	//開場音量

//////////////////////////////////////////////////////////////////////

var songNow = document.getElementById('songNow')
var playBtn = document.getElementById('playBtn')




songNow.onpause = function(){	//暫停時可播
	playBtn.src = "images/play_icon.png"
	playBtn.onclick = function(){
		songNow.play()
	}
	// playBtn.onmouseover = function (){
	// 	playBtn.src = "images/play_icon_bright.png"
	// }
	// playBtn.onmouseout = function (){
	// 	playBtn.src = "images/play_icon.png"
	// }

	
	
	
}
songNow.onplay = function(){	//播放時可暫停
	playBtn.src = "images/pause_icon.png"
	playBtn.onclick = function(){
		songNow.pause()
	}
}
/////////////////////////////////////////////////////////////




