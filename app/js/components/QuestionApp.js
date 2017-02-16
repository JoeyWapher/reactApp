/**
 * Created by Administrator on 2017/2/15 0015.
 */
var React = require('react');
var ShowAddButton =require('./ShowAddButton');
var QuestionForm =require('./QuestionForm');
var QuestionList =require('./QuestionList');
var GoMovieButton =require('./GoMovieButton');
var _ = require('lodash');
module.exports = React.createClass({
    getInitialState:function () {
      var questions = [
          {
              key: 1,
              title:'Uncaught TypeError: Cannot read property \'xxx\' of undefined [closed]',
              description:'I\'m using jQuery 1.8.3 which is loaded from google api.',
              voteCount:1,
          },
          {
              key: 2,
              title:'对ReactJS的认识及ReactJS的优点',
              description:' 首先，对于React，有一些认识误区，这里先总结一下：',
              voteCount:2
          }
      ];
        return {
            questions:questions,
            isOpen:false
        }
    },
    changeIsOpenState:function () {
        this.setState({
            isOpen : !this.state.isOpen
        })

    },
    newQuestionMethod:function (newQuestion) {
        newQuestion.key = this.state.questions.length+1;
        var newQuestions = this.state.questions.concat(newQuestion);
        newQuestions = this.sortArray(newQuestions);
        this.setState({
            questions:newQuestions
        })
    },
    sortArray:function (newQuestions) {
        newQuestions.sort(function (a,b) {
            return b.voteCount - a.voteCount;
        })
        return newQuestions;
    },
    clickTop:function (key,newCount) {
        var newQuestions = _.uniq(this.state.questions);
        var index = _.findIndex(newQuestions,function (qst) {
            return qst.key == key;
        })

        newQuestions[index].voteCount = newCount;
        newQuestions = this.sortArray(newQuestions);
        this.setState({
            questions:newQuestions
        });
    },
    render: function () {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React问答</h1>
                        <ShowAddButton changeIsOpenState={this.changeIsOpenState}/>
                        <GoMovieButton />
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm newQuestionMethod={this.newQuestionMethod} changeIsOpenState={this.changeIsOpenState} isOpen={this.state.isOpen}/>
                    <QuestionList questions={this.state.questions} clickTop={this.clickTop}/>
                </div>
            </div>
        );
    }
})