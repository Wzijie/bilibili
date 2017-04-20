// ajax
/*
url 请求地址
method 请求方式 GET POST
successHandler 请求成功时执行的方法
errorHandler 请求失败时执行的方法
*/
function ajaxRequest(url, method, successHandler, errorHandler){
	if(window.fetch !== undefined){
		fetch(url, {
			method: method
		}).then((response) => {
			// console.log(response);
			// 将json数据转换成对象
			return response.json();
		}).then((indexContentData) => {
			if(successHandler !== undefined){
				successHandler(indexContentData);
			}
		}).catch((error) => {
			if(errorHandler !== undefined){
				errorHandler(error);
			}
		});
	}else{
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onreadystatechange = (event) => {
			var target = event.target;
			console.log(event.target);
			if(target.readyState !== 4){
				return;
			}
			if(target.status === 200 || target.status === 304){
				var indexContentData = JSON.parse(target.responseText);
				if(successHandler !== undefined){
					successHandler(indexContentData);
				}
			}
		}
		xhr.send(null);
	}
}

export default ajaxRequest;