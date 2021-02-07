import React from 'react';
import { connect } from 'react-redux';
import {Route} from "react-router-dom";

const AuthRoute = props => {
    return (
        <Route path={props.path}>{props.children}</Route>
    );
};

export default connect(mapStateProps)(AuthRoute);

function mapStateProps(state) {
    console.log(state);
    return state;
}