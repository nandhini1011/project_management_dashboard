const mongoose = require("mongoose");

const projects = require("../models/dashboardModel")

const createProject = async (req , res) => {
    try{
        const {projectName, description, assignedTo, role} = req.body ;
        const newProject = new projects({ "projectName" : projectName,
                                          "description" : description,
                                          "assignedTo"  : assignedTo,
                                          "role"        : role      });
        newProject.projectName = req.body.projectName ;
        newProject.assignedTo = req.body.assignedTo ;
        newProject.role = req.body.role ;
        response = await newProject.save();
        res.status(200).json(response);
        console.log("data inserted");
    }catch(error) {
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const createTask = async (req, res) => {
    try{
        const {id} = req.params;
        const project = await projects.findById(id);
        project.tasks.push(req.body);
        req.status(200).json(projects);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const getProject = async (req, res) => {
    try{
        const {id} = req.params; 
        const project = await projects.findById(id);
        res.status(200).json(project);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
    
}

const getAllProject = async (req, res) => {
    try{
    const projectLists = await projects.find({});
    res.status(200).json(projectLists);
    }catch(error){
        console.log(error.message);
        res.status(400).json({ error : error.message});
    }
}

const deleteProject = async (req, res) => {
    try{
        const {id} = req.params; 
        const project = await projects.findByIdAndDelete(id);
        res.status(200).json({message : "Data deleted sucessfully!!!"});
    }catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message})
    }
}

const updateProject = async (req, res) => {
    try{
        const {id} = req.params;
        const project = await projects.findByIdAndUpdate(id, req.body);
        res.status(200).json({message : "Data updated sucessfully!!!"});
    }catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createProject,
    createTask,
    getProject,
    getAllProject,
    deleteProject,
    updateProject,
}