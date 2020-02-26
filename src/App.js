import React from 'react';
import LoginPage from './LoginPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowseMusic } from './BrowseMusic';


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/browseMusic"  component={BrowseMusic} />
                </Switch>
            </Router>
        );
    }
}

export default App;
