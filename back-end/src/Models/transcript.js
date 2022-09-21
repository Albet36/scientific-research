import mongoose, { Schema } from 'mongoose';
const transciptSchema = mongoose.Schema(
{
    idStudent: Number,
    class: [{type: Schema.Types.ObjectId, ref: 'class'}],
    idSubjects:  [{type: Schema.Types.ObjectId, ref: 'subjects'}],
    testMarksOne: Number,
    testMarksTwo: Number,
    testMarksFinal: Number
}
)
const transcipt = mongoose.model('transcipt',transciptSchema);
export default transcipt;