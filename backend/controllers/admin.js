import UserModel from "../models/user.js"

export const Getuser = async(req,res)=>{
    try {
        const users = await UserModel.find()
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({message:"Internal error"})
        console.log(error)
    }
}
export const DeleteUser = async(req,res)=>{
    try {
        const userId = req.params.id
        const user = await UserModel.findByIdAndDelete(userId)
        if (!user) {
            console.log('User not found:', userId);
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({message:"user deleted succesfully"})
    } catch (error) {
        res.status(404).json({message:'internal server error'})
    }
}