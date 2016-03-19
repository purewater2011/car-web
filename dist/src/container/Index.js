/**
 * Created by Eric-mac on 16/3/19.
 */

import { Component } from 'react';
import ArticleList from './../component/ArticleList';
import Slickbar from './../component/Slickbar';
import {awaitFetch} from '../Utils';

var Domain = '//carweb.com';
var IndexUrl = Domain+'/data/index.php';

class Index extends Component{

    constructor(){
        super()
        this.state = {
            data: {
                cararticle: [{}],
                shoparticle: [{}],
                slickdata: [{}],
            },
            isfetch: false
        }
    }

    componentDidMount(){
      var indexes = awaitFetch(IndexUrl)
        indexes.then(
            json => this.setState({data: json})
        )
    }

    render(){
        return (
            <div className="weui_tab_bd">
                <Slickbar slickdatalist={this.state.data.slickdata} />
                <ArticleList articles={this.state.data.cararticle} title="推荐二手车" />
                <ArticleList articles={this.state.data.shoparticle} title="推荐店铺" />
            </div>
        )
    }
}

export default Index;