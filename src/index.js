import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fonts/fontawesome';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

