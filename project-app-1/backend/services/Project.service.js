import Project from "./models/Project.js";

const createProject = async () => {
    const project = new Project(data);
    return await project.save();
};

const getAllProjectsWithTasks = async (data) => {
    const project = await Project.findById(data).populate('tasks').lean();
    return { project };
};

export default { createProject };