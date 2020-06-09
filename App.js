import React, {useState} from 'react';
import logo from './logo.svg';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Jobs from "./pages/Job";
// import Login from "./pages/Login";
import Details from "./pages/CandidatePage";

function App() {
  const [user, setUser] = useState({ isAuthenticated: true });
  const FourOhFourPage = () => {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    );
  };
  const ProtectedRoute = (props) => {
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <Switch>
      <ProtectedRoute
          path="/job/:id"
          render={(props) => <Details {...props} />}
        />
    <Route path="/Detail" component={Details}/>
    <Route path="/jobs" component={Jobs}/>
    {/* <Route path="/Login" component={Login}/> */}
    <Route path="*" component={FourOhFourPage} />
    
</Switch>
  
  );
}

export default App;
