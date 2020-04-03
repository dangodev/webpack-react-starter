import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const appEl = document.createElement('div');
appEl.id = 'app';
document.body.appendChild(appEl);

ReactDOM.render(<App />, document.getElementById('app'));
