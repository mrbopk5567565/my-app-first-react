import React, {Component} from 'react';
import NavItem from './NavItem';
import navItems from './data/navData.js';
import './Header.scss';

class Header extends Component{
    render(){
        return (
            <div className="header">
                <nav className="nav">
                    <ul className="nav-list">
                        {navItems.map((navItem,idx) => 
                            <NavItem
                                key={idx}
                                lable={navItem.lable}
                                link={navItem.url}
                            />
                        )}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;