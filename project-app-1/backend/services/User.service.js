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


// User Login
const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("Invalid username or password.");
    }

    const match = await bcrypt.compare (password, user.password);
    if (!match){
        throw new Error("Invalid username or password.");
    }

    const token = jwt.sign ({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1d"});
    return { token };
}

module.exports{
    registerUser,
    loginUser
};
