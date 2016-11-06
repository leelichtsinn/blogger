import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

// ReactDOM.render(
//   <h1>Hello World!</h1>,
//   document.getElementById('root')
// );

// TODO: where can we put a commentbox's postId?
ReactDOM.render(
  <App />,
  document.getElementById('react-comments')
);
