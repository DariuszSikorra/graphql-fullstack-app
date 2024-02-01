import express from "express";
import userController from "../controllers/users.controller";
import usersService from "../services/users.service";

const router = express.Router();
console.log(router)

router.get("/", userController.getUsers);
router.post("/", userController.addUser);

export default router;
