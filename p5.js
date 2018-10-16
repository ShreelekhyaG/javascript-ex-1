(function(){
    "use strict";
    var fruits = ["Banana", "Orange", "Apple", "Mango","Banana","Orange"];
    var res=[];
    for(var i in fruits){
        if(!res.includes(fruits[i])){
            res.push(fruits[i]);
        }
    }
    console.log(res);
})();