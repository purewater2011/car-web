/**
 * Created by Eric-mac on 16/3/15.
 */
'use strict';
import { Component } from 'react';

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
                    {this.props.articles.map((article, index)=>{
                        return(
                            <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                                <div className="weui_media_hd">
                                    <img className="weui_media_appmsg_thumb" src={article.imgsrc} alt="" />
                                </div>
                                <div className="weui_media_bd">
                                    <h4 className="weui_media_title">{article.title}</h4>
                                    <p className="weui_media_desc">{article.desc}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ArticleList;