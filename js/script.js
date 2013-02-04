$("#album_photos_pagelet").livequery(function(){
	var link = document.createElement('a');
	link.setAttribute('href', 'mypage.htm');
	link.setAttribute('id', 'fbalbdlbut');
	link.setAttribute('href', '#');
	link.setAttribute('style', 'color:#000;background:rgb(214,214,214);margin:5px;padding:5px;position:relative;border:1px solid black;text-decoration:none');
	document.getElementsByClassName('fbPhotoAlbumHeader')[0].insertBefore(link, document.getElementsByClassName('fbPhotoAlbumOptionsLeft')[0].nextSibling);
	document.getElementById('fbalbdlbut').innerText='Download Album';
	
	document.getElementById('fbalbdlbut').addEventListener("click", function() {
			var dlarray = new Array(album_photos_pagelet.getElementsByTagName('i').length);
			for(i=0;i<album_photos_pagelet.getElementsByTagName('i').length;i++)
			{
				if(album_photos_pagelet.getElementsByTagName('i')[i].style.background!="")
				{
					var thumburl = album_photos_pagelet.getElementsByTagName('i')[i].style.background;
					thumburl = thumburl.substring(4, thumburl.length-1);
					var dlurl = String(thumburl);
					dlurl = dlurl.replace("/p206x206","");
					dlarray[i] = dlurl;
				}
			}
			chrome.extension.sendRequest({arr: dlarray});
		}, false);
});