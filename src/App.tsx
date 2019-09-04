import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from 'containers/Home';
import GlobalStyle from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Route exact={true} path={'/'} component={Home}/>
      {/*<Route exact={true} path={'/details/:albumId'} component={Detail}/>*/}
    </Fragment>
  );
};

export default App;
