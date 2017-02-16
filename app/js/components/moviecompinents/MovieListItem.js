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
        var directorsDatas = this.props.directors;
        var castsDatas = this.props.casts;
        var directorsArr= [];
        var castsArr= [];
        for ( x in directorsDatas){
            directorsArr.push(directorsDatas[x].name);
        }
        for ( x in castsDatas){
            castsArr.push(castsDatas[x].name);
        }

        return(
            <a href="#" className="list-group-item">
                <span id="movieListbadge" className="badge">{this.props.average}</span>
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src={this.props.images} alt="..." />
                    </div>
                    <div className="media-body">
                        <h3 className="media-heading">{this.props.title}</h3>
                        <p>导演：<span>{directorsArr.join('、')}</span></p>
                        <p>演员：<span>{castsArr.join('、')}</span></p>
                        <p>演员：<span>{this.props.genres.join('、')}</span></p>
                    </div>
                </div>
            </a>
        )
    }
})