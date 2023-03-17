import Formulaire from './Formulaire';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App-style'>
        <Switch>
          <Route exact path='/' element={<Home />} />
          <Route path='/Formulaire' element={<Formulaire />} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
