import mongoose from "mongoose";
const {Schema,model }=mongoose;

const UserSchema=new Schema({
    email:{type: String, required: true},
    name:{type: String},
    username:{type:String,required: true},
    profilepic:{type: String, default: 'patreon_banner.gif'},
    coverpic:{type: String, default: 'cat.avif'},
    razorpay_id:{type:String},
    razorpay_secret:{type:String},
    createdAt:{type: Date,default:Date.now},
    updatedAt:{type: Date,default:Date.now},
});

export default mongoose.models.User|| model("User",UserSchema);

