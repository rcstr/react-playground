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


    data.selectGame = function selectGame() {
        var books = _.shuffle(this.reduce(function (p, c, i) {
            return p.concat(c.books);
        }, [])).slice(0, 4);

        var answer = books[_.random(books.length - 1)];

        return {
            books: books,
            author: _.find(this, function(author) {
                return author.books.some(function(title) {
                    return title === answer;
                });
            })
        };
    };

    var Quiz = React.createClass({
        propTypes: {
            data: React.PropTypes.array.isRequired
        },
        getInitialState: function () {
            return this.props.data.selectGame();
        },
        render: function () {
            return (<div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={imgPath + this.state.author.img} alt="" className="author-img img-responsive"/>
                    </div>
                    <div className="col-md-7">
                        {this.state.books.map(function (b) {
                            return <Book title={b}/>
                        }, this)}
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>)
        }
    });

    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div className="answer"><h4>{this.props.title}</h4></div>
        }
    });

    React.render(<Quiz data={data}/>, document.getElementById("app"));
})();