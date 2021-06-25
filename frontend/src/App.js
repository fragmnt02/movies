import {Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Edit} from './pages/Edit';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/movie/:id">
        <Edit />
      </Route>
      <Route path="/movie">
        <Edit />
      </Route>
    </Switch>
  );
}

export default App;
