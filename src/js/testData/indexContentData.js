// 主页主要数据

/*
var hotData = [{
	cover: 'banner_02.webp',
	name: '热门推荐测试数据',
	play: '99999',
	barrage: '88888'
},{
	cover: 'banner_02.webp',
	name: '热门推荐测试数据',
	play: '99999',
	barrage: '88888'
},{
	cover: 'banner_02.webp',
	name: '热门推荐测试数据',
	play: '99999',
	barrage: '88888'
},{
	cover: 'banner_02.webp',
	name: '热门推荐测试数据',
	play: '99999',
	barrage: '88888'
}];
*/

function createNumData(num){ 
	return Math.ceil( Math.random()*num ); 
}
function createContentData( name = '这是一个名字', cover = 'cover_01.jpg', type = 'default', face = 'face_01.jpg', intro = '直播简介'){
	if(type === 'default'){
		return {
			"cover": cover,
			"name": name+'测试数据名',
			"play": createNumData(500000),
			"barrage": createNumData(50000)
		}
	};
	if(type === 'live'){
		return {
			"cover": cover,
			"name": name+'测试数据名',
			"face": face,
			"intro": intro,
			"online": createNumData(5000)
		}
	};
	if(type === 'bangumi'){
		return {
			"cover": cover,
			"name": name+'测试数据名',
			"updateTo": createNumData(48)
		}
	};
}

const indexContentData = {
	"hotData" : [
		createContentData('热门推荐'),
		createContentData('热门推荐'),
		createContentData('热门推荐'),
		createContentData('热门推荐')
	],
	"liveData" : [
		createContentData('正在直播', undefined, 'live'),
		createContentData('正在直播', undefined, 'live'),
		createContentData('正在直播', undefined, 'live'),
		createContentData('正在直播', undefined, 'live')
	],
	"bangumiData" : [
		createContentData('番剧更新', undefined, 'bangumi'),
		createContentData('番剧更新', undefined, 'bangumi'),
		createContentData('番剧更新', undefined, 'bangumi'),
		createContentData('番剧更新', undefined, 'bangumi'),
		createContentData('番剧更新', undefined, 'bangumi'),
		createContentData('番剧更新', undefined, 'bangumi')
	],
	"dougaData" : [
		createContentData('动画区'),
		createContentData('动画区'),
		createContentData('动画区'),
		createContentData('动画区')
	],
	"musicData" : [
		createContentData('音乐区'),
		createContentData('音乐区'),
		createContentData('音乐区'),
		createContentData('音乐区')
	],
	"danceData" : [
		createContentData('舞蹈区'),
		createContentData('舞蹈区'),
		createContentData('舞蹈区'),
		createContentData('舞蹈区')
	],
	"gameData" : [
		createContentData('游戏区'),
		createContentData('游戏区'),
		createContentData('游戏区'),
		createContentData('游戏区')
	],
	"technologyData" : [
		createContentData('科技区'),
		createContentData('科技区'),
		createContentData('科技区'),
		createContentData('科技区')
	],
	"lifeData" : [
		createContentData('生活区'),
		createContentData('生活区'),
		createContentData('生活区'),
		createContentData('生活区')
	],
	"kichikuData" : [
		createContentData('鬼畜区'),
		createContentData('鬼畜区'),
		createContentData('鬼畜区'),
		createContentData('鬼畜区')
	],
	"fashionData" : [
		createContentData('时尚区'),
		createContentData('时尚区'),
		createContentData('时尚区'),
		createContentData('时尚区')
	],
	"entData" : [
		createContentData('娱乐区'),
		createContentData('娱乐区'),
		createContentData('娱乐区'),
		createContentData('娱乐区')
	],
	"teleplayData" : [
		createContentData('电视剧区'),
		createContentData('电视剧区'),
		createContentData('电视剧区'),
		createContentData('电视剧区')
	],
	"movieData" : [
		createContentData('电影区'),
		createContentData('电影区'),
		createContentData('电影区'),
		createContentData('电影区')
	],
	"advertiseData" : [
		createContentData('广告区'),
		createContentData('广告区'),
		createContentData('广告区'),
		createContentData('广告区')
	]
};

export default indexContentData;
