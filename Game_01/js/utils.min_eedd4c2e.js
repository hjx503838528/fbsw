function getQueryString(url, name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = url.substr(1).match(reg);
	if (r != null)
		return (r[2]); 
	return null;
}

function getConfigGsApiPrefix(){
	return Config.gsApiPrefix;
}
function getConfigWebServer(){
	return Config.webServer;
}
function getConfigAssetsServer(){
	return Config.assetsServer;
}
function getConfigLanguage(){
	return Config.language;
}
function getGameSessionID(){
	var aCookie = document.cookie.split(";");
	var sessionID;
	for (var i=0; i < aCookie.length; i++)
	{
		var aCrumb = aCookie[i].split("=");
		console.log(aCrumb[0] + ":" + aCrumb[1]);
		if ("GS-X-SESSION-TOKEN" == aCrumb[0])
			sessionID = unescape(aCrumb[1]);
	}
	return sessionID;
}
