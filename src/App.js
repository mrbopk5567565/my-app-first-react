import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ColorfulTiles from './pages/ColorfulTiles';
import Giphy from './pages/Giphy';
import GiphyDetail from './pages/GiphyDetail'
import OpenWeather from './pages/OpenWeather';
import NotFound from './pages/NotFound';

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
            <Route path="/giphy-detail/:id" component={ GiphyDetail }/>
            <Route path="/open-weather" component={ OpenWeather }/>
            <Route component={ NotFound }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;