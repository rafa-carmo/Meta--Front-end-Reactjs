import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Client from './Pages/Client'
import Edit from './Pages/Edit'

function Routes() {
    return (
    <BrowserRouter>
        <Route path="/" exact component={Home}/> 
        <Route path="/register"  exact component={Register}/> 
        <Route path="/client/:id"  component={Client}/> 
        <Route path="/edit/:id"  component={Edit}/> 
    </BrowserRouter>
    )
}

export default Routes;