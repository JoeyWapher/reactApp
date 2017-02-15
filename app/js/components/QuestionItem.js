/**
 * Created by Administrator on 2017/2/15 0015.
 */
var React = require('react');
module.exports = React.createClass({
    clickUp:function () {
        var count = this.props.voteCount+1;
        console.log(this.props.questionKey);
        this.props.clickTop(this.props.questionKey,count);
    },
    clickDown:function () {
        var count = this.props.voteCount-1;
        this.props.clickTop(this.props.questionKey,count);
    },
    render:function () {
        return(
            <div className="media">
                <div className="media-left">
                    <button className="btn btn-default" onClick={this.clickUp}>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.voteCount}</span>
                    </button>
                    <button className="btn btn-default" onClick={this.clickDown}>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
})