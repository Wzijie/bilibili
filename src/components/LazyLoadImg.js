import React from 'react';
import imgObserver from '../plugs/imgLazyLoadObserver';

const io = imgObserver();

const addObserver = (img) => {
  if (img) io.observe(img);
}

const LazyLoadImg = ({ url }) => (
  io
    ? <img alt='cover' data-img={url} ref={addObserver} />
    : <img src={url} alt='cover' />
);

export default LazyLoadImg;
