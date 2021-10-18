import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPeople from './pages/ListPeople';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListPeople} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
