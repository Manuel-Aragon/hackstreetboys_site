import React, { Component } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Bio } from './components/Bio'
import { Events } from './components/Events'
import { Merch } from './components/Merch'

export class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bio" element={<Bio />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Merch" element={<Merch />} />
          </Routes>
        </BrowserRouter>
      )
    }
}
export default App