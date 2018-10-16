(function(){
    "use strict";
    var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    var fruits2 = [ "Apple", "Mango","Grapes"];
    var res=[];
    for(var i in fruits1){
        if(!fruits2.includes(fruits1[i])){
            res.push(fruits1[i]);
        }
    }
    for(var j in fruits2){
        if(!fruits1.includes(fruits2[j])){
            res.push(fruits2[j]);
        }
    }
    console.log(res);
})();