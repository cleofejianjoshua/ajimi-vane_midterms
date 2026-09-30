import Project from "./models/Project.js";

const createProject = async () => {
    const project = new Project(data);
    return await project.save();
};

export default { createProject };