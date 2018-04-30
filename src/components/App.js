import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './App.scss'

const App = () => 
  <div>
    <h1 className="welcome">STAR WARS BIO</h1>
    <h1 className="introduction">
      A long, long time ago...
    </h1>
  </div>

ReactDOM.render(
  App(),
  document.getElementById('root')
)