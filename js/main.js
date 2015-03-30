/** @jsx React.DOM */
var hello = React.createClass({
	render: function() {
		return <div>hello {this.props.name}</div>
	}
});

React.renderComponent(<hello name="world">, body);