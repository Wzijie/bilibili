// index banner数据
var indexBannerImg = [
	'banner/banner_01.jpg',
	'banner/banner_02.jpg',
	'banner/banner_03.jpg',
	'banner/banner_04.jpg',
	'banner/banner_05.jpg',
	'banner/banner_06.jpg',
	'banner/banner_07.jpg'
]

// 将数组打乱然后随机返回3~5张图片
var indexBannerData = indexBannerImg.sort(() => {
	return Math.random()-0.5;
}).slice(0, Math.floor( Math.random() * (6-3) + 3 ));

export default indexBannerData;