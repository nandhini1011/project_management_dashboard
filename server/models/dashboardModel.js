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
  task : {
    type : String,
    required : true
  },
  descriprtion : {
    type : String
  },
  startTime : {
    type : String,
    required : true
  },
  endTime : {
    type : String,
    default : () => Date.now()
  },
  status : {
    type : String,
    default : () => Date.now()
  }
});

module.exports = mongoose.model('projects', projects)

