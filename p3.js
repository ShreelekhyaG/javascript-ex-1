
(function(){
    "use strict";
var prompt = require('prompt');
  prompt.start();
  prompt.get(['number'], function (err, res) {
    console.log('Command-line input received:');
    console.log('  number: ' + res.number);
   var str=res.number;
    var result=[str[0]];
    for(var i=1;i<str.length;i++){
        if(str[i-1]%2===0 && str[i]%2===0){
            result.push('-',str[i]);
        }
        else{
            result.push(str[i]);
        }
    }
    console.log(result.join(''));
  });

  })(); 