import Layout from './Layout';
import Home from '../home';
import Live from '../live'
import Ranking from '../ranking';
import Video from '../video';
import Search from '../search';
import NoMatch from './NoMatch';

const router = [
  {
    title: 'home',
    path: '/',
    component: Home,
    layout: Layout,
    exact: true
  }, {
    title: 'live',
    path: '/live',
    component: Live,
    layout: Layout
  }, {
    title: 'ranking',
    path: '/ranking',
    component: Ranking,
    layout: Layout
  }, {
    title: 'video',
    path: '/video/:aid',
    component: Video,
    layout: Layout
  }, {
    title: 'search',
    path: '/search',
    component: Search
  }, {
    title: 'noMatch',
    component: NoMatch,
    layout: Layout
  }
];

export default router;
