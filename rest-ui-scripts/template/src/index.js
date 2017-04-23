import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import './index.css';

injectTapEventPlugin();

render(<App />, document.getElementById('root'));
