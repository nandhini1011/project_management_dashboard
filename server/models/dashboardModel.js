// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const blogSchema = new Schema({
// title: String, // String is shorthand for {type: String}
// author: String,
// body: String,
// comments: [{ body: String, date: Date }],
//  date: { type: Date, default: Date.now },
//  hidden: Boolean,
// meta: {
//   votes: Number,
//  favs: Number
//  }
// });


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tasks = new Schema({
  task : {
    type : String,
    required : true
  },
  startTime : {
    type : Date,
    default : () => Date.now()
  },
  endTime : {
    type : Date,
    default : () => Date.now()
  },
  status : {
    type : String,
    default : "New"
  }
})

const projects = new Schema({
  projectName : {
    type : String,
    required : true
  },
  assignedTo : {
    type : String,
    required : true
  },
  role : {
    type : String,
    required : true
  },
  description : {
    type : String,
  },
  tasks : [tasks]
  
});

module.exports = mongoose.model('projects', projects)

