const express = require('express');
const router = express.Router();
const User = require('../models/user');
mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected')},
      err => {console.log('Can not connect to the database' + err)},

  );   
  

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })

})

router.post('/login', (req, res) => {
    let userData = req.body


    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else 
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                res.status(200).send(user)
            }
        }
    })
})




module.exports = router