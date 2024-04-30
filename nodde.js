 const fs = require('fs');
 
 fs.appendFile("hey.txt", " and this is my second module", function(){
    if(err) console.error(err)
    else console.log("done")
 })