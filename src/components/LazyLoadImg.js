import React from 'react';
import imgObserver from '../utils/imgLazyLoadObserver';
import { forbiddenImage } from '../common/setting';
import { getImageUrl } from '../utils/httpRequest';

const io = imgObserver();

const addObserver = (img) => {
  if (img) io.observe(img);
}

// 懒加载图片组件
// IntersectionObserver 不可用则直接返回图片
const LazyLoadImg = ({ url }) => (
  io
    ? <img alt='cover' data-img={forbiddenImage ? url : getImageUrl(url)} ref={addObserver} />
    : <img src={forbiddenImage ? url : getImageUrl(url)} alt='cover' />
);

export default LazyLoadImg;
