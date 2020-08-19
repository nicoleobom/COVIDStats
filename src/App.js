import React from 'react';
import './index.css';
import Searchbar from './components/searchbar/index';
import News from './components/news/index';

class App extends React.Component {


  render() {
    return (
      <div>
        <Searchbar />
        <News />
      </div>
    );
  }

}

export default App;
