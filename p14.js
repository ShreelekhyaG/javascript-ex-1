(function(){
    "use strict";
    var myObj =
    [{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
    {'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
    {'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
    {'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
    {'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
    {'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
    for(var v of myObj){
        if(v.occupation==="Programmer"){
            console.log(v);
        }
    }
    console.log(myObj.sort((a,b)=>b.age-a.age));
    var anotherObj=[];
    for(var v of myObj){
        anotherObj[v.occupation]=v;
    }
    console.log(anotherObj);
})();