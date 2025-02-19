import express from "express";
import { login, register } from "../controllers/user.js";

const router = express();

router.route('/register').post(register);
router.route('/login').post(login)

export default router;