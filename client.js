console.log('client.js');
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

// TODO: where can we put a commentbox's postId?
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
