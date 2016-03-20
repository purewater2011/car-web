/**
 * Created by Eric-mac on 16/3/19.
 */
'use strict';
import { Component } from 'react';

import Grid from '../component/Grid';
import Searchbar from '../component/Searchbar';
//const PriceSelectList = [
//    {'小于5万'},
//    {'5-10万'},
//    {'10-15万'},
//    {'15-20万'},
//    {'25-40万'},
//    {'40-60万'},
//    {'>60万'}
//]

//var BrandSelectedList = [
//    //{'大众'},
//    //{'宝马'},
//    //{'福特'},
//    //{'别克'},
//    //{'雪弗兰'},
//    //{'宝马'},
//    //{'奔驰'},
//]

//const NAVBARS = [
//    {name:'首页', nid:1, img: 'http://weui.github.io/weui/images/icon_nav_button.png'},
//    {name:'二手车', nid:2, img: 'http://weui.github.io/weui/images/icon_nav_msg.png'},
//    {name:'推荐', nid:3, img: 'http://weui.github.io/weui/images/icon_nav_cell.png'},
//    {name:'我的', nid:4, img: 'http://weui.github.io/weui/images/icon_nav_article.png'}
//]

class Car extends Component{

    constructor(){
        super()
        this.state = {
            PriceSelectList: ['小于5万', '5-10万', '10-15万', '40-60万'],
            BrandSelectedList: ['大众', '宝马', '福特', '奔驰', '雪弗兰']
        }
    }

    //componentDidMount(){}

    render(){
        return(
            <div>
                <Searchbar />
                <h2>快速选车</h2>
                <hr />
                <Grid gridList={this.state.PriceSelectList} title="价格"/>
                <Grid gridList={this.state.BrandSelectedList} title="品牌"/>
            </div>
        )
    }
}


export default Car;