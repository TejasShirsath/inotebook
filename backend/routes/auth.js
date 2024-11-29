const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router()


// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atleast 6 characters').isLength({min:6}),
], async (req, res)=>{

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    try{
        // Check whether the user with this email exists already
        let user = await User.findOne({email: req.body.email});
        
        // if yes, return 400 error
        if (user) { 
            return res.status(400).json({error: "User already exist with this email"})
        }

        // if no, create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json(user);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }
});

module.exports = router