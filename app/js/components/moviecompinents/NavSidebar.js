/**
 * Created by Administrator on 2017/2/16 0016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
// var $ = require('jquery');
var MovieListItem = require('./MovieListItem');
module.exports = React.createClass({
    getInitialState:function () {
        return {
            title:"正在热映",
            subjects:[]
        }
    },
    componentDidMount: function() {
		var url = "v2/movie/in_theaters";
        this.resultData(this,url);
    },
    componentWillUnmount: function() {
        // this.serverRequest.abort();
    },
    resultData:function (e,url) {
        var subjects =[];
        $.ajax({
            url:"https://api.douban.com/"+url,
            dataType:'jsonp',
            data:'',
            jsonp:'callback',
            success:function(result) {

                    console.log(result);
                    e.setState({
                        subjects:result.subjects,
                    })
                // console.log(e);
            },
            timeout:3000
        });
    },
    clickMovieHot:function () {
        this.setState({
            title : "正在热映"
        })
        var url = "v2/movie/in_theaters";
        this.resultData(this,url);
    },
    clickMovieWill:function () {
        this.setState({
            title : "即将上映"
    })
        var url = "/v2/movie/coming_soon";
        this.resultData(this,url);
    },
    clickMovieTop:function () {
        this.setState({
            title : "Top"
    })
        var url = "/v2/movie/top250";
        this.resultData(this,url);
    },
    render:function () {
        var subjects = this.state.subjects;
        if(!Array.isArray(subjects)){
            throw new Error('this.state.subjects必须是数组');
        }
        
        var subjectcomps= subjects.map(function (item,index) {
            return(
                <MovieListItem
                                key = {index}
                              title ={item.title}
                               images ={item.images.small}
                               average={item.rating.average}
                               casts={item.casts}
                               directors={item.directors}
                               genres={item.genres}/>
            )
        }.bind(this));
        console.log(this.state) ;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <ul className="nav nav-sidebar">
                            <li className="active"><a href="#movieHot"onClick={this.clickMovieHot}>正在热映</a></li>
                            <li><a href="#movieWill" onClick={this.clickMovieWill}>即将上映</a></li>
                            <li><a href="#movieTop" onClick={this.clickMovieTop}>TOP</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <h1 className="page-header">{this.state.title}</h1>
                        <div className="list-group">
                            {subjectcomps}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})