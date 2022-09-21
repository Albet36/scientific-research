import mongoose from 'mongoose';
const departmentSchema = mongoose.Schema(
   {
    idDepartment: Number,
    departmentName : String
   }
)
const department = mongoose.model('department',departmentSchema);
export default department;