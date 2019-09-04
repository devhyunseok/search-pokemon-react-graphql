import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from '@apollo/react-hooks';
import client from 'modules/apolloClient';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App/>
    </Router>
  </ApolloProvider>
  , document.getElementById('root'));

