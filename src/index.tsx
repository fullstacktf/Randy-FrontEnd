import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from "./contexts/AppProvider";

const application = <AppProvider>
  <App/>
</AppProvider>;

ReactDOM.render(application, document.getElementById('root'));

serviceWorker.unregister();


