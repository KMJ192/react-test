import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chart from './chart_test/Chart';
import Default from './Default';
import HooksTest from './hooks/HooksTest';
import CounterContainer from '../container/CounterContainer';
import NotFound from './NotFound';
// import CoinAPI from './coin_api/CoinAPI';
// import CoinHistory from './coin_api/CoinHistory';
// import CorsTest from './cors_test/CorsTest';
// import SplitCode from './split_code/SplitCode';
// import WasmTest from './wasm_test/WasmTest';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Default}/>
        <Route path="/chart" exact component={Chart} />
        <Route path="/hooks" exact component={HooksTest} />
        <Route path="/count" exact component={CounterContainer} />
        {/* <Route path="/splite-code" exact component={SplitCode}/>
        <Route path="/coin_api" component={CoinAPI}/>
        <Route path="/coin_api_history" component={CoinHistory}/>
        <Route path="/wasm-test" exact component={WasmTest}/>
        <Route path="/cors-test" exact component={CorsTest}/> */}
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
