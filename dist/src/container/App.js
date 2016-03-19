/**
 * Created by Eric-mac on 16/3/14.
 */
'use strict';
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Navbar from './../component/Navbar';
import ArticleList from './../component/ArticleList';
import Slickbar from './../component/Slickbar';

var Domain = '//carweb.com';
var IndexUrl = Domain+'/data/index.php';
var ShopArticleUrl = Domain+'/data/shoparticle.php';
var ClickArticleUrl = Domain+'/data/clickarticle.php';

class App extends Component{

    constructor(){
        super()
        this.state = {
            nidselected: 1,
            data: {
                cararticle: [{}],
                shoparticle: [{}],
                slickdata: [{}],
            },
            nextpage: ShopArticleUrl,
            isfetch: false
        }
        //this.awaitFetch(ArticleUrl);
    }

    componentDidMount(){
        var indexes = this.awaitFetch(IndexUrl)
        indexes.then(
            json => this.setState({data: json})
        )
        //console.log(this.state.data.carticle)
        //shoparticles.then(
        //    json => this.setState({shoparticles: json})
        //)
        //if(cararticles & shoparticles)
        //this.setState({
        //    cararticles: cararticles,
        //    shoparticles: shoparticles
        //})
    }

    awaitFetch(url){
    //var headers = new Headers({
    //    'Content-Type': 'application/json',
    //    'Cache-Control': 'max-age=3600'
    //})
    //headers.append('Access-Control-Allow-Origin', '*')
    //var request = new Request(url, { headers: headers, mode: "no-cors", credentials: 'include', method: "GET" })
    try{
        return fetch(url).then(
                function(res){
                   return res.json()
                })
            .then(
                function(json){
                    return json;
                }
            )
            //.then(json => this.setState({cararticles: json, nextpage: url}))
        //let data = response.json();
        //console.log(data);
        }catch (e){
            console.log("oops error", e)
        }
    }

    handleNavbarClick (nid){
        var click = this.awaitFetch(ClickArticleUrl)
        click.then(json => this.setState({
            nidselected: nid,
            shoparticles: json
        }))
    }
    render() {
        return (
            <div className="weui_tab">
                <div className="weui_tab_bd">
                    <Slickbar slickdatalist={this.state.data.slickdata} />
                    <ArticleList articles={this.state.data.cararticle} title="推荐二手车" />
                    <ArticleList articles={this.state.data.shoparticle} title="推荐店铺" />
                </div>
                <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />

            </div>
        )
    }
}

React.render(<App />, document.getElementById("app"))