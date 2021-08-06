import { Home } from 'pages/Home';
import { NewRoom } from 'pages/NewRoom';
import Room from 'pages/Room';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RouterNames from './RouterNames';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RouterNames.home} exact component={Home} />
        <Route path={RouterNames.newRoom} component={NewRoom} />
        <Route path={RouterNames.room} component={Room} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
