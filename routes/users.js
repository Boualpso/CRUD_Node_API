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

    res.send(users);

});
export default router;

