
function navRoll(navSelector){
	var nav = document.querySelector(navSelector);

	// 同一个元素只能执行一次
	if(nav.isExecute === true){
		return;
	}
	nav.isExecute = true;

	nav.addEventListener('click', (event) => {
		if(event.target.nodeName !== 'LI' && event.target.nodeName !== 'A'){
			return;
		}
		// 获取li
		var navList = event.target.nodeName === 'A' ? event.target.parentNode : event.target;
		// li的宽度
		var navListWidth = navList.parentNode.children[0].offsetWidth;

		// 第一个li不需要进行偏移
		if(navList.offsetLeft !== 0){
			// 偏移值 = 当前li的offsetLeft - li的宽度
			var navOffsetLeft = navList.offsetLeft-navListWidth;
			// 最大偏移值为总宽度减去显示宽度
			var maxOffsetLeft = nav.lastElementChild.offsetLeft + nav.lastElementChild.offsetWidth - document.body.offsetWidth;
			// 超出则设为最大偏移值
			if(navOffsetLeft >= maxOffsetLeft){
				navOffsetLeft = maxOffsetLeft;
			}
			nav.style.transform = 'translateX(-'+ navOffsetLeft +'px)';
		}

		Array.from(nav.children).forEach((list) => {
			list.classList.remove('on');
		});
		navList.classList.add('on');
	});
}

export default navRoll;