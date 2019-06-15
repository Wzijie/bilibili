import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Channel extends React.Component {
  render() {
    return (
      <div>
        <p>channel path: {this.props.location.pathname}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.channel;
}

export default withRouter(connect(mapStateToProps)(Channel));
