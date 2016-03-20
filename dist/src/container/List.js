/**
 * Created by Eric-mac on 16/3/20.
 */
import { Component } from 'react';

import Searchbar from '../component/Searchbar';
import VerticalArticleList from '../component/VerticalArticleList';
import {awaitFetch, DOMAIN} from '../Utils';


class List extends Component{
    constructor(){
        super()
        this.state = {
            articles: [{}]
        }
    }

    componentDidMount(){
        awaitFetch(DOMAIN+"/data/shoparticle.php").then(
            json => this.setState({articles: json})
        )
    }

    render(){
        return(
            <div>
                <Searchbar />
                <VerticalArticleList title="测试列表" articles={this.state.articles} />
            </div>
        )
    }
}

export default List;

