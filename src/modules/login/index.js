
import { connect } from 'react-redux';
import LoginView from './LoginView';
import { fetchLogin } from './action.js';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  // console.info('state to props', state);
  return {
    ...state.login,
    ...state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (values) => {
      dispatch(fetchLogin(values));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));