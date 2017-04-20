
function createScriptJsonp(src){
	var scriptEle = document.createElement('script');
	scriptEle.src = src;
	try{
		return document.body.appendChild(scriptEle);
	}catch(error){
		console.log(error,'createScriptJsonp');
	}
	
}

export default createScriptJsonp;