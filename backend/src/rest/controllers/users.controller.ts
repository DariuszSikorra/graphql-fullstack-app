import { Request, Response } from 'express';
import usersService from "../services/users.service";

const userController =  {
  getUsers: (req: Request, res: Response) => {
    const users = usersService.getUsers();
    console.log("controller get users", {req, res})
    res.send(users);
  },

  addUser: (req: Request, res: Response) => {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    usersService.addUser({ username });
    res.status(201).json({ message: 'User added successfully' });
  },
};

export default userController;