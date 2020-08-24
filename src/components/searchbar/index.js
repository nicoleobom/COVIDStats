import React from 'react';
import './index.css';
import News from '../news/index';

class Searchbar extends React.Component {
    state = {
        isActive: true
      };
    
      handleHide = () => {
        this.setState({isActive: false});
      };
    
    
    render() {
        return(
            <div className="searchbar">
                {this.state.isActive && <input type="text" className="input" placeholder="Enter a state..." maxLength="2"/>}
                {this.state.isActive && <a onClick={this.handleHide}><i className="fas fa-search fa-2x"></i></a>}
            </div>
        )
    }

}

export default Searchbar;