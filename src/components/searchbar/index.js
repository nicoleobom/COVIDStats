import React from 'react';
import './index.css';

class Searchbar extends React.Component {
    showContent() {
        window.alert('yay');
    }
    
    render() {
        return(
            <div className="searchbar">
                <input type="text" className="input" placeholder="Enter a zipcode..." maxLength="5"/><a onClick={this.showContent}><i className="fas fa-search fa-2x"></i></a>
            </div>
        )
    }

}

export default Searchbar;