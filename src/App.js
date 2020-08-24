import React from 'react';
import './index.css';
import Searchbar from './components/searchbar/index';
// import News from './components/news/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';


class App extends React.Component {


  render() {
    return (
      <Router>
          {/* <Searchbar /> */}
          <div className="container">
            <Route path="/home" exact component={Home} />
            <Route path="/search" exact component={Searchbar} />
            <Route path="/" exact component={Searchbar} />
          </div>
      </Router>
    );
  }

}

export default App;
