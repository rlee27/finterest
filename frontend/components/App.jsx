import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route } from 'react-router-dom';
import SignUpContainer from './sessions/sign_up_container';

const App = () => {
  return(
    <div>
      <header>
        <h1>Finterest</h1>
      </header>

      <Route path="/login" component={SessionFormContainer} />
      <Route exact path="/" component={SignUpContainer} />
    </div>
  );
};
// have App component listen to the store, if currentUser render the homepage, else
// render the signUp.

export default App;
