
const express = require('express');

const router = express.Router();


router.get('/posts', (req , res)=>{
    res.render('users',{
        title : 'User Profile',
        userName  : 'Vikas Rajput'
    })
})


module.exports = router