import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Layout from './Layout';
import Home from '../home';
import Channel from '../channel';
import Live from '../live'
import Ranking from '../ranking';
import Video from '../video';
import NoMatch from './NoMatch';
import './index.less';


const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/channel' component={Channel} />
        <Route path='/live' component={Live} />
        <Route path='/ranking' component={Ranking} />
        <Route path='/video/:aid' component={Video} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.app
  }
};

export default withRouter(connect(mapStateToProps)(App));
