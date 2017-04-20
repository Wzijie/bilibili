// 主页布局数据

/*
{
	type: 'hot',  // 类型
	classType: 'default',  // 样式类型
	title: '热门推荐',	// 标题
	titleIcon: 'hot',	// 标题图标
	more: '排行榜',		// 更多
	moreIcon: 'rank',	// 更多部分的图标
	content: null		// 具体数据
}
*/
function createContentData(type, classType = 'default', title, more = 'default', moreIcon = 'default'){
	return {
		type: type,
		classType: classType,
		title: title,
		titleIcon: type,
		more: more,
		moreIcon: moreIcon,
		content: null
	}
}

var mainContainerBoxData = [
	createContentData('hot', undefined, '热门推荐', '排行榜', 'rank'),
	createContentData('live', 'live', '正在直播', '查看更多直播'),
	createContentData('bangumi', 'bangumi', '番剧更新', '查看更多番剧'),
	createContentData('douga', undefined, '动画区'),
	createContentData('music', undefined, '音乐区'),
	createContentData('dance', undefined, '舞蹈区'),
	createContentData('game', undefined, '游戏区'),
	createContentData('technology', undefined, '科技区'),
	createContentData('life', undefined, '生活区'),
	createContentData('kichiku', undefined, '鬼畜区'),
	createContentData('fashion', undefined, '时尚区'),
	createContentData('ent', undefined, '娱乐区'),
	createContentData('teleplay', undefined, '电视剧区'),
	createContentData('movie', undefined, '电影区'),
	createContentData('advertise', undefined, '广告区')
];

export default mainContainerBoxData;