/**
 * Created by Eric-mac on 16/3/20.
 */
import { Component } from 'react';

class Searchbar extends Component{

    render(){
        return(
            <div className="">
                <div className="bd">
                    <div className="weui_search_bar" id="search_bar">
                        <form className="weui_search_outer">
                            <div className="weui_search_inner">
                                <i className="weui_icon_search"></i>
                                <input type="text" className="weui_search_input" id="search_input" placeholder="搜索" required />
                                <a href="javascript:;" className="weui_icon_clear" id="search_clear"></a>
                            </div>
                        </form>
                        <a href="javascript:;" className="weui_search_cancel" id="search_cancel">取消</a>
                    </div>
                    <div className="weui_cells weui_cells_access search_show" id="search_show">
                        <div className="weui_cell">
                            <div className="weui_cell_bd weui_cell_primary">
                                <p>实时搜索文本</p>
                            </div>
                        </div>
                        <div className="weui_cell">
                            <div className="weui_cell_bd weui_cell_primary">
                                <p>实时搜索文本</p>
                            </div>
                        </div>
                        <div className="weui_cell">
                            <div className="weui_cell_bd weui_cell_primary">
                                <p>实时搜索文本</p>
                            </div>
                        </div>
                        <div className="weui_cell">
                            <div className="weui_cell_bd weui_cell_primary">
                                <p>实时搜索文本</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Searchbar;