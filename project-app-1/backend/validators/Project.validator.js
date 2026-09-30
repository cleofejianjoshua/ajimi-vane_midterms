export const validateProject = (req, res, next) => {
    const { name } = req.body;

    if  (!name) {
        return res.status(400).json({ message: "project name is required" });
    }
    next();
};