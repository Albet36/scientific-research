import classs from '../Models/class.js'
export const classss = async (req,res) => {
    const {className} = req.body;
try {
    console.log(className);
    await classs.create({className});
    res.status(200).json('Success class');
} catch (error) {
    res.status(500).json('Failed class');
}
}