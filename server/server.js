const path = require('path');
const publicPath = path.join(__dirname,'../public');
const PORT = process.env.PORT || 5000;
const express = require("express");

const app = express();

// app.get('/',(req,res)=>{
// res.send("<h1>Hello ALien</h1>");
// });

app.use(express.static(publicPath));
app.listen(5000,()=>{
   console.log(`Server is up and running at port ${PORT}`);
});