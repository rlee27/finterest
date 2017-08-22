import React from 'react';
import SessionFormContainer from './sessions/session_form_container';
import { Route } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <header>
        <h1>Finterest</h1>
      </header>

      <Route path="/login" component={SessionFormContainer} />
      <Route exact path="/" component={SessionFormContainer} />
    </div>
  );
};
// change the second route to render a user's feed page if logged in, otherwise, login/signup

export default App;
