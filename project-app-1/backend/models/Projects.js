import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true},
    description: { 
        type: String, 
        required: false },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
}, {
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { 
    timestamps: true 
});

export default mongoose.model("Project", ProjectSchema);