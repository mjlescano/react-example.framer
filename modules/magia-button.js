var React = require('./react')
var MuiThemeProvider = require('../node_modules/material-ui/styles/MuiThemeProvider').default
var RaisedButton = require('../node_modules/material-ui/RaisedButton').default

console.log(RaisedButton)

var Button = React.createElement(RaisedButton, {label: '¡Magia!'})

module.exports = new MuiThemeProvider(Button)
