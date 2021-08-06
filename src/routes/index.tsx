import { Home } from 'pages/Home';
import { NewRoom } from 'pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterNames from './RouterNames';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path={RouterNames.home} exact component={Home} />
      <Route path={RouterNames.newRoom} component={NewRoom} />
    </BrowserRouter>
  );
};

export default Routes;
