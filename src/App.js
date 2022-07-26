import Header from './components/Header/Headers';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
          <Header />
          <Switch>
            <Route path="/" exact>
              
            </Route>
            <Route path='/product/:slug'>

            </Route>
            <Route path="/men">
              
            </Route>
            <Route path="/women">
              
            </Route>
            <Route path="/kids" exact>
              
            </Route>
            <Route path="/shop">
              
            </Route>
            <Route path="/contact">
              
            </Route>
          </Switch>

          
        </header>
        <Home />
      </div>
    
    </BrowserRouter>
      
  );
}

export default App;
