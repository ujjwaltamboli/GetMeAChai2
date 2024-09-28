"use client"
import React, { useState, useEffect } from 'react'
import { addNewPayment } from '@/actions/useractions'
import { fetchPayments } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { fetchdata } from '@/actions/useractions';

const PaymentPage = ({ username }) => {
  const [payments, setPayments] = useState([{ name: "ujjwal" }]);
  const {data : session}=useSession();
  const [userdb,setuserdb]=useState({});
  const [rs,setrs]=useState(0);

  const getSum=()=>{
    let sum=0;
      payments.map((v,i)=>{sum=sum+v.amount;return sum})
      return sum;
  }

  const takeInput2 = (e) => {
    
    addNewPayment(e);
    
    getData();
    toast('Payment done successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

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
            <form action={takeInput2}>
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
