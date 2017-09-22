import React from 'react';
import { ReadyShow } from '../../components';

const BannerItem = ({ url }) => (
  <li>
    <a>
      <img src={url} alt='banner' />
    </a>
  </li>
)

const Banner = ({ dataList, loading, error, children }) => (
  <div className='banner'>
    <ReadyShow loading={loading} error={error} >
      <ul className='slide'>
        {children}
      </ul>
    </ReadyShow>
    <ul className="slide-active">
      {
        dataList.map((item, index) => {
          return <li key={index}></li>
        })
      }
    </ul>
  </div>
)

export { Banner, BannerItem };
