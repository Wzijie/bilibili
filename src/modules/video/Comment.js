import React from 'react';
import { Icon } from 'antd';
import { ReadyShow, LazyLoadImg } from '../../components';

const CommentItem = ({ message, face, username, createTime }) => {
  return (
    <li>
      <div className='comment-face'>
        <a>
          <Icon className='icon-loading' type="hourglass" />
          <LazyLoadImg url={face} />
        </a>
      </div>
      <div className='comment-main'>
        <div className='comment-info'>
          <a className='comment-name'>{username}</a>
          <span className='comment-date'>{new Date(createTime * 1000).toLocaleString()}</span>
        </div>
        <div className='comment-cont'>
          {message}
        </div>
      </div>
    </li>
  );
}

const CommentList = ({ dataList }) => {
  return (
    <ul className='comment-list'>
      {
        dataList.map((comment) => {
          let { content: { message }, member: { avatar, uname }, ctime, rpid } = comment;
          return (
            <CommentItem
              key={rpid}
              message={message}
              face={avatar}
              username={uname}
              createTime={ctime}
            />
          );
        })
      }
    </ul>
  );
}

const Comment = ({ commentList, count, onFetchMoreComment, loading, error }) => {
  return (
    <div className='comment'>
      <h2 className='section-title'>评论（{count}）</h2>
      <CommentList dataList={commentList} />
      <ReadyShow loading={loading} error={error} >
        <div className='load-more' onClick={onFetchMoreComment}>加载更多</div>
      </ReadyShow>
    </div>
  );
}

export default Comment;
