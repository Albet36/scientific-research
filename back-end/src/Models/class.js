import mongoose from 'mongoose';
const classSchema = mongoose.Schema(
   {
    idclass: Number,
    className : String
   }
)
const classs = mongoose.model('class',classSchema);
export default classs;