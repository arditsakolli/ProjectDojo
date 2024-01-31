const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "*projectName is required"],
        minlength: [2, "projectName must be longer than 2 characters"],
    },
    projectDetails: {
        type: String,
        required: [true, "*Value must be between 1-10"],
        // min: [1, 'Value must be at least 1'],
        // max: [10, 'Value must be at most 10'],
    },
    data: {
        type: Date,
        // required: [true, "Body is required"],
        // minlength: [25, 'Body must contain 25 characters']
    },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
