const express = require("express");
const router = express.Router();

const { 
    createProject,
    getProject,
    getAllProject,
    deleteProject,
    updateProject,
} = require("../controller/dashboardController");

router.post("/project/:id", createProject);

router.get("/project/:id", getProject);

router.get("/projects",getAllProject);

router.delete("/project/:id", deleteProject);

router.patch("/project/:id", updateProject);

module.exports = router