// 图片懒加载
function imgLazyLoad(imgBoxSelector, isFadeIn, listBoxSelector, fadeInClass){

	var imgBoxArray = [...document.querySelectorAll(imgBoxSelector)];
	var isScroll = false; // 让滚动事件执行的少一点
	var removeEventTime = null;

	// ranking排行榜页面用到的列项容器
	var listBox = isFadeIn !== undefined ? document.querySelectorAll(listBoxSelector) : null;

	// 符合条件的图片显示
	var imgShow = function(){
		imgBoxArray.forEach((imgBox, key) => {
			// 如果这个图片容器已经插入了图片则退出此次操作
			if(imgBox.innerHTML !== ''){

				// 这个判断是为了排行榜页加的，需要处理一些特殊的地方
				// 排行榜页图片容器会出现已有图片的情况，不需要执行插入图片，但是要将容器显示出来
				if(listBox !== null){
					listBox[key].classList.add(fadeInClass);
				}

				return;
			}

			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

			// 排行榜页的图片容器的父元素用了flex属性，导致offsetTop为0，使用父元素的offsetTop
			var showEleOffsetTop = listBox === null ? imgBox.offsetTop : listBox[key].offsetTop;

			// 视口上方因滚动隐藏的区域 + 视口高度 >= 图片离顶部的距离 则可以认为图片出现在视口底部离页面顶部的距离范围内
			// -50意思是判定点为图片顶部再往上50px
			if(scrollTop + window.innerHeight >= showEleOffsetTop - 50){
				var coverImgUrl = imgBox.getAttribute('data-img');
				var coverImgHtml = '<div class="cover-img" \
									style="background-image: url('+coverImgUrl+')" > \
									</div>';
				imgBox.innerHTML = coverImgHtml;

				// ranking排行榜页面用到的列项淡入效果
				if(listBox !== null){
					listBox[key].classList.add(fadeInClass);
				}

				setTimeout(() => {
					imgBox.firstElementChild.style.opacity = '1';
				},50)
			}
		});

		// 图片加载完毕后清除滚动事件
		var imgDisplayComplete = imgBoxArray.every((item) => {
			return item.innerHTML !== '';
		});
		if(imgDisplayComplete){
			window.onscroll = undefined;
		}

	}

	// 默认执行一次
	imgShow();

	var scrollHandler = function(){
		if(isScroll === true){
			return;
		}
		console.log('imgLazyLoad');
		imgShow();
		isScroll = true;

		// 限制100毫秒内最多执行一次
		setTimeout(() => {
			isScroll = false;
		},100);
	};

	// 后来再看下面这句没意义，赋值操作已经覆盖了事件
	// window.onscroll = undefined;
	window.onscroll = scrollHandler;
}

export default imgLazyLoad;