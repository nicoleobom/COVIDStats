import React from 'react';
import './index.css';

function Searchbar() {
    return(
        <div className="searchbar">
            <input type="text" className="input" placeholder="Enter a zipcode..." maxLength="5"/><a href="#"><i class="fas fa-search fa-2x"></i></a>
        </div>
    )
}

export default Searchbar;