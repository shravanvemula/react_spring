import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/pages/login/login";
import ResetPassword from "./components/pages/reset-password/reset-password";
import ForgotPassword from "./components/pages/forgot-password/forgot-password";
import TemporaryPage from "./components/pages/temporary/temporary";
import RecoveredPassword from "./components/pages/recovered-password/recovered-password";
import SignUp from "./components/pages/sign-up/primary-sign-up"
import ProfileMenu from './components/molecules/_profile-menu/_profile-menu';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/temporary-page" component={TemporaryPage} />
            <Route path="/home" component={ProfileMenu} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/recoverd-password" component={RecoveredPassword} />
        </Switch>
    </BrowserRouter>

);
