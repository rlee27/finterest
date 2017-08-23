import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route } from 'react-router-dom';
import SignUpContainer from './sessions/sign_up_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedHomeRoute } from '../util/route_util';

const App = (props) => {
  return(
    <div className="parent">
      <header>

      </header>

      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedHomeRoute exact path="/" component={SignUpContainer} />
    </div>
  );
};
// have App component listen to the store, if currentUser render the homepage, else
// render the signUp.

export default App;
