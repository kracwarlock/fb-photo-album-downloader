$("#album_photos_pagelet").livequery(function(){
	var link = document.createElement('a');
	link.setAttribute('href', 'mypage.htm');
	link.setAttribute('id', 'fbalbdlbut');
	link.setAttribute('href', '#');
	link.setAttribute('style', 'float:left;color:#000;background:#fff;margin:5px;padding:5px');
	document.getElementById('headNav').appendChild(link);
	document.getElementById('fbalbdlbut').innerText='Download Album';
	
	document.getElementById('fbalbdlbut').addEventListener("click", function() {
			var dlarray = new Array(album_photos_pagelet.getElementsByTagName('i').length);
			for(i=0;i<album_photos_pagelet.getElementsByTagName('i').length;i++)
			{
				if(album_photos_pagelet.getElementsByTagName('i')[i].style.background!="")
				{
					var thumburl = album_photos_pagelet.getElementsByTagName('i')[i].style.background;
					thumburl = thumburl.substring(4, thumburl.length-1);
					var hdurl = thumburl.replace("_a","_n");
					var dlurl = hdurl+"?dl=1";
					dlarray[i] = dlurl;
				}
			}
			chrome.extension.sendRequest({arr: dlarray});
		}, false);
		
	for(i=0;i<album_photos_pagelet.getElementsByTagName('i').length;i++)
	{
		if(album_photos_pagelet.getElementsByTagName('i')[i].style.background!="")
		{
			var b = document.createElement('div');
			b.setAttribute('id', 'hmmm'+i);
			b.setAttribute('style', 'position:relative;top:-212px;background:#ccc;right:0px;border:2px solid black;width:20px;height:20px;z-index:99;');
			album_photos_pagelet.getElementsByTagName('i')[i].parentNode.parentNode.parentNode.appendChild(b);
			
			var c = document.createElement('img');
			c.setAttribute('id', 'tick'+i);
			c.setAttribute('width', '20px');
			c.setAttribute('height', '20px');
			c.setAttribute('src', chrome.extension.getURL("images/tick.png"));
			c.setAttribute('style', 'display:none;');
			document.getElementById('hmmm'+i).appendChild(c);
		}
	}
});

$(document).ready(function(){
	for(i=0;i<album_photos_pagelet.getElementsByTagName('i').length;i++)
	{
		if(album_photos_pagelet.getElementsByTagName('i')[i].style.background!="")
		{
			$("#hmmm"+i).live('click',function(){
				$(this).find("img").toggle();
			});
		}
	}
});
/*
$("#static_set_pagelet").livequery(function(){
	var link = document.createElement('a');
	link.setAttribute('href', 'mypage.htm');
	link.setAttribute('id', 'fbalbdlbut');
	link.setAttribute('href', '#');
	link.setAttribute('style', 'float:left;color:#000;background:#fff;margin:5px;padding:5px');
	document.getElementById('headNav').appendChild(link);
	document.getElementById('fbalbdlbut').innerText='Download Album';
	document.getElementById('fbalbdlbut').addEventListener("click", function() {
			var dlarray = new Array(static_set_pagelet.getElementsByTagName('i').length);
			for(i=0;i<static_set_pagelet.getElementsByTagName('i').length;i++)
			{
				if(static_set_pagelet.getElementsByTagName('i')[i].style.background!="")
				{
					var thumburl = static_set_pagelet.getElementsByTagName('i')[i].style.background;
					thumburl = thumburl.substring(4, thumburl.length-1);
					var hdurl = thumburl.replace("_a","_n");
					var dlurl = hdurl+"?dl=1";
					dlarray[i] = dlurl;
				}
			}
			chrome.extension.sendRequest({arr: dlarray});
		}, false);
});
*/