export const validateUser = (req, res, next) => {
    const { username, password} = req.body;

    if (!username || !username.trim()){
        return res.status(400).json({ message: "Username is required."});
    }
    if (!password){
        return res.status(400).json({ message: "Password is required."});
    }
    if (password.length < 6){
        return res.status(400).json({ message: "Password must be atleast 6 characters"})
    }
    next();
}
