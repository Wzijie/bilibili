
import React from 'react';

var SearchNav = React.createClass({
	getInitialState: function(){
		return { typeIsVideo: this.props.typeIsVideo };
	},

	componentWillReceiveProps: function (nextProps){
		this.setState({ typeIsVideo: nextProps.typeIsVideo });
	},

	searchNavClickHandler: function(type){
		return (event) => {
			// search-nav li 点击后添加选中class
			var navList = Array.from(event.currentTarget.parentNode.children).slice(0, -1);
			navList.forEach((navItem) => {
				navItem.classList.remove('menu-active');
			});
			event.currentTarget.classList.add('menu-active');
			this.props.requestSearchResult(type, '-1', 'default');
		}
	},

	// 切换filter-container筛选容器的显示隐藏
	filterBtnClick: function(event){
		var filterIcon = event.currentTarget.firstElementChild;
		var filterContainer = document.querySelector('.filter-container');
		if(this.state.typeIsVideo){
			filterIcon.classList.add('on');
			filterContainer.classList.add('show');
		}else{
			filterIcon.classList.remove('on');
			filterContainer.classList.remove('show');
		}
		this.setState({ typeIsVideo: !this.state.typeIsVideo });
	},

	render: function(){

		var searchNavData = this.props.searchNavData;

		return	<nav className='search-nav menu'>
							<ul className='menu-list'>
							{
								searchNavData.map((searchNavItem, index) => {

									// 标题，筛选关键字
									var { title, filterName } = searchNavItem;

									var firstListClass = index === 0 ? 'menu-active' : '';
									
									return	<li className={firstListClass} key={index} onClick={this.searchNavClickHandler(filterName)}>
														<a>{title}</a>
													</li>
								})
							}
							{
								this.props.typeIsVideo
								?	<li className='filter-btn' onClick={this.filterBtnClick}>
										<i className='filter-icon'></i>
									</li>
								: <li></li>
							}
							</ul>
						</nav>
	}
});

export default SearchNav;