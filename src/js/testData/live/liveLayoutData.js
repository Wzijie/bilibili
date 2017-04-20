
function createData(title, iconClass, dataType){
	return {
		'title': title,
		'iconClass': iconClass,
		'dataType': dataType,
		'data': null
	}
};

const liveLayoutData = [
	createData('热门直播', 'hot', 'hot'),
	createData('最新开播', 'newest', 'newest'),
	createData('手机直播', 'mobile', 'mobile'),
	createData('唱见舞见', 'sing-dance', 'sing-dance'),
	createData('生活娱乐', 'ent-life', 'ent-life'),
	createData('绘画专区', 'draw', 'draw'),
	createData('御宅文化', 'otaku', 'otaku'),
	createData('单机联机', 'single', 'single'),
	createData('网络游戏', 'online', 'online'),
	createData('电子竞技', 'e-sports', 'e-sports'),
	createData('手游直播', 'mobile-game', 'mobile-game')
];

export default liveLayoutData;