/**
 * Created by Administrator on 2017/2/15 0015.
 */
var React = require('react');
var QuestionItem = require('./QuestionItem');
module.exports = React.createClass({
    render:function () {
        var questions = this.props.questions;
        if(!Array.isArray(questions)){
            throw new Error('this.props.questions必须是数组');
        }
        var questioncomps= questions.map(function (item) {
            return(
                <QuestionItem key = {item.key}
                              questionKey = {item.key}
                              title ={item.title}
                              description ={item.description}
                              voteCount={item.voteCount}
                              clickTop={this.props.clickTop}/>
                )
        }.bind(this));
        return(
            <div id="questions" className="">
                {questioncomps}
            </div>
        )
    }
})