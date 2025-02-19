import express from "express";
import { register } from "../controllers/user.js";

const router = express();

router.route('/').post(register);

export default router;