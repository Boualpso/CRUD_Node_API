import express from 'express';

const router = express.Router();

const users = [{
    firstname: "John",
    lastname: "Doe",
    age: 25
},

{
    firstname: "Jane",
    lastname: "Doe",
    age: 24
}];

// all routes here are starting with /users
router.get('/', (req, res) => {
    console.log(users);


    res.send(users);
});


router.post('/', (req, res) => {

    const user = req.body;
    //users.push()
    res.send(`user with the username ${user.firstname} added to the database`);
});


export default router;

