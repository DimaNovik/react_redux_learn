import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect}  from 'react-redux';
import { loadData } from "../../actions/index";

class NavLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCheck: true,
            secondCheck: false,
        }
    }
    setFirstCheck() {
        this.setState({
            firstCheck: true,
            secondCheck: false,
        })
        delete this.props.loaded.load;
    }
    setSecondCheck() {
        this.setState({
            firstCheck: false,
            secondCheck: true,
        })
    }



    render() {
        return (
            <Paper>
                <Menu>
                    <MenuItem
                        primaryText="Get Start"
                        containerElement={<NavLink exact to="/"/>}
                        checked={this.state.firstCheck}
                        onClick={()=>this.setFirstCheck()}
                    />
                    <MenuItem
                        primaryText="Cources"
                        containerElement={<NavLink to="/cources" />}
                        checked={this.state.secondCheck}
                        onClick={()=>this.setSecondCheck()}
                    />
                </Menu>
            </Paper>
        )
    }

}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {loadData})(NavLinks);