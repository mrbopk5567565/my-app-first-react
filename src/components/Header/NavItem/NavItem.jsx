import React, {Component} from 'react';

class NavItem extends Component{
    render(){
        const {lable, link} = this.props;
        console.log('nav', this.props)
        return(
            <li className="nav-item">
                <a className="nav-link" href={link}>{lable}</a>
            </li>
        )
    }
}

export default NavItem;