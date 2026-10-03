import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/user.model.js";

// User Registration

const registerUser = async (data) => {
    const existing = await User.findOne({ username: data.username});
    if (existing){
        throw new Error("Username is taken.");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password: hashedPassword });
    return await user.save();
};


module.exports{
    registerUser
};
