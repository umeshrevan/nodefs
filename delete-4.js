const fs = require('fs')
//delete file
try {
    

let fileDeleted = fs.unlinkSync('./example-file-deleted.js')
console.log(fileDeleted)

//delete file async
fs.unlink('./new-example.js',function(err){
    console.log(err)
})
} catch (error) {
    console.log(error)
}
