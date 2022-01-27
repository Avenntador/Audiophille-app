import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fonts/fontawesome';
import App from './components/App';
import ScrollToTop from './components/utility/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

