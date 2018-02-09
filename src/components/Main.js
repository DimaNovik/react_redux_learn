import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/Header';
import NavLinks from './menu/NavLinks';
import Start from './content/Start';
import Cources from './content/Cources';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <MuiThemeProvider>
                    <div className="work__area">
                        <div className="work_menu">
                            <NavLinks />
                        </div>
                        <div className="work__content">
                            <Switch>
                                <Route exact path="/" component={Start} />
                                <Route path="/cources" component={Cources} />
                            </Switch>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Main;
