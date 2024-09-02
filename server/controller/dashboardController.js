const createProject = (req , res) => {
    res.send("Create a new project");
    console.log(req.method);
}

const getProject = (req, res) => {
    res.send("Display a particular project");
    console.log(req.method);
}

const getAllProject = (req, res) => {
    res.send("Display all projects");
    console.log(req.method);
}

const deleteProject = (req, res) => {
    res.send("Delete a particular project");
    console.log(req.method);
}

const updateProject = (req, res) => {
    res.send("Update details of a particular project");
    console.log(req.method);
}

module.exports = {
    createProject,
    getProject,
    getAllProject,
    deleteProject,
    updateProject,
}