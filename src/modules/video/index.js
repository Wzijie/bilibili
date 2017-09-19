import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { getVisibleList, getVisiblePartList } from './selector';
import { ReadyShow } from '../../components';
import Player from './Player';
import Description from './Description';
import Part from './Part';
import Tag from './Tag';
import Recommend from './Recommend';
import Comment from './Comment';
import './index.less';

class Video extends React.Component {

  componentDidMount() {
    let { aid } = this.props.match.params;
    this.fetchAllResource(aid);
    this.setTitle();
  }

  componentWillReceiveProps(nextProps) {
    let { aid: nextAid } = nextProps.match.params;
    let { aid } = this.props.match.params;
    if (nextAid !== aid) {
      this.fetchAllResource(nextAid);
    }
  }

  fetchAllResource = (aid) => {
    this.fetchPlayer(aid);
    // this.fetchDescription(aid);
    // this.fetchPart(aid);
    // this.fetchTag(aid);
    // this.fetchRecommend(aid);
    // this.fetchComment(aid);
  }

  fetchPlayer = (aid, page) => {
    let { playerRequest } = this.props.actions;
    playerRequest(aid, page);
  }

  fetchDescription = (aid) => {
    let { descriptionRequest } = this.props.actions;
    descriptionRequest(aid);
  }

  fetchPart = (aid) => {
    let { partRequest } = this.props.actions;
    partRequest(aid);
  }

  fetchTag = (aid) => {
    let { tagRequest } = this.props.actions;
    tagRequest(aid);
  }

  fetchRecommend = (aid) => {
    let { recommendRequest } = this.props.actions;
    recommendRequest(aid);
  }

  fetchMoreComment = () => {
    let { 
      actions: { commentRequest }, 
      comment: { commentPage }, 
      match: { params: { aid } } 
    } = this.props;
    commentRequest(aid, commentPage + 1);
  }

  setTitle = () => {
    let { aid } = this.props.match.params;
    document.title = `av${aid}`;
  }

  render() {
    const {
      match: { params: { aid } },
      actions: {
        readyPlayComplete,
        play,
        pause,
        bufferedWaiting,
        bufferedCompleted,
        loadVideoElement,
        changeCurrentTime,
        changeBufferedTime,
        toggleControlShow,
        toggleShowAllPart,
        showMore
      },
      player: {
        playerLoading,
        playerError,
        videoUrl,
        cover,
        length,
        readyPlay,
        paused,
        buffered,
        videoElement,
        currentTime,
        bufferedTime,
        controlShow,
        part
      },
      description: {
        descriptionLoading,
        descriptionError,
        title,
        username,
        face,
        intro,
        playCount,
        barrageCount,
        favorite,
        createTime,
        breadcrumb
      },
      part: {
        partLoading,
        partError,
        partList,
        showAllPart,
        partVisibleList
      },
      tag: {
        tagLoading,
        tagError,
        tagList
      },
      recommend: {
        recommendLoading,
        recommendError,
        recommendList,
        recommendVisibleList
      },
      comment: {
        commentLoading,
        commentError,
        commentList,
        commentCount
      },
    } = this.props;

    return (
      <div className='video-content'>
        <ReadyShow loading={playerLoading} error={playerError} >
          <Player
            aid={aid}
            videoUrl={videoUrl}
            cover={cover}
            length={length}
            readyPlay={readyPlay}
            onReadyPlayComplete={readyPlayComplete}
            paused={paused}
            onPlay={play}
            onPause={pause}
            buffered={buffered}
            onBufferedWaiting={bufferedWaiting}
            onBufferedCompleted={bufferedCompleted}
            videoElement={videoElement}
            onLoadVideoElement={loadVideoElement}
            currentTime={currentTime}
            onChangeCurrentTime={changeCurrentTime}
            bufferedTime={bufferedTime}
            onChangeBufferedTime={changeBufferedTime}
            controlShow={controlShow}
            onToggleControlShow={toggleControlShow}
          />
        </ReadyShow>
        <ReadyShow loading={descriptionLoading} error={descriptionError} >
          <Description
            aid={aid}
            title={title}
            username={username}
            face={face}
            intro={intro}
            playCount={playCount}
            barrageCount={barrageCount}
            favorite={favorite}
            createTime={createTime}
            breadcrumb={breadcrumb}
          />
        </ReadyShow>
        <ReadyShow loading={partLoading} error={partError} >
          <Part
            aid={aid}
            partCount={partList.length}
            partVisibleList={partVisibleList}
            showAllPart={showAllPart}
            toggleShowAllPart={toggleShowAllPart}
            part={part}
            onFetchPlayer={this.fetchPlayer}
          />
        </ReadyShow>
        <ReadyShow loading={tagLoading} error={tagError} >
          <Tag tagList={tagList} />
        </ReadyShow>
        <ReadyShow loading={recommendLoading} error={recommendError} >
          <Recommend recommendVisibleList={recommendVisibleList} length={recommendList.length} onShowMore={showMore} />
        </ReadyShow>
        <Comment
          commentList={commentList}
          count={commentCount}
          onFetchMoreComment={this.fetchMoreComment}
          loading={commentLoading}
          error={commentError}
        />
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    ...state.video,
    recommend: {
      ...state.video.recommend,
      recommendVisibleList: getVisibleList(state.video.recommend)
    },
    part: {
      ...state.video.part,
      partVisibleList: getVisiblePartList(state.video.part)
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));
