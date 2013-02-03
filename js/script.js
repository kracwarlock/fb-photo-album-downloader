$("#album_photos_pagelet").livequery(function(){
	var link = document.createElement('a');
	link.setAttribute('href', 'mypage.htm');
	link.setAttribute('id', 'fbalbdlbut');
	link.setAttribute('href', '#');
	link.setAttribute('style', 'float:left;color:#000;background:#fff;margin:5px;padding:5px');
	document.getElementById('headNav').appendChild(link);
	document.getElementById('fbalbdlbut').innerText='Download Album';
	
	document.getElementById('fbalbdlbut').addEventListener("click", function() {
			console.log("click");
			var dlarray = new Array(album_photos_pagelet.getElementsByTagName('i').length);
			for(i=0;i<album_photos_pagelet.getElementsByTagName('i').length;i++)
			{
				if(album_photos_pagelet.getElementsByTagName('i')[i].style.background!="")
				{
					var thumburl = album_photos_pagelet.getElementsByTagName('i')[i].style.background;
					thumburl = thumburl.substring(4, thumburl.length-1);
					var dlurl = String(thumburl);
					dlarray[i] = dlurl;
				}
			}
			chrome.extension.sendRequest({arr: dlarray});
		}, false);
});