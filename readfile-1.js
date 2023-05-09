 const fs = require('fs');
/*******************read file start***************** */

//async read file
 fs.readFile('./content.js','utf-8',function(err,data){
     console.log(data)
 })


//sync read file
//buffer example
let readDataBuffer = fs.readFileSync('./content.js')
console.log(readDataBuffer)

let readDataUtfEncoding = fs.readFileSync('./content.js','utf-8')
console.log(readDataUtfEncoding)

console.log("ye third hai")
/*******************read file ends here***************** */