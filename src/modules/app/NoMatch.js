import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>找不到页面 <code>{location.pathname}</code></h3>
  </div>
)

export default NoMatch;
