import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = ({icon, title}) => {  
   
        return (
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <h2>
                <i className={icon}></i>
                    {title}
                </h2>  
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                </ul>              
            </nav>
        )
    
}

Header.defaultProps = {
    title : 'Github Finder',
    icon :'fab fa-github'
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Header
