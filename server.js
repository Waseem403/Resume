const express=require('express')
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");



//init express app
const app=express()

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());



//route whicha accept contact details of the send user
app.post("/contactus",(req,res)=>{
  
    const arr=req.body.Email.split("@");
    const User_Name=arr[0]
    const User_Email=req.body.Email
    const User_Phone=req.body.Mobile
    const User_Message=req.body.Message
      
 

   
    //init email
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'codefunzz@gmail.com',
        pass: '9966599303'
      }
    });
    
    var mailOptions = {
      from: User_Email,
      to: 'b.waseem.403@gmail.com',
      subject: `Contacted by recruiter`,
      text: `Hi Sir
          
          My name is ${User_Name} and i have the following query (or) requirement.
          
           ${User_Message}
       
           Thanks & Regards
            ${User_Name}
            ${User_Phone}
         `
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.send(error)
      } else {
        res.send('Email sent: ' + info.response);
      }
    });
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