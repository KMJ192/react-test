import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SplitCode from './split_code/SplitCode';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splite-code" exact component={SplitCode}/>
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
