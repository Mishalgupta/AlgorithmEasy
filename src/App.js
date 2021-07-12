import React, { Component } from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import About from './homeComponents/about';

const App = () => {
    return (
        <>
            <Switch>
                <Route path='/prime' component={Seive} />
                <Route path='/sort' component={Sort} />
                <Route path='/binarysearch' component={BinarySearch} />
                <Route path='/recursivesort' component={RecursiveSort} />
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
        </>
    );
}

export default App;
