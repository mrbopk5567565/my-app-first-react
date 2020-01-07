import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ColorfulTiles from './pages/ColorfulTiles';
import NotFound from './pages/NotFound';
import Giphy from './pages/Giphy';

import './App.scss';

class App extends React.Component {
  
  render() {      
    return ( 
      <div className = "app" >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/colorful-tiles" component={ ColorfulTiles }/>
            <Route path="/giphy" component={ Giphy }/>
            <Route component={ NotFound }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;