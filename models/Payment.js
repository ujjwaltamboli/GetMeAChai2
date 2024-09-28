import mongoose from "mongoose";
const {Schema,model}=mongoose;

const PaymentSchema=new Schema({
    name:{type:String, required:true},
    message:{type:String},
    amount:{type:Number},
    to_user:{type:String,default:"jai ho"},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Boolean,default:false},
    done:{type:Boolean,default:true},
});


export default mongoose.models.Payment|| model("Payment",PaymentSchema);
