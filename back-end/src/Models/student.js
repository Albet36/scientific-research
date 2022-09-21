import mongoose, { Schema } from 'mongoose';
const studentSchema = mongoose.Schema(
{
    idStudent: Number,
    name: String,
    age: String,
    address: String,
    phone: String,
    gender: String,
    email : String,
    class: [{type: Schema.Types.ObjectId, ref: 'class'}],
}
)
const students = mongoose.model('students',studentSchema);
export default students;