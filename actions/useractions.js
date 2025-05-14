"use server"
import React from 'react'
import User from '@/models/User'
import connectDB from '@/db/connectDb'
import Payment from '@/models/Payment'
import Razorpay from 'razorpay'



const razorpay=new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.KEY_SECRET,
})



export const createOrder=async(amount)=>{
    try{
        const options={amount:amount*100, currency:'INR'}
        const order=await razorpay.orders.create(options);
        console.log(order);
        return order;
    }
    catch(error){
        console.log(error);
    }
}

export const updateProfile=async(e,email)=>{
    await connectDB();
    let data=Object.fromEntries(e);
    await User.updateOne({email:email},data);

}
export const fetchdata=async(email)=>{
    console.log(email);
    await connectDB();
    let data=await User.findOne({email:email});
    let transferData=data.toObject({flattenObjectIds:true});
    return transferData;

}

export const addNewPayment=async(e)=>{
    await connectDB();
    // let data=Object.fromEntries(e);
    console.log("Hello world");
    let a= await Payment.create(e);

}

export const fetchPayments=async(email)=>{
    await connectDB();
    let fetchedData=await Payment.find({done:true,to_user:email}).sort({amount:-1}).limit(10).lean();
    console.log("Hello multiverse");
    return fetchedData;
}