import Formulaire from './Formulaire';
import Home from './Home';
import {                          // installation du module 'react router' pour definir les URL avec les composants
  BrowserRouter as Router,        // browserrouter utilise historique du html5
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
