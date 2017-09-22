import React from 'react';
import { Banner, BannerItem } from '../app/Banner';

const IndexBanner = ({ dataList, loading, error }) => {
  // let { pic: firstPic } = dataList[0];
  // let { pic: lastPic } = dataList[dataList.length - 1];
  return (
    <Banner dataList={dataList} loading={loading} error={error} >
      {
        dataList.map((banner) => {
          let { id, pic } = banner;
          return <BannerItem key={id} url={pic} />
        })
      }
    </Banner>
  );
}

// <BannerItem url={firstPic} />
// <BannerItem url={lastPic} />

export default IndexBanner;
