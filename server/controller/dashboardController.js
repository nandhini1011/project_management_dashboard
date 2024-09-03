const mongoose = require("mongoose");

const projects = require("../models/dashboardModel")

const createProject = async (req , res) => {
    try{
    const project = await projects.create(...req.body);
    res.status(200).json(project);
} catch(error) {
    console.log(error.message);
    res.status(400).json({ error : error.message});
}
}

const getProject = async (req, res) => {
    const {id} = req.params; 
    const project = await projects.findById(id);
    res.status(200).json(project);
}

const getAllProject = async (req, res) => {
    const projectLists = await projects.find({});
    res.status(200).json(projectLists);
    
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