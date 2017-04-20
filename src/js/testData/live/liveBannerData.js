
// live banner数据
var liveBannerImg = [
	'live/banner/banner_01.jpg',
	'live/banner/banner_02.jpg',
	'live/banner/banner_03.jpg',
	'live/banner/banner_04.jpg',
	'live/banner/banner_05.jpg',
]

// 将数组打乱然后随机返回3~5张图片
var liveBannerData = liveBannerImg.sort(() => {
	return Math.random()-0.5;
}).slice(0, Math.floor( Math.random() * (6-3) + 3 ));

export default liveBannerData;