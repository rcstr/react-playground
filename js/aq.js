/** @jsx React.DOM */
(function () {
    'use strict';

    var imgPath = '/img/authors/',
        data = [{
            name: 'Homer',
            img: '159px-Homer_Musei_Capitolini_MC559.jpg',
            books: ['Odyssey', 'Iliad']
        }, {
            name: 'Nicolás Maquiavelo',
            img: '186px-Portrait_of_Niccolò_Machiavelli_by_Santi_di_Tito.jpg',
            books: ['The Prince', 'Discourses on Livy', 'The Art of War', 'Florentine Histories', 'Life of Castruccio Castracani']
        }, {
            name: 'Charles Darwin',
            img: '187px-Charles_Darwin_01.jpg',
            books: ['The Voyage of the Beagle', 'The Autobiography of Charles Darwin', 'The Expression of the Emotions in Man and Animals', 'The Descent of Man, and Selection in Relation to Sex', 'On the origin of species by means of natural selection']
        }, {
            name: 'J.K Rowling',
            img: 'J._K._Rowling_2010.jpg',
            books: ['HArry Potter']
        }];


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