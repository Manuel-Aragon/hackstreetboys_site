import './App.css';

import React, { Component } from 'react'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase-config'

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

    }

    render() {
        return (
        <BrowserRouter>
            <Routes>
                {/* home */}
                <Route exact path='/' component={() => <Home user={this.state.user} />} />
            </Routes>
        </BrowserRouter>
        )
    }
}

export default App