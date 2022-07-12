import "./App.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wallets from "./pages/Wallets";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="workspace">
          <Sidenav />
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Wallets />
              </Route>
              <Route path="/transactions/:id" exact>
                <Transactions />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
