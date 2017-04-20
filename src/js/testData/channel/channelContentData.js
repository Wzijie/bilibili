
function createData(name, iconClass, num = null){
	return {
		'name': name,
		'iconClass': iconClass,
		'num': num
	}
}

const channelContentData = [
	createData('直播', 'live'),
	createData('番剧', 'bangumi', Math.ceil(Math.random()*200)),
	createData('动画', 'douga', Math.ceil(Math.random()*200)),
	createData('音乐', 'music', Math.ceil(Math.random()*200)),
	createData('舞蹈', 'dance', Math.ceil(Math.random()*200)),
	createData('游戏', 'game', Math.ceil(Math.random()*200)),
	createData('科技', 'tech', Math.ceil(Math.random()*200)),
	createData('生活', 'life', Math.ceil(Math.random()*200)),
	createData('鬼畜', 'kichiku', Math.ceil(Math.random()*200)),
	createData('娱乐', 'ent', Math.ceil(Math.random()*200)),
	createData('电影', 'movie', Math.ceil(Math.random()*200)),
	createData('电视剧', 'tv', Math.ceil(Math.random()*200)),
	createData('时尚', 'fashion', Math.ceil(Math.random()*200)),
	createData('广告', 'advertise', Math.ceil(Math.random()*200))
];

export default channelContentData;