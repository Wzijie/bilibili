
import React from 'react';

var SearchNav = React.createClass({

	// search-nav li 点击后添加选中class
	searchNavClickHandler: function(type){
		return (event) => {
			var navList = Array.from(event.currentTarget.parentNode.children).slice(0, -1);
			navList.forEach((navItem) => {
				navItem.classList.remove('menu-active');
			});
			event.currentTarget.classList.add('menu-active');
			this.props.requestSearchResult(type);
		}
	},

	// 切换filter-container筛选容器的显示隐藏
	toggleFilterContainer: false,
	filterBtnClick: function(event){
		var filterIcon = event.currentTarget.firstElementChild;
		var filterContainer = document.querySelector('.filter-container');
		this.toggleFilterContainer = !this.toggleFilterContainer;
		if(this.toggleFilterContainer){
			filterIcon.classList.add('on');
			filterContainer.classList.add('show');
		}else{
			filterIcon.classList.remove('on');
			filterContainer.classList.remove('show');
		}
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
								<li className='filter-btn' onClick={this.filterBtnClick}>
									<i className='filter-icon'></i>
								</li>
							</ul>
						</nav>
	}
});

export default SearchNav;