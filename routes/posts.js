
const express = require('express');

const router = express.Router();


router.get('/posts', (req , res)=>{
    res.end('<h1>Your Posts</h1>')
})


module.exports = router