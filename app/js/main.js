/**
 * Created by Administrator on 2017/2/15 0015.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var QuestionApp = require('./components/QuestionApp.js');
var mainCom = ReactDOM .render(
    <QuestionApp />,
    document.getElementById('app')
);