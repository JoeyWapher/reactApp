/**
 * Created by Administrator on 2017/2/15 0015.
 */
var React = require('react');

module.exports = React.createClass({
    handleForm:function (e) {
        e.preventDefault();
        var newQuestion = {
            voteCount:0,
            description:this.refs.description.value,
            title:this.refs.title.value,
        }
        console.log(newQuestion);
        this.refs.addQuestion.reset();
        this.props.newQuestionMethod(newQuestion);
    },
    render:function () {
        var styleOjb= {
            display: this.props.isOpen? 'block':'none',
        }
        return(
            <form name="addQuestion" className="clearfix" style={styleOjb} onSubmit={this.handleForm} ref="addQuestion">
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
                </div>
                <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <button className="btn btn-default pull-right" onClick={this.props.changeIsOpenState}>取消</button>
            </form>
        )
    }
})