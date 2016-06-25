React = require 'react'
ReactDOM = require 'react-dom'

Screen.backgroundColor = '#333'

app = new Layer
  size: Screen.size
  x: 0
  y: 0

app.html = '<div id="app"></div>'

container = app.querySelector '#app'

Hola = require 'hola'
ReactDOM.render(React.createElement(Hola, name: 'React'), container)
