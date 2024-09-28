"use server"
import React from 'react'
import User from '@/models/User'
import connectDB from '@/db/connectDb'
import Payment from '@/models/Payment'

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
    let data=Object.fromEntries(e);
    console.log("Hello world");
    let a= await Payment.create(data);

}

export const fetchPayments=async(email)=>{
    await connectDB();
    let fetchedData=await Payment.find({done:true,to_user:email}).sort({amount:-1}).limit(10).lean();
    console.log("Hello multiverse");
    return fetchedData;
}