import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import groupRoutes from "./groupRoutes.js";

export default function GroupsContents() {
    return (
        <Switch>
            <Redirect exact from="/groups/" to="/groups/dashboard" />
            {groupRoutes.map(attrs => <Route {...attrs} key={attrs.path} />)}
        </Switch>
    );
}
