import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedHomeRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import SignUpContainer from './sessions/sign_up_container';
import BoardDetailContainer from './boards/board_detail_container';

const App = (props) => {
  return(
    <div className="parent">
      <header>

      </header>

      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedHomeRoute path="/" component={SignUpContainer} />
      <Route path="/:userId/:boardTitle" component={BoardDetailContainer} />
    </div>
  );
};
// have App component listen to the store, if currentUser render the homepage, else
// render the signUp.

export default App;
