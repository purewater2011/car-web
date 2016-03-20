/**
 * Created by Eric-mac on 16/3/14.
 */
'use strict';
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Navbar from './../component/Navbar';
import {awaitFetch} from '../Utils';
import Index from './Index';
import Car from './Car';
import List from './List';

var Domain = '//carweb.com';
var ClickArticleUrl = Domain+'/data/clickarticle.php';

class App extends Component{

    constructor(){
        super()
        this.state = {
            nidselected: 2,
            isfetch: false
        }
    }

    handleNavbarClick (nid){
        this.setState({nidselected: nid})
    }
    render() {
        switch (this.state.nidselected) {
            case 1:
                return (
                    <div className="weui_tab">
                        <Index />
                        <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />
                    </div>
                )
            case 2:
                return (
                    <div className="weui_tab">
                        <div className="weui_tab_bd">
                            <Car />
                        </div>
                        <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />
                    </div>
                )
            case 3:
                return (
                    <div className="weui_tab">
                        <div className="weui_tab_bd">
                            <List />
                        </div>
                        <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />
                    </div>
                )
            case 4:
                return (
                    <div className="weui_tab">
                        <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />
                    </div>
                )
            case 5:
                return (
                    <div className="weui_tab">
                        <div className="weui_tab_bd">
                            <List />
                        </div>
                        <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />
                    </div>
                )
            default:
                return (
                    <div className="weui_tab">
                        <Index />
                        <Navbar nidselected={this.state.nidselected} handleNavbarClick={this.handleNavbarClick.bind(this)} />
                    </div>
                )
        }
    }
}
export default App;
React.render(<App />, document.getElementById("app"))