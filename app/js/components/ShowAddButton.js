/**
 * Created by Administrator on 2017/2/15 0015.
 */
var React = require('react');
var ShowAddButton = React.createClass({
    render:function () {
        return(
            <button id="add-question-btn" className="btn btn-success"onClick={this.props.changeIsOpenState}>添加问题</button>
        )
    }
});
module.exports = ShowAddButton;
