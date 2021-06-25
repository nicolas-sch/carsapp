import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { AddCar } from './cars/AddCar';
import { EditCar } from './cars/EditCar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cars/add" component={AddCar} />
          <Route exact path="/cars/edit/:id" component={EditCar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
