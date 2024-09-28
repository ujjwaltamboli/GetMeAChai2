"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import { useSession } from 'next-auth/react'
import { updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { fetchdata } from '@/actions/useractions'
import { useRouter } from 'next/navigation'





const page = () => {
    const router=useRouter()
    const {data : session, update }=useSession()
    useEffect(() => {
        document.title="Dashboard-Get Me A Chai"
        if (!session){
            router.push("/login");
        }
        else{
            getData();
        }
    }, [session])
    const[form,setform]=useState({})

    const takeInput=async(e)=>{
        let a=await updateProfile(e,session.user.email);
        
    }

    const getData=async()=>{
        console.log(session)
        let userdb=await fetchdata(session.user.email);
        setform(userdb);
    }
    
    

    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }
    
    const showToastify=()=>{
        toast('Data Saved', {
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
   
    
    
    return (
        <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center h-screen">
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

            <h1 className="text-2xl font-bold text-white mt-6">Welcome To Dashboard</h1>

            <form  className="w-[35%]" action={takeInput}>
                {/* Name Field */}
                <div className="0">
                    <label htmlFor="name" className="block text-white 0">Name</label>
                    <input
                        value={form.name?form.name:""}
                        onChange={handleChange}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-1 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="0">
                    <label htmlFor="email" className="block text-white 0">Email</label>
                    <input
                        value={session?session.user.email:""}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-1 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Username Field */}
                <div className="0">
                    <label htmlFor="username" className="block text-white 0">Username</label>
                    <input
                        value={session?session.user.email.split("@")[0]:""}
                        
                        type="text"
                        id="username"
                        name="username"
                        className="w-full p-1 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Profile Picture Field */}
                <div className="0">
                    <label htmlFor="profilepic" className="block text-white 0">Profile Picture</label>
                    <input
                        value={form.profilepic?form.profilepic:""}
                        onChange={handleChange}
                        type="text"
                        id="profilepic"
                        name="profilepic"
                        className="w-full text-white bg-gray-600 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                    />
                </div>

                {/* Cover Picture Field */}
                <div className="0">
                    <label htmlFor="coverpic" className="block text-white 0">Cover Picture</label>
                    <input
                        value={form.coverpic?form.coverpic:""}
                        onChange={handleChange}
                        type="text"
                        id="coverpic"
                        name="coverpic"
                        className="w-full text-white bg-gray-600 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                    />
                </div>

                {/* Razorpay ID Field */}
                <div className="0">
                    <label htmlFor="razorpay_id" className="block text-white 0">Razorpay ID</label>
                    <input
                        value={form.razorpay_id?form.razorpay_id:""}
                        onChange={handleChange}
                        type="text"
                        id="razorpay_id"
                        name="razorpay_id"
                        className="w-full p-1 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Razorpay Secret Field */}
                <div className="0">
                    <label htmlFor="razorpay_secret" className="block text-white 0">Razorpay Secret</label>
                    <input
                        value={form.razorpay_secret?form.razorpay_secret:""}
                        onChange={handleChange}
                        type="text"
                        id="razorpay_secret"
                        name="razorpay_secret"
                        className="w-full p-1 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        onClick={()=>{showToastify()}}
                        type="submit"
                        className="w-full py-1 px-4 mt-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </form>
            {/* Create a form for dashboard   */}
            
        
        </div>
        
        
    )
}

export default page
