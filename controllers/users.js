import { v4 as uuidv4 } from 'uuid';
let users = [];
export const getUsers =(req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {

    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId }

    users.push(userWithId);

    res.send(`User with the username ${user.firstname} added to the database`);
}

export const getUser  = (req, res) => {
    const { id } = req.params;

    const findUser = users.find((user) => user.id === id);
    res.send(findUser);
}

export const deleteUser =(req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user, id != id);

    res.send(`User with the ID ${id} deleted from database.`);
}

export const patchUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstname) user.firstname = firstname;

    if (lastname) user.lastname = lastname;

    if (age) user.age = age;

    res.send(`User with the ${id} has been updated.`);

}