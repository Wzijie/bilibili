import React from 'react';
import { getImageUrl } from '../../utils/httpRequest';

function lengthFormat(totalSecond) {
  let minute = Math.floor(totalSecond / 60);
  let second = Math.floor(totalSecond % 60);
  return `${minute < 10 ? `0${minute}` : minute }:${second < 10 ? `0${second}` : second }`;
}

class Player extends React.Component {

  // 加载video元素
  onLoadStart = (event) => {
    let { onLoadVideoElement } = this.props;
    onLoadVideoElement(event.target);
  }

  // 可以播放
  onCanPlay = () => {
    let { onPlay, videoElement } = this.props;
    videoElement.play();
    onPlay();
  }

  // 等待缓冲
  onWaiting = () => {
    let { onBufferedWaiting } = this.props;
    onBufferedWaiting();
  }

  // 缓冲后已就绪
  onPlaying = () => {
    let { onBufferedCompleted } = this.props;
    onBufferedCompleted();
  }

  // 播放位置改变
  onTimeUpdate = () => {
    let { videoElement, onChangeCurrentTime } = this.props;
    onChangeCurrentTime(videoElement.currentTime);
  }

  // 改变缓冲进度
  onProgress = () => {
    let { videoElement, onChangeBufferedTime } = this.props;
    if (videoElement.buffered.length !== 0) {
      onChangeBufferedTime(videoElement.buffered.end(videoElement.buffered.length - 1));
    }
  }

  // 播放
  playHandler = () => {
    let { videoElement, onPlay } = this.props;
    videoElement.play();
    onPlay();
  }

  // 暂停
  pauseHandler = () => {
    let { videoElement, onPause } = this.props;
    videoElement.pause();
    onPause();
  }

  // 计算当前进度条拖动的长度百分比
  computedTouchProgressRatio = (pageX, progress) => {
    pageX = pageX - progress.offsetLeft;
    pageX = pageX < 0 ? 0 : pageX;
    pageX = pageX > progress.offsetWidth ? progress.offsetWidth : pageX;
    return pageX / progress.offsetWidth;
  }

  // 进度条拖动开始
  onProgressTouchStart = () => {
    this.pauseHandler();
  }

  // 进度条拖动中
  onProgressTouchMove = (event) => {
    event.persist();
    let { onChangeCurrentTime, length } = this.props;
    let progressRatio = this.computedTouchProgressRatio(event.touches[0].pageX, event.currentTarget);
    onChangeCurrentTime(progressRatio * length);
  }

  // 进度条拖动结束改变播放位置
  onProgressTouchEnd = (event) => {
    event.persist();
    let { videoElement, length, onChangeCurrentTime } = this.props;
    let progressRatio = this.computedTouchProgressRatio(event.changedTouches[0].pageX, event.currentTarget);
    onChangeCurrentTime(progressRatio * length);
    videoElement.currentTime = progressRatio * length;
  }

  progressWidth = (currentTime, totalTime) => {
    return `${currentTime / totalTime * 100}%`;
  }

  render() {

    const {
      aid,
      videoUrl,
      cover,
      length,
      readyPlay,
      onReadyPlayComplete,
      paused,
      buffered,
      currentTime,
      bufferedTime,
      controlShow,
      onToggleControlShow
    } = this.props;

    return (
      <div className='video-container'>
        <div className='barrage'>
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>         
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>           
          <div className='barrage-track'></div>
        </div>
        <div className='player-container' onTouchStart={onToggleControlShow}>
          <video 
            className='player' 
            data-webkit-playsinline 
            preload='auto' 
            onLoadStart={this.onLoadStart}
            onCanPlay={this.onCanPlay} 
            onWaiting={this.onWaiting} 
            onPlaying={this.onPlaying} 
            onTimeUpdate={this.onTimeUpdate}
            onProgress={this.onProgress}
          >
            {readyPlay && <source src={videoUrl} type="video/mp4" />}
          </video>
        </div>
        <div className={`load-layer ${readyPlay && 'hide'}`} onClick={onReadyPlayComplete} >
          <img className='video-cover' src={getImageUrl(cover)} alt='cover' /> 
          <h2 className='video-load-title'>av{aid}</h2>
          <a className='app-down'>粉色有角三倍速缓冲，就用bilibili客户端 &gt;&gt;</a>
          <div className='video-length'>{lengthFormat(length)}</div>
          <i className='load-player player-icon'></i>
        </div>
        <div className={`player-control ${!controlShow && 'hide'}`}>
          <div className='time-container'>
            <span className='current-time'>{lengthFormat(currentTime)}</span>
            <span>/</span>
            <span className='total-time'>{lengthFormat(length)}</span>
          </div>
          <div className='progress' onTouchStart={this.onProgressTouchStart} onTouchMove={this.onProgressTouchMove} onTouchEnd={this.onProgressTouchEnd} >
            <div className='total-progress'></div>  
            <div className='buffered-progress' style={{width: this.progressWidth(bufferedTime, length)}}></div>
            <div className='current-progress' style={{width: this.progressWidth(currentTime, length)}}></div>
          </div>
          <div className='more-control'>
            <div className='danmu-toggle'>
              <i className='danmu-hide-icon'></i>
            </div>
            <div className='full-screen'>
              <i className='full-screen-icon'></i>
            </div>
          </div>
        </div>
        <div className={`state-icon ${!buffered && 'hide'}`}>
          <i className='loading-icon active'></i>
        </div>
        <div className={`state-icon ${!controlShow && 'hide'}`}>
          <i className={`play-icon ${!buffered && (paused && 'active')}`} onClick={this.playHandler} ></i>
          <i className={`pause-icon ${!buffered && (!paused && 'active')}`} onClick={this.pauseHandler} ></i>
        </div>
      </div>
    )
  }
}

export default Player;
