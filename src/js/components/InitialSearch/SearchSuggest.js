
import React from 'react';

var SearchSuggest = React.createClass({
	render: function(){
		var searchSuggestData = this.props.searchSuggestData;
		return	<ul className='search-suggest'>
				{
					searchSuggestData.map((searchSuggestItem, index) => {
						
						// 查询搜索建议结果的html，替换script字符防止xss攻击
						// 组件使用属性dangerouslySetInnerHTML={{__html: suggestResultHTML}} 插入html
						var suggestResultHTML = searchSuggestItem.name.replace(/\<script/g, '<!--').replace(/\<\/script\>/g, '-->');
						// 搜索关键字
						var keyword = searchSuggestItem.value;
						// 是否是番剧搜索建议
						var isBangumi = searchSuggestItem.bgmcount === undefined ? false : true;

						return	<li key={index}>
									<a href={'search.html?keyword='+ keyword} dangerouslySetInnerHTML={{__html: suggestResultHTML}} ></a>
									{
										isBangumi
										? <span className='suggest-bangumi'>番剧</span>
										: ''
									}
								</li>
					})
				}
				</ul>
	}
});

export default SearchSuggest;