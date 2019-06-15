import React from 'react';

const SectionHeader = ({ icon, title }) => {
  return (
    <div className='cont-head'> 
      <a href='###'>
        <div className='cont-title'>
          <span className={`icon icon-${icon}`}></span>
          <p>{title}</p>
        </div>   
        <div className='cont-more'>
          <p>进去看看</p>
          <span className='icon icon-more'></span>  
        </div>
      </a>
    </div>
  )
}

export default SectionHeader;
