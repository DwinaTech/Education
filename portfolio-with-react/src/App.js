import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"

const  App = () =>{
  return (
   <Router>
   <div>
   <NavBar />
   <Switch>
   <Route path="/" component={Home} />>
   </Switch>
   </div>
   </Router>
  );
}

export default App;
