import React, {Component} from 'react';
import Logo from '../../images/header-logo.png';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__area">
                    <div className="header__item">
                        <img src={Logo} alt="Beetroot Logo"/>
                    </div>
                    <div className="header__item">
                        <p className="header__title">Beetroot Academy</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;