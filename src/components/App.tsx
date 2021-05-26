import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CoinAPI from './coin_api/CoinAPI';
import CoinHistory from './coin_api/CoinHistory';
import Default from './Default';
import SplitCode from './split_code/SplitCode';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Default}/>
        <Route path="/splite-code" exact component={SplitCode}/>
        <Route path="/coin_api" exact component={CoinAPI}/>
        <Route path="/coin_history" exact component={CoinHistory}/>
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
