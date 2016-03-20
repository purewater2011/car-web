/**
 * Created by Eric-mac on 16/3/15.
 */
'use strict';
import { Component } from 'react';
import Slickbar from './Slickbar';

class ArticleList extends Component{

    handleclick(article){
        console.log(article)
    }

    render(){
        return (
            <div className="weui_panel weui_panel_access">
                <div className="weui_panel_hd">
                    {this.props.title}
                </div>
                <div className="weui_panel_hd">
                    <Slickbar slickdatalist={this.props.articles} slidenum={2}/>
                </div>
                <a className="weui_panel_ft" href="javascript:void(0);">查看更多</a>
            </div>
        )
    }
}

export default ArticleList;