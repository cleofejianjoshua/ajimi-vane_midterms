import Project from "./models/Project.js";

const createProject = async (data) => {
    const project = new Project(data);
    return await project.save();
}