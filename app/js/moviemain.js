/**
 * Created by Administrator on 2017/2/16 0016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var MovieApp = require('./components/moviecompinents/MovieApp.js');
var mainCom = ReactDOM .render(
    <MovieApp />,
    document.getElementById('app')
);