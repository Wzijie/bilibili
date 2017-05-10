
import React from 'react';
import LiveSection from './LiveSection.js';

// 主要内容
var LiveContent = React.createClass({
	componentDidMount: function(){
		this.props.loadingChange();
	},
	render: function(){
		
		var liveData = this.props.liveData;

		return	<div className='live-content'>	
						{
							liveData.map((liveSectionData, index) => {
								return <LiveSection liveSectionData={liveSectionData} key={index} />
							})
						}
						</div>
	}
});

export default LiveContent;