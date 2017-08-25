import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedHomeRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import BoardDetailContainer from './boards/board_detail_container';
import NavBarContainer from './navbar/navbar_container';
import UserContainer from './user/user_container';

const App = (props) => {
  return(
    <div className="parent">
      <header>
        <NavBarContainer />
      </header>
      <div className="main-content">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <ProtectedHomeRoute path="/" component={UserContainer} />
        <Route path="/:userId/:boardTitle" component={BoardDetailContainer} />
      </div>
    </div>
  );
};
// have App component listen to the store, if currentUser render the homepage, else
// render the signUp.

export default App;
