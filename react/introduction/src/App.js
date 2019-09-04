import React from 'react'

import './App.css'
import image from './assets/gandalf.jpg'

function App() {
    return [
        <h1>First react component</h1>,
        <img src={image} />
    ]
}

export default App