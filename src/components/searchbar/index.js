import React from 'react';
import './index.css';
import News from '../news/index';

class Searchbar extends React.Component {
    state = {
        isActive: false
      };
    
      handleShow = () => {
        this.setState({isActive: true});
      };
    
      handleHide = () => {
        this.setState({isActive: false});
      };
    
    //   render() {
    //       return (
    //         <div>
    //           {this.state.isActive && <h1>Hello react</h1>}
    //            {this.state.isActive ?(
    //               <button onClick={this.handleHide}>Hide</button>
    //            ) : (
    //              <button onClick={this.handleShow}>Show</button>
    //            )}
    //         </div>
    //       )
    //   }
    
    // state = {
    //     isActive: false
    // };

    // showContent() {
    //     window.alert('yay');
    //     this.setState({isActive: false})
    // }

    // hideContent() {

    // }
    
    render() {
        return(
            <div className="searchbar">
                {this.state.isActive && <input type="text" className="input" placeholder="Enter a zipcode..." maxLength="5"/>}
                <a onClick={this.handleHide}><i className="fas fa-search fa-2x"></i></a>
            </div>
        )
    }

}

export default Searchbar;