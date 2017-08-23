import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route } from 'react-router-dom';
import SignUpContainer from './sessions/sign_up_container';
import BackgroundImage from './sessions/sign_up_background';

const App = (props) => {
  return(
    <div className="parent">
      <header>

      </header>

      <Route path="/login" component={SessionFormContainer} />
      <Route exact path="/" render={() => {
          return (
            <div>
              <BackgroundImage />
              <SignUpContainer />
            </div>
          );
        }} />
    </div>
  );
};
// have App component listen to the store, if currentUser render the homepage, else
// render the signUp.

export default App;
