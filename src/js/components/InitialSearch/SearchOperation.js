
import React from 'react';

var SearchOperation = React.createClass({

	// 表单change事件
	keywordChangeHandler: function(event){
		// 改变keyword关键字数据
		this.props.keywordChange(event.target.value);
	},

	// 清空keyword关键字数据
	keywordClear: function(){
		this.props.keywordChange('');
	},

	render: function(){

		// 切换搜索面板是否显示方法
		var toggleInitialSearch = this.props.toggleInitialSearch;
		// 关键字
		var keyword = this.props.keyword;
		// 是否显示删除按钮
		var deleteIconShow = keyword === '' ? '' : ' show';
		
		return	<div className='search-operation'>
							<form action='search.html' method='GET' className='search-form'>
								<input className='search-input' name='keyword' type='text' value={keyword} autoComplete='off' placeholder='搜索视频、番剧、up主或AV号' onChange={this.keywordChangeHandler} ref="searchInput" />
							</form>
							<i className={'search-input-delete' + deleteIconShow} onClick={this.keywordClear} ref='deleteIcon'></i>
							<div className='search-cancel' onClick={toggleInitialSearch}>取消</div>
						</div>
	}
});

export default SearchOperation;