import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Edit } from 'pages/Edit';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
