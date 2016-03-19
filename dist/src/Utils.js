/**
 * Created by Eric-mac on 16/3/19.
 */


export function awaitFetch(url){
    try{
        return fetch(url).then(
            function(res){
                return res.json()
            })
            .then(
                function(json){
                    return json;
                }
            )
    }catch (e){
        console.log("oops error", e)
    }
}