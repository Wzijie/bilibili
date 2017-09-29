import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BackTop } from 'antd';
// import Layout from './Layout';
// import Home from '../home';
// import Channel from '../channel';
// import Live from '../live'
// import Ranking from '../ranking';
// import Video from '../video';
// import Search from '../search';
// import NoMatch from './NoMatch';
import './index.less';
import router from './router';

// 添加布局组件
const RouteWithtLayout = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    Layout
      ? (
        <Route {...rest} render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )} />
      )
      : <Route component={Component} {...rest} />
  );
}

function getRouter() {
  return router.map((route) => {
    return <RouteWithtLayout key={route.title} {...route} />;
  });
}

const App = (props) => {
  return (
    <div>
      <Switch>
        {getRouter()}
      </Switch>
      <BackTop style={{ right: 50 }} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.app;
};

export default withRouter(connect(mapStateToProps)(App));
