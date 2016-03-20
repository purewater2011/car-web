/**
 * Created by Eric-mac on 16/3/20.
 */


$(function(){
    /*var pageManager = {
        $container: $('.js_container'),
        _config: [],
        init: function(){
            var self = this;
            for(var i in this._config){
                if (!config.isBind) {
                    this._bind(config);
                }
            }
        },
        push: function (config) {
            this._configs.push(config);
            return this;
        },
        _find: function (key, value) {
            var page = null;
            for (var i = 0, len = this._configs.length; i < len; i++) {
                if (this._configs[i][key] === value) {
                    page = this._configs[i];
                    break;
                }
            }
            return page;
        },
        _bind: function (page) {
            var events = page.events || {};
            for (var t in events) {
                for (var type in events[t]) {
                    this.$container.on(type, t, events[t][type]);
                }
            }
            page.isBind = true;
        }
    }


    var search_bar = {
        name: 'searchbar',
        events: {
            '#search_input':{
                focus:function(){
                    //searchBar
                    var $weuiSearchBar = $('#search_bar');
                    $weuiSearchBar.addClass('weui_search_focusing');
                },
                blur:function(){
                    var $weuiSearchBar = $('#search_bar');
                    $weuiSearchBar.removeClass('weui_search_focusing');
                    if($(this).val()){
                        $('#search_text').hide();
                    }else{
                        $('#search_text').show();
                    }
                },
                input:function(){
                    var $searchShow = $("#search_show");
                    if($(this).val()){
                        $searchShow.show();
                    }else{
                        $searchShow.hide();
                    }
                }
            },
            "#search_cancel":{
                touchend:function(){
                    $("#search_show").hide();
                    $('#search_input').val('');
                }
            },
            "#search_clear":{
                touchend:function(){
                    $("#search_show").hide();
                    $('#search_input').val('');
                }
            }
        }
    }
     pageManager.push(search_bar).init();*/

    var searchbar = document.getElementById("search_bar");
    var searchinput = document.getElementById("search_input");
    var searchcancel = document.getElementById("search_cancel");
    var searchclear = document.getElementById("search_clear");

    searchinput.onfocus = function(){
        var $weuiSearchBar = $('#search_bar');
        $weuiSearchBar.addClass('weui_search_focusing');
    };

    searchinput.onblur = function(){
        var $weuiSearchBar = $('#search_bar');
        $weuiSearchBar.removeClass('weui_search_focusing');
        if($(this).val()){
            $('#search_text').hide();
        }else{
            $('#search_text').show();
        }
    };

    searchinput.oninput = function(){
        var $searchShow = $("#search_show");
        if($(this).val()){
            $searchShow.show();
        }else{
            $searchShow.hide();
        }
    };

    searchcancel.onTouchEnd = function(){
        console.log('cancel1');
        $("#search_show").hide();
        $("#search_input").val("");
    };

    searchclear.onTouchEnd = function(){
        console.log('clear1');
        $("#search_show").hide();
        $("#search_input").val("");
    };

    //searchcancel.addEventListener('touchend', function(){
    //    console.log('cancle');
    //    $("#search_show").hide();
    //    $("#search_input").val("");
    //});
    //
    //searchclear.addEventListener('touchend', function(){
    //    console.log('clear');
    //    $("#search_show").hide();
    //    $("#search_input").val("");
    //});
})