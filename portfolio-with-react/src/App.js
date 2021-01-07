import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import './app.css'

const  App = () =>{
  return (
   <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={Home} />>
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}

export default App;
