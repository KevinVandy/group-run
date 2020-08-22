import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import DarkTheme from './themes/DarkTheme'
import { Chats } from "./pages/Chats";
import { Groups } from "./pages/Groups";
import { Log } from "./pages/Log";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Navbar } from "./components/templates/Navbar";
import { createBrowserHistory } from 'history';

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={DarkTheme}>
        <BrowserRouter history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/groups" component={Groups} />
            <Route exact path="/log" component={Log} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Login} />
          </Switch>
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
