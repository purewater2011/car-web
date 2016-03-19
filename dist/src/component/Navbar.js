/**
 * Created by Eric-mac on 16/3/14.
 */
'use strict';
import React, { Component } from 'react';

const NAVBARS = [
    {name:'首页', nid:1, img: 'http://weui.github.io/weui/images/icon_nav_button.png'},
    {name:'二手车', nid:2, img: 'http://weui.github.io/weui/images/icon_nav_msg.png'},
    {name:'推荐', nid:3, img: 'http://weui.github.io/weui/images/icon_nav_cell.png'},
    {name:'我的', nid:4, img: 'http://weui.github.io/weui/images/icon_nav_article.png'}
]

class Navbar extends Component{

    handleClick(nid){
        this.props.handleNavbarClick(nid);
        //this.props.defaultNavbar.nidselected = nid;
        //this.setState({nidselected: nid})
        console.log(nid);
    }

    render(){
        return (
            <div className="weui_tabbar">
                { NAVBARS.map((navbar, index) => {
                    let nstyle = navbar.nid == this.props.nidselected ? 'weui_tabbar_item weui_bar_item_on' : 'weui_tabbar_item';
                    return (
                        <a href="javascript:;" className={nstyle} onClick={this.handleClick.bind(this, navbar.nid)}>
                        <div className="weui_tabbar_icon">
                        <img src={navbar.img} alt="" />
                        </div>
                        <p className="weui_tabbar_label">{navbar.name}</p>
                        </a>
                    )
                })}
            </div>
        )
    }
}

export default Navbar;