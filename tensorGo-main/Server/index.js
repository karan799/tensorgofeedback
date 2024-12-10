


const express = require("express")
const session = require("express-session")
const passport = require('passport')
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')
const feedbackRoutes = require('./routes/feedback')

dotenv.config()
const port = process.env.PORT
const URL = process.env.URL


const app = express();

require('./googleAuth')
app.use(cors({
    origin:"*",
    Credential:true
  }))
app.use(express.json())


// let user 

app.use(session({
  secret: "Mysecret!!",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())


app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/pro',
        failureRedirect: '/failed'
}));

app.get("/pro",(req,res)=>{
 let user = req.user
//  console.log(user ,"profile route")

res.redirect('http://localhost:3000/feedback')
})

mongoose.connect("mongodb+srv://kb6789123:karan7206511@cluster0.6qjfwdy.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Mongodb sucessfully connected"))
    .catch((err) => console.log(err));

    app.use('/api', feedbackRoutes);

// app.use(userRouter)
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})