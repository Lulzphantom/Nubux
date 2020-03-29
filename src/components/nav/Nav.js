import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import app from '../../config/firebase';

import logo from '../../assets/cloudLogo.png';
import './nav.scss';

export const Nav = () => {

    //get user of context
    const { currentUser } = useContext(AuthContext);
    
    const [menu, setMenu] = useState('');

    const LogOut = () => {
        app.auth().signOut();
    }

    const handleMenu = () => {
        setMenu(menu === '' ? 'is-active' : '');
    }

    return (
        <React.Fragment>
            <nav className="navbar is-fixed-top is-link">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item nav-logo" >
                        <img src={logo} alt="logo"/>
                        NubUx
                    </Link>                    
                    <span className="nav-info">
                        Xenter Software 
                    </span>

                    {
                        currentUser &&
                        <div role="button" onClick={handleMenu} className={`navbar-burger burger ${menu}`} aria-label="menu" aria-expanded="false" data-target="navMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>
                    }
                    
                </div>
                {
                    currentUser && 
                    <div id="navMenu" className={`navbar-menu ${menu}`}>
                        <div className="navbar-end">
                            <div className="navbar-end nav-controls">
                                <div className="navbar-item has-dropdown is-hoverable">                            
                                    <div className="navbar-link">
                                        <span>
                                            {currentUser.email}
                                        </span>                                    
                                    </div>
                                    <div className="navbar-dropdown is-right">
                                        <div onClick={LogOut} className="navbar-item drop-item">
                                            Cerrar sesión
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>                    
                }                
            </nav>
        </React.Fragment>
    )
}
