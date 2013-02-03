chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse)
	{
		chrome.tabs.create({"url":"chrome://downloads"});
		for(i=0;i<request.arr.length;i++)
		{
			if(request.arr[i]!=null)
			{
				if(request.arr[i].indexOf('spacer') == -1)
				{
					console.log(request.arr[i]);
					chrome.downloads.download({"url":request.arr[i]});
					console.log(chrome.extension.lastError);
				}
			}
		}
	}
);
