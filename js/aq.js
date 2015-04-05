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
            }, [])).slice(0, 4),
            answer = books[_.random(books.length - 1)];

        return {
            books: books,
            author: _.find(this, function (author) {
                return author.books.some(function (title) {
                    return title === answer;
                });
            }),
            checkAnswer: function (title) {
                return this.author.books.some(function (t) {
                    return t === title;
                });
            }
        };
    };

    var Quiz = React.createClass({
        propTypes: {
            data: React.PropTypes.array.isRequired
        },
        getInitialState: function () {
            return _.extend({
                    bgClass: 'neutral',
                    showContinue: false
                },
                this.props.data.selectGame());
        },
        handleBookSelected: function (title) {
            var isCorrect = this.state.checkAnswer(title);

            this.setState({
                bgClass: isCorrect ? 'pass' : 'fail',
                showContinue: isCorrect
            });
        },
        handleContinue: function () {
            this.setState(this.getInitialState);
        },
        render: function () {
            return (<div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={imgPath + this.state.author.img} alt="" className="author-img img-responsive"/>
                    </div>
                    <div className="col-md-7">
                        {this.state.books.map(function (b) {
                            return <Book onBookSelected={this.handleBookSelected} title={b}/>
                        }, this)}
                    </div>
                    <div className={'col-md-1 answer-state ' + this.state.bgClass}></div>
                </div>
                {this.state.showContinue ? (<div className="row">
                    <div className="col-md-12 text-right">
                        <input type="button" className="btn btn-success" value="Continue" onClick={this.handleContinue}/>
                    </div>
                </div>) : (<span />) }
            </div>
            );
        }
    });

    var Book = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired
        },
        handleClick: function () {
            this.props.onBookSelected(this.props.title);
        },
        render: function () {
            return <div className="answer" onClick={this.handleClick}><h4>{this.props.title}</h4></div>
        }
    });

    React.render(<Quiz data={data}/>, document.getElementById('app'));
})();