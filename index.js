const app = require("./app");
// server
const port = process.env.PORT || 4000;



app.use((req,res)=>{
    res.send("<h1>404 Page not found</h1>")
});

app.listen(port,()=>{
    console.log(`server is run http://localhost:${port}`)
});