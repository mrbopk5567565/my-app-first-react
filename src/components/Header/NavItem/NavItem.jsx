import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component{
    render(){
        const {lable, link} = this.props;
        // console.log('nav', this.props)
        return(
            <li className="nav-item">
                <Link className="nav-link" to={link}>{lable}</Link>
                {/* sử dụng link thì href --> to */}
            </li>
        )
    }
}

export default NavItem;