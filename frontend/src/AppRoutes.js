import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import RepoPage from './page/RepoPage';

const AppRoutes = (
    <div>
        <Route path="/" component={HomePage}/>
        <Route path="/repos" component={RepoPage}/>
        <Route path="/about" component={AboutPage}/>
    </div>
);

export default AppRoutes;