import React, {Component} from 'react';
import {connect}  from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addUser } from "../../actions/index";


class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn_status : false,
            name: '',
            email: '',
            errorName: '',
            errorEmail: '',
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    handleChangeName(event) {

            this.setState({
                name: event.target.value
            });

    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    addUser() {
        let nameLength = this.state.name;
        let enterEmail = this.state.email;
        if(nameLength.length < 3) {
            this.setState({
                errorName: "Name must be longer 3 symbol",
            });
        }
        else if(enterEmail.indexOf('@') === -1) {
            this.setState({
                errorEmail: "Email must contain @ symbol",
            });
        }
        else {
            this.setState({
                errorName: "",
                errorEmail: "",
            });
            this.props.addUser(this.state);
        }
    }

    renderAuthForm() {
        const userdata = this.props.user.data;
        for(let users in userdata) {
            if(users === 'name') {
                var user_name = userdata[users];
            }
            if(users === 'email') {
                var user_email = userdata[users];
            }
        }
            return (
                <div>
                    <TextField
                        floatingLabelText={user_name ? user_name : 'Enter your name'}
                        onChange={this.handleChangeName}
                        errorText={this.state.errorName}
                    /><br/>
                    <TextField
                        floatingLabelText={user_email ? user_email : 'Enter your email' }
                        type="email"
                        onChange={this.handleChangeEmail}
                        errorText={this.state.errorEmail}
                    /><br/>
                </div>
            )
        }



    render() {
        const {name, email} = this.state;
        return(

            <div>
                <div className="auth__form">
                    <p className="auth__title">Authorization form</p>
                    <form>
                        {this.renderAuthForm() }
                    <RaisedButton
                        label="Save"
                        primary={true}
                        disabled={!name || !email}
                        className="auth__btn"
                        onClick={()=>this.addUser()}
                    />
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}

export default connect(mapStateToProps, {addUser})(Start);