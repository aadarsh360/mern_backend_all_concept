import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // find user ki with email id ki wo register to nhi
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "user already register"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ fullName, email, password: hashedPassword });
        return res.status(201).json({
            success: true,
            message: "Account created successfully."
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // check user is availble or not by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        // check password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        // create token
        const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });

        return res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000,
            }).json({
                success: true,
                message: `Welcome back ${user.fullName}`
            })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// logout
export const logout = async (_, res)=>{
    try{
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            success:true,
            message: "User logout successfully."
        })
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}