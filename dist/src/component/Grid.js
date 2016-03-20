/**
 * Created by Eric-mac on 16/3/19.
 */
import { Component } from 'react';

var Domain='//carweb.com'
class Grid extends Component{
    render(){
        var iconurl = Domain+"/icon_nav_button.png"
        var gridList = this.props.gridList
        var container = []
        gridList.map((grid, index) => {
            //if((index)%3 == 0){
            //    if(index == 0){
            //        container.push(
            //            "<div className=\"weui_grids\">"
            //        )
            //    }else {
            //        container.push("</div><div className=\"weui_grids\">")
            //    }
            //}
            container.push(
                <a href="javascript:;" className="weui_grid js_grid">
                    <div className="weui_grid_icon">
                        <img src={iconurl} alt="" />
                    </div>
                    <p className="weui_grid_label">
                        {grid}
                    </p>
                </a>
            )
        })
        //console.log(container.join("@@@@"))
        //container.push("</div>")
        return(
            <div>
                <h3>
                    {this.props.title}
                </h3>
                <div className="weui_grids">
                    {container}
                </div>
            </div>
        )
    }
}

export default Grid;