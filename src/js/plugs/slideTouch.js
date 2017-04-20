// banner拖动焦点图
/*
** slideSelector 焦点图容器选择器 Selector
** slideActive 焦点图下方的圆点 Selector
** activeClass 圆点active时添加的class String
*/
export default function slideTouch(slideSelector, slideActive, activeClass){
	
		var slide = document.querySelector(slideSelector);

		// 同一个元素只能执行一次
		if(slide.isExecute === true){
			return;
		}
		slide.isExecute = true;

		var slideActive = document.querySelectorAll(slideActive); // 焦点图下方的点
		var slideActiveIndex = 0; 
		var touchStartX = 0; // 按下屏幕后记录X坐标
		var diffX = 0; // 松开屏幕时的X坐标 - touchStartX 的差值
		var slideIndex = 1; // 当前拖动到第几张图片
		var slideNum = slide.children.length; // 有几张焦点图
		var translateX = -3.75;	// 左右位移的值
		var intervalId = null;

		// 初始样式
		slide.style.width = slideNum + '00%';
		slide.style.transform = 'translateX(' +translateX+ 'rem)';
		slideActive[slideActiveIndex].classList.add(activeClass);

		// 清除样式方法
		// nodeList 节点集合
		// className 样式名
		function loopRemoveClass(nodeList,className){
			Array.from(nodeList).forEach((nodeItem) => {
				nodeItem.classList.remove(className);
			});
		};
		
		// 触摸开始
		slide.addEventListener('touchstart',function(event){
			// 记录当前触摸坐标
			touchStartX = event.touches[0].pageX;
			// 清除掉执行下一张banner切换的定时器
			clearInterval(intervalId);
		});

		slide.addEventListener('touchmove',function(event){
			// 拖动焦点图时禁止页面上下拖动
			event.preventDefault();
			// 记录当前拖动的手指坐标
			var touchMoveX = event.touches[0].pageX;
			// 拖动坐标 - 触摸坐标 得到拖动的距离
			diffX = touchMoveX - touchStartX;
			// 得到的坐标是以px为单位的数值，而我是以rem为单位的。
			// 除以100是因为我是以px/100 换算为rem单位的
			slide.style.transform = 'translateX(' + (translateX + diffX/100) + 'rem)';				
			
		});

		// 图片切换执行的内容
		function slideChangeHandle(){

			slide.style.transition = 'all 0.2s ease';
			// 焦点图位移，当前第几张图片 * 视口宽度为3.75rem
			translateX = -slideIndex * 3.75;
			slide.style.transform = 'translateX(' +translateX+ 'rem)';

			loopRemoveClass(slideActive,activeClass);
			slideActive[slideActiveIndex].classList.add(activeClass);


			setTimeout(function(){


				// 将动画过渡取消
				slide.style.transition = '0s';

				// 提醒：第一张图片跟倒数第二张是一样的，最后一张图片跟第二张是一样的
				if(slideIndex === slideNum-1){
					// 如果当前为最后一张图片，则跳到第二张图片
					slideIndex = 1;
					translateX = -slideIndex * 3.75;
					slide.style.transform = 'translateX(' +translateX+ 'rem)';

					// 将圆点聚焦到第一个
					slideActiveIndex = 0;
					loopRemoveClass(slideActive,activeClass);
					slideActive[slideActiveIndex].classList.add(activeClass);
				}
				if(slideIndex === 0){
					// 如果当前为第一张图片，则跳到倒数第二张
					slideIndex = slideNum-2;
					translateX = -slideIndex * 3.75;
					slide.style.transform = 'translateX(' +translateX+ 'rem)';

					// 将圆点聚焦到最后一个
					slideActiveIndex = slideActive.length - 1;
					loopRemoveClass(slideActive,activeClass);
					slideActive[slideActiveIndex].classList.add(activeClass);
				}

				// 之后再看代码时疑问为什么这里需要清除定时器
				// 在touchstart事件内不是清除过了吗
				// 问题就是这里的定时器是延迟200毫秒执行的
				// 要是在拖动过一次也就是end事件执行之后马上在200毫秒内再拖动时
				// 因为第二次触摸时延迟200毫秒的定时器还未执行，所以在第二次touchstart事件内清除是没意义的
				// 而在200毫秒后定时器启动，这时就会有一个定时器在运行，而这个定时器我预想是在第二次start时清除的
				// 在我松开这次触摸后又会有一个定时器运行。
				// 所有结论是如果我下一次拖动快过200毫秒就会多一个定时器，所以要在这里加一个清除定时器
				clearInterval(intervalId);
				intervalId = setInterval(slideNext,3000);

			//200毫秒是因为过渡动画transition为200毫秒
			},200);
		};

		slide.addEventListener('touchend',function(event){

			// 触摸时的坐标 === 松开时的坐标 (没有拖动，只是触摸然后松开，不执行切换banner图
			if(touchStartX === event.changedTouches[0].pageX){
				return;
			};

			// diffx在拖动事件中赋值，拖动时的手指坐标 - 触摸时的手指坐标 的差值
			// 如果为正即为往右拖动否则往左拖动
			if(diffX > 0){
				if(slideIndex > 0){
					slideIndex = slideIndex - 1;
				}
				if(slideActiveIndex > 0){
					slideActiveIndex = slideActiveIndex - 1;
				}
			}else if(diffX < 0){
				if(slideIndex < slideNum-1){
					slideIndex = slideIndex + 1;
				}
				if(slideActiveIndex < slideActive.length-1){
					slideActiveIndex = slideActiveIndex + 1;
				}
			};
			slideChangeHandle();
		});

		// 图片下一张执行的方法
		function slideNext(){
			if(slideIndex < slideNum-1){
				slideIndex = slideIndex + 1;
			}
			if(slideActiveIndex < slideActive.length-1){
				slideActiveIndex = slideActiveIndex + 1;
			}
			slideChangeHandle();
		};

		intervalId = setInterval(slideNext,3000);
	}

