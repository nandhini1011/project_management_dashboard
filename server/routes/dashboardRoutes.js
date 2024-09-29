const express = require("express");
const router = express.Router();

const { 
    createProject,
    createTask,
    getProject,
    getAllProject,
    deleteProject,
    updateProject,
} = require("../controller/dashboardController");

router.post("/project", createProject);

router.patch("/project/:id",createTask);

router.get("/project/:id", getProject);

router.get("/projects",getAllProject);

router.delete("/project/:id", deleteProject);

router.patch("/project/:id", updateProject);

module.exports = router