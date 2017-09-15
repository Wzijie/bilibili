import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import Home from '../home';
import Channel from '../channel';
import Live from '../live'
import Ranking from '../ranking';
import Video from '../video';
import Search from '../search';
import NoMatch from './NoMatch';
import './index.less';

const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      Layout
        ? (
          <Layout>
            <Component {...props} />
          </Layout>
        )
        : <Component {...props} />
    )} />
  );
}

const App = (props) => {
  return (
    // <Layout>
    <Switch>
      <RouteWithLayout layout={Layout} exact path='/' component={Home} />
      <RouteWithLayout layout={Layout} path='/channel' component={Channel} />
      <RouteWithLayout layout={Layout} path='/live' component={Live} />
      <RouteWithLayout layout={Layout} path='/ranking' component={Ranking} />
      <RouteWithLayout layout={Layout} path='/video/:aid' component={Video} />
      <Route path='/search' component={Search} />
      <RouteWithLayout layout={Layout} component={NoMatch} />
    </Switch>
    // </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.app
  }
};

export default withRouter(connect(mapStateToProps)(App));
