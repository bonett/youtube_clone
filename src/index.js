import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import ScrollToTop from './hoc';
import App from './containers/App';
import { store } from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import './style.css';

WebFont.load({
  google: {
    families: [
      'Open+Sans:300,300i,400,400i,600,600i,700,700i',
      'Material+Icons|Material+Icons+Outlined'
    ]
  },
  fontinactive: function (familyName) {
    if (familyName === 'Material Icons') {
      require('material-design-icons/iconfont/material-icons.css');
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
