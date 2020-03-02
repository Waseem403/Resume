const express=require('express')
const bodyParser = require("body-parser");

//init express app
const app=express()

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());



//route whicha accept contact details of the send user
app.post("/contactus",(req,res)=>{
  
    const username=req.body.Email.slice(1,6);
    const User_Email=req.body.Email
    const User_Phone=req.body.Phone
    const User_Message=req.body.Message


})


//for the production environment.Tesaeting snsifnego;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server running on port ${port}`));