/**
 * Created by Administrator on 2017/2/16 0016.
 */
var React = require('react');
var NavSidebar =require('./NavSidebar');
// var QuestionForm =require('./QuestionForm');
// var QuestionList =require('./QuestionList');
// var GoMovieButton =require('./GoMovieButton');
// var _ = require('lodash');
module.exports = React.createClass({
    getInitialState: function () {
        var questions = [
            {
                key: 1,
                title: 'Uncaught TypeError: Cannot read property \'xxx\' of undefined [closed]',
                description: 'I\'m using jQuery 1.8.3 which is loaded from google api.',
                voteCount: 1,
            },
        ];
        return {
            questions: questions,
            isOpen: false
        }
    },
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">JoeyMovie</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <input type="text" className="form-control" placeholder="Search..."/>
                            </form>
                        </div>
                    </div>
                </nav>
                <NavSidebar />
            </div>
        );
        }
        })