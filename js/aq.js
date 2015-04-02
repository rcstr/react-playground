/** @jsx React.DOM */
(function () {
    'use strict';

    var Quiz = React.createClass({
        propTypes: {
            books: React.PropTypes.array.isRequired
        },
        render: function () {
            return <div >
                {this.props.books.map(function (b) {
                    return <Book key={b} title={b}/>
                })}
            </div>
        }
    });

    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div><h4>{this.props.title}</h4></div>
        }
    });

    React.render(<Quiz books={['bang bang', 'rommel']}/>, document.getElementById("app"));
})();