import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect}  from 'react-redux';
import { loadData } from "../../actions/index";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Cources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cources: [],
            value_btn: false,
        }
    }

    loadData() {
        fetch("http://www.mocky.io/v2/5a7b53723000003a3428bea5")
            .then(
                this.setState({
                    value_btn: true,
                })
            )
            .then( (response) => {

                return response.json() })
            .then( (json) => {
                this.setState({
                    cources: json.cources,
                    value_btn: false
                });
                this.props.loadData(this.state);
            })
            .catch(error => {
                return error;
            });
    }

    renderTable() {
        const loadData = this.props.loaded.load;
        if(loadData) {
        return(
            <Table
                multiSelectable={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Cource Name</TableHeaderColumn>
                        <TableHeaderColumn>City</TableHeaderColumn>
                        <TableHeaderColumn>Period</TableHeaderColumn>
                        <TableHeaderColumn>Price</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {loadData.cources.map( (row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{row.title}</TableRowColumn>
                            <TableRowColumn>{row.city}</TableRowColumn>
                            <TableRowColumn>{row.period}</TableRowColumn>
                            <TableRowColumn>{row.price}</TableRowColumn>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        )

        }
    }
    render() {

        return(
            <div>
                <div className="cources__area">
                    <p className="cources__title">Get information about all cources</p>
                    <RaisedButton
                        label="LOAD"
                        primary={true}
                        disabled={this.state.value_btn}
                        className="cources__btn"
                        onClick={()=>this.loadData()}
                    />
                    <div className="cources__table">
                        { this.renderTable() }
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {loaded} = state;
    return {
        loaded
    }
}

export default connect(mapStateToProps, {loadData})(Cources);