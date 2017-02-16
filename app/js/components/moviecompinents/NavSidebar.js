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

        this.resultData(this);
    },
    componentWillUnmount: function() {
        // this.serverRequest.abort();
    },
    resultData:function (e) {
        var subjects =[];
        $.ajax({
            url:"https://api.douban.com/v2/movie/in_theaters",
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
        this.resultData(this);
    },
    clickMovieWill:function () {
        this.setState({
            title : "即将上映"
    })
        this.resultData(this);
    },
    clickMovieTop:function () {
        this.setState({
            title : "Top"
    })
        this.resultData(this);
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
                               directors={item.directors}/>
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