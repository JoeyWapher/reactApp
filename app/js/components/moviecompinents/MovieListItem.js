/**
 * Created by Administrator on 2017/2/16 0016.
 */
var React = require('react');
module.exports = React.createClass({
    // clickUp:function () {
    //     var count = this.props.voteCount+1;
    //     console.log(this.props.questionKey);
    //     this.props.clickTop(this.props.questionKey,count);
    // },
    // clickDown:function () {
    //     var count = this.props.voteCount-1;
    //     this.props.clickTop(this.props.questionKey,count);
    // },
    render:function () {
        // var subjectcomps= this.props.directors.map(function (item,index) {
        //     return(
        //         <MovieListItem
        //             key = {index}
        //             title ={item.title}
        //             images ={item.images.small}
        //             average={item.rating.average}
        //             casts={item.casts}
        //             directors={item.directors}/>
        //     )
        // }.bind(this));
        // console.log(this.props.directors.object);
        var datas = this.props.directors;
        var str= "";
        for ( x in datas){
            str += datas[x].name+'、'
        }
        return(
            <a href="#" className="list-group-item">
                <span className="badge">{this.props.average}</span>
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src={this.props.images} alt="..." />
                    </div>
                    <div className="media-body">
                        <h3 className="media-heading">{this.props.title}</h3>
                        <p>导演：<strong>{str}</strong></p>
                    </div>
                </div>
            </a>
        )
    }
})