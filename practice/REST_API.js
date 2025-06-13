const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/user', (req, res) => {
    console.log(get)
    
    res.json('returning list of users');
    
});

//POST

app.post('/user',(req, res)=>{

    const newUser = req.body;
    res.json({message : 'usesr created', user : newUser})
})

app.put('user/id', (req,res) => {
const userId = req.param.id;
    const updatedUser = req.body
    res.json('{message : `USER WIHT ID ${userId} updated`, updatedUser}')

});