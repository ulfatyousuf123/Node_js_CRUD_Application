const { isUtf8 } = require("buffer")
const fs = require("fs")
const http = require("http")

// *******************Crud Application File Handling*******************


               // *************CREAT FILE***********

fs.writeFileSync("Home.txt","Hello I am ulfat and this is my node Assignment")

fs.writeFileSync("Dashboard.txt","This is dashboard")

fs.writeFileSync("My folder/about.txt","this is about page")


fs.writeFile("chromosome.txt","choromosoal disease",(err)=>{
    if(!err){
        console.log( 'created files')
    }
})



             // **************READ FILE**************


const res = fs.readFileSync("Home.txt",'utf-8')
console.log( res)

const Dfile = fs.readFileSync("Dashboard.txt","utf-8")
console.log( Dfile)


fs.readFile("input.txt",'utf-8',(err)=>{
if (!err){
    console.log( 'file has readed')
}
})



              // ************UPDATED FILE****************

fs.appendFileSync("Home.txt","and i am updated this file again")

fs.appendFileSync("Dashboard.txt","updated files")

fs.appendFileSync("Main.txt","   i can chnge this file name")

fs.appendFileSync("about.txt","    i am a developoer")

fs.appendFile("input.txt",'   i am updated this file for without sync',(err)=>{
    if(!err){
        console.log( 'this file is updated')
    }
})

           // ******************DELETED FILE******************

fs.unlinkSync("Dasboard.txt")


fs.unlink("input.txt",(err)=>{
    if(!err){
        console.log( 'DELETED FILE')
    }
 })

              // ****************RENAME FILE NAME*****************


fs.renameSync("Dashboard.txt","Main.txt")


fs.renameSync("about.txt","contact.txt")


fs.rename("contact.txt","signup.txt",(err)=>{
    if(!err){
        console.log( 'i can change file name')
    }
})




         // ***********************CREAT SERVER***************


http.createServer((req,res)=>{
    response.write("hello world")
    response.end()

}).listen(500)

 fs.writeFileSync("input.txt","input file here")
 
  

 
