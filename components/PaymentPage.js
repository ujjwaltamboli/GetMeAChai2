"use client"
import React, { useState, useEffect } from 'react'
import { addNewPayment, createOrder } from '@/actions/useractions'
import { fetchPayments } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { fetchdata } from '@/actions/useractions';

import Razorpay from 'razorpay';


const PaymentPage = ({ username }) => {
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

  const [payments, setPayments] = useState([{ name: "ujjwal" }]);
  const {data : session}=useSession();
  const [userdb,setuserdb]=useState({});
  const [rs,setrs]=useState(0);

  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
}, []);


  const getSum=()=>{
    let sum=0;
      payments.map((v,i)=>{sum=sum+v.amount;return sum})
      return sum;
  }

const initiatePayment = async (e) => {
  // e.preventDefault();

  // const formData = new FormData(e.target);
  const data = Object.fromEntries(e);
  const amount = data.amount;

  try {
    const order = await createOrder(amount);

    const options = {
      key: "rzp_test_4UuSVfCkeceMaP", // Ensure this value is correct
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      callback_url: "localhost:3000",
      method: ["upi", "card", "netbanking", "wallet"],
      handler: async (response) => {
        console.log("Payment response:", response);

        let reply=await fetch("http://localhost:3000/api/user",{
          method:"POST",
          headers:{"Content-Type":"application/JSON"},
          body:JSON.stringify({
            order_id:response.razorpay_order_id,
            payment_id:response.razorpay_payment_id,
            signature:response.razorpay_signature,
          })
        }
        )
        const result =await reply.json();

        const paymentData = {
          ...data,
          payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        if (result.success){
          console.log("Payment Successful");
          await addNewPayment(paymentData);
          getData();
        }
        else{
          console.log("Payment failed");
        }
      },
      prefill: {
        name: data.name,
        email: "testuser@example.com",
        contact: "9999999999",
        upi: "success@razorpay" // For testing UPI in test mode
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Error initiating payment: ", error);
  }
};



  const getData = async () => {
    console.log("Hello universe");
    let db = await fetchPayments(username.split("%40")[0]+"@"+username.split("%40")[1]);
    let userdbdata=await fetchdata(username.split("%40")[0]+"@"+username.split("%40")[1]);
    console.log(db);
    setPayments(db);
    setuserdb(userdbdata);
    //console.log(db) karne se nai dikhata hai lekin page me kisi button me likne se dikhata hai map ke madad se
  }

  useEffect(() => {
    document.title=`${username} :  Get me a chai`;
    console.log("Hello world7878");
    getData();
    

  }, [])

  

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />


      <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className='relative'>
          
          <img src={userdb.profilepic}  alt="" className='w-full max-h-96'/>
          
          <div className="absolute -bottom-16 right-[46%] ">

            <img src={userdb.coverpic} alt="" width={100} className='rounded-full border-white border-2' />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 text-white">
          <div className="font-bold text-xl">
            @{username.split("%40")[0]}
          </div>
          <div className='text-slate-500'>
            Lets help @{username.split("%40")[0]} get a chai!
          </div>
          <div className='text-slate-500 '>
            <ul className="flex gap-4">
            
              <li>{payments.length+" payments"}</li>
              <li>{getSum()+" raised"}</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center gap-4 pb-12 text-white mt-4  '>
          <div className='w-[40%] bg-slate-900 px-5 py-5'>
            <h2 className='font-bold text-lg px-2 my-5 h-86'>Top 10 Supporters</h2>
            <ul>
              {payments.map((v, i) =>
                <li className="flex"><img src="Avatar.gif" width={30} alt="" /> {v.name} donated {v.amount} with message "{v.message}"</li>
              )}
              {/* //rzp_test_4UuSVfCkeceMaP */}
              {/* oVMbSumBctvizRPS5YFkauHl */}








            </ul>
          </div>
          <div className='w-[40%] bg-slate-900 p-5'>
            <h2 className='font-bold text-lg'>Make a Payment</h2>
            <form action={initiatePayment}>
              <input name='name' id="name" type="text" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3' placeholder='Enter Name' required/>
              <input name='message' id="message" type="text" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3' placeholder='Enter Message' />
              <input name='amount' id="amount" type="integer" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3' placeholder='Enter Amount' required/>
              <input name='to_user' value={userdb.email} id="to_user" type="email" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3 hidden'/>
              <button type="submit" className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </form>
            <div className='flex gap-3'>
              <button type="button" onClick={()=>{setrs(10)}} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >₹10</button>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >₹20</button>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2">₹30</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PaymentPage
