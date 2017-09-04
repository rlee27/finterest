import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedHomeRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import BoardDetailContainer from './boards/board_detail_container';
import NavBarContainer from './navbar/navbar_container';
import UserContainer from './user/user_container';
import HomepageContainer from './homepage/homepage_container';
import PinDetailContainer from './pins/pin_detail_container';

const App = (props) => {
  return(
    <div className="parent">
      <header>
        <NavBarContainer />
      </header>

      <div className="main-content">
        <ProtectedHomeRoute exact path="/" component={HomepageContainer} />
        <Switch>
          <AuthRoute exact path="/login" component={SessionFormContainer} />
          <ProtectedRoute exact path="/:userId" component={UserContainer} />
          <ProtectedRoute exact path="/pins/:pinId" component={PinDetailContainer} />
          <ProtectedRoute exact path="/:userId/boards" component={UserContainer} />
          <ProtectedRoute exact path="/:userId/pins" component={UserContainer} />
          <ProtectedRoute exact path="/:userId/:boardTitle" component={BoardDetailContainer} />
        </Switch>
      </div>
    </div>
  );
};
// have App component listen to the store, if currentUser render the homepage, else
// render the signUp.

export default App;
