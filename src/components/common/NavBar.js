import React, {Component} from 'react';

class NavBar extends Component {


    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="hexal-logo.png" width="300" height="90" alt="ehealth logo" />
              </a>
            </div>
            </nav>
        )
    }
}

export default NavBar;