import mongoose from 'mongoose';
const subjectsSchema = mongoose.Schema(
   {
    idsubjects: Number,
    subjectsName: String,
subjectsName : String,
numberOfCredits: Number
   }
)
const subjects = mongoose.model('subjects',subjectsSchema);
export default subjects;