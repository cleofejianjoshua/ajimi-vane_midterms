import Project from "./models/Project.js";

<<<<<<< HEAD
const createProject = async () => {
    const project = new Project(data);
    return await project.save();
};

export default { createProject };
=======
const createProject = async (data) => {
    const project = new Project(data);
    return await project.save();
}
>>>>>>> f20ffbc559fa5f3a437166b6006d5c6a178985e2
