/**
 * Created by Eric-mac on 16/3/20.
 */
import { Component } from 'react';

class Searchbar extends Component{

    constructor(){
        super()
        this.state = {
            placeholdervalue: '默认提示搜索',
            inputvalue: ''
        }
    }

    handleSubmit(){
        console.log('submit')
    }
    handleInput(e){
        this.setState({inputvalue: e.target.value})
    }
    handleInputOnblur(e){
        this.setState({inputvalue: e.target.value})
    }
    handleInputOnchange(e){
        this.setState({inputvalue: e.target.value})
    }
    handleCancleTouchEnd(){
        this.setState({inputvalue: ''})
    }
    handleClearTouchEnd(){
        this.setState({inputvalue: ''})
    }

    render(){
        return(
            <div className="bd">
                <div className="weui_search_bar" id="search_bar">
                    <form className="weui_search_outer" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="weui_search_inner">
                            <i className="weui_icon_search"></i>
                            <input value={this.state.inputvalue} type="text" className="weui_search_input" id="search_input" placeholder={this.state.placeholdervalue} required onInput={this.handleInput.bind(this)} onBlur={this.handleInputOnblur.bind(this)} onChange={this.handleInputOnchange.bind(this)}/>
                            <a href="javascript:;" className="weui_icon_clear" id="search_clear" onTouchEnd={this.handleClearTouchEnd.bind(this)}></a>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
export default Searchbar;

/*
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
</div>*/
