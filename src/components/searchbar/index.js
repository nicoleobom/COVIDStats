import React from 'react';
import './index.css';

function Searchbar() {
    return(
        <div className="searchbar">
            <input type="text" className="input" placeholder="Enter a zipcode..." />
        </div>
    )
}

export default Searchbar;