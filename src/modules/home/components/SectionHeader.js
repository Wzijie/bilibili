import React from 'react';

const SectionHeader = ({ title, icon, children }) => {
  return (
    <div className='cont-head'> 
      <a href='###'>
        <div className='cont-title'>
          <span className={`index-sprite index-sprite-${icon}`}></span>
          <p>{ title }</p>
        </div>
        <div className='cont-more'>
          { children }
        </div>
      </a>
    </div>
  )
}

export default SectionHeader;
