import mongoose from 'mongoose';
const rankSchema = mongoose.Schema(
//     idrank: Int32Array,
//     rankName: String,
// rankName : String,
// numberOfCredits: Int32Array
)
const rank = mongoose.model('rank',rankSchema);
export default rank;