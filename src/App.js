import React,{ lazy, Suspense } from "react";
import reactDom from "react-dom";
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as Routes from'./Constants/routes'
const Login=lazy(()=>import('./Pages/login'));
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={Routes.LOGIN} component={Login} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
