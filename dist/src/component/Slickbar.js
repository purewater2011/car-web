/**
 * Created by Eric-mac on 16/3/19.
 */
import { Component } from 'react';
import Slider from 'react-slick';


class Slickbar extends Component{
    render(){
        var slicksetting = {
            //arrows: this.props.arrows ? this.props.arrows : false,
            //dots: this.props.dots ? this.props.dots : false,
            //lazyLoad: this.props.lazyLoad ? this.props.lazyLoad : true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.slidenum ? this.props.slidenum : 1,
            slidesToScroll: this.props.slidenum ? this.props.slidenum: 1
        }
        return(
            <div className="weui_panel weui_panel_access">
                <Slider {...slicksetting}>
                    {this.props.slickdatalist.map((data, index)=>{
                        return (
                            <span>
                                <img className="weui_media_appmsg_thumb" src={data.imgsrc} />
                                <p>{data.title} {data.desc}</p>
                            </span>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Slickbar;
