var React = require('./react')

module.exports = React.createClass({
  displayName: 'Hola',
  render: function render () {
    return React.createElement('div', null, 'Hola ', this.props.name)
  }
})
