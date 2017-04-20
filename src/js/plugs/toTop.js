// 返回顶部

function toTop(clickEleSelector){
	var clickEle = document.querySelector(clickEleSelector);
	var intervalId = null;
	clickEle.addEventListener('click', () => {
		intervalId = setInterval( () => {
			var rootNode = document.body.scrollTop === 0 ? document.documentElement : document.body;
			rootNode.scrollTop = rootNode.scrollTop - rootNode.scrollTop * 0.1;
			if(rootNode.scrollTop <= 0){
				clearInterval(intervalId);
			}
		}, 10);
	} );
}

export default toTop;