import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NProgress from 'nprogress';
import '../../common/nprogress.css';
import { 
  recommendRequest, 
  liveRequest,
  bangumiRequest,
  mainRequest,
  bannerRequest
} from './actions';
import RecommendSection from './RecommendSection';
import LiveSection from './LiveSection';
import BangumiSection from './BangumiSection';
import MainSection from './MainSection';
import IndexBanner from './IndexBanner';

const actionCreators = {
  recommendRequest,
  liveRequest,
  bangumiRequest,
  mainRequest,
  bannerRequest
};

class Home extends React.Component {

  componentWillMount() {
    NProgress.start();
  }

  componentDidMount () {
    NProgress.done();
    this.fetchRecommend();
    this.fetchLive();
    this.fetchBangumi();
    this.fetchMain();
    this.fetchBanner();
  }

  fetchRecommend = () => {
    const { recommendRequest } = this.props;
    recommendRequest();
  }

  fetchLive = () => {
    const { liveRequest } = this.props;
    liveRequest();
  }

  fetchBangumi = () => {
    const { bangumiRequest } = this.props;
    bangumiRequest();
  }

  fetchMain = () => {
    const { mainRequest } = this.props;
    mainRequest();
  }

  fetchBanner = () => {
    const { bannerRequest } = this.props;
    bannerRequest();
  }

  render() {
    const { 
      recommendList, 
      recommendLoading, 
      recommendError,
      liveList,
      liveLoading,
      liveError,
      bangumiList,
      bangumiLoading,
      bangumiError,
      mainList,
      mainLoading,
      mainError,
      bannerList,
      bannerLoading,
      bannerError
    } = this.props;

    return (
      <div>
        <IndexBanner dataList={bannerList} loading={bannerLoading} error={bannerError} />
        <RecommendSection dataList={recommendList} loading={recommendLoading} error={recommendError} />
        <LiveSection dataList={liveList} loading={liveLoading} error={liveError} />
        <BangumiSection dataList={bangumiList} loading={bangumiLoading} error={bangumiError} />
        <MainSection mainList={mainList} loading={mainLoading} error={mainError} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.home;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
