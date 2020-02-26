import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { BrowseMusic } from './BrowseMusic';

class AppRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route path='/browseMusic' render={ props => <BrowseMusic {...props} />} />
            </BrowserRouter>
        )
    }
}