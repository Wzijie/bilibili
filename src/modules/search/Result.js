import React from 'react';

class Result extends React.Component {
  render() {

    const { 
      match: { params: { keyword } }
    } = this.props;

    return (
      <div>{keyword}</div>
    );
  }
}

export default Result;
