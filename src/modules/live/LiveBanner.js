import React from 'react';
import { Banner, BannerItem } from '../app/Banner';
import { getImageUrl } from '../../plugs/httpRequest';

const LiveBanner = ({ dataList, loading, error }) => {
  let { img: firstPic } = dataList[0] || {};
  let { img: lastPic } = dataList[dataList.length - 1] || {};
  return (
    <Banner dataList={dataList} loading={loading} error={error} >
      <BannerItem url={getImageUrl(lastPic)} />
      {
        dataList.map((banner) => {
          let { remark, img } = banner;
          return <BannerItem key={remark} url={getImageUrl(img)} />
        })
      }
      <BannerItem url={getImageUrl(firstPic)} />
    </Banner>
  );
}

export default LiveBanner;
