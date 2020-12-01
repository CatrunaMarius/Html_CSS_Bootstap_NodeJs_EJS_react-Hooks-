
const express = require("express")

const app = express()
var port = 9000

// app.get("/", function(request, response)
app.get("/",  (req, res)=>{
    res.send("hello")
})

app.get("/contact", function(req,res){
    res.send("Contact me")
})

app.get("/about", function(req, res){
    res.send("Numele meu este marius si sunt boss-ul acestui site")
})

app.listen(port, ()=>{
    console.log("Server started on port "+port)
}
)
