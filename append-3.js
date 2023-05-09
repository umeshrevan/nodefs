const fs = require('fs');

/*******************append file start here***************** */

//append file async
fs.appendFile('./exampe.js','this is my append text',function(err){
    console.log(err)
})

//append file sync homework
/*******************append file ends here***************** */