"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

const page = () => {
    const { data: session } = useSession()
    if (!session){
        const router=useRouter();
        router.push("/");
    }
    return (
        <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center h-screen">
            <h1 className="text-2xl font-bold text-white mt-6">Welcome To Dashboard</h1>

            <form  className="w-[35%]">
                {/* Name Field */}
                <div className="0">
                    <label htmlFor="name" className="block text-white 0">Name</label>
                    <input
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
                        type="text"
                        id="username"
                        name="username"
                        className="w-full p-1 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Profile Picture Field */}
                <div className="0">
                    <label htmlFor="profile_picture" className="block text-white 0">Profile Picture</label>
                    <input
                        type="file"
                        id="profile_picture"
                        name="profile_picture"
                        className="w-full text-white bg-gray-600 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Cover Picture Field */}
                <div className="0">
                    <label htmlFor="cover_picture" className="block text-white 0">Cover Picture</label>
                    <input
                        type="file"
                        id="cover_picture"
                        name="cover_picture"
                        className="w-full text-white bg-gray-600 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Razorpay ID Field */}
                <div className="0">
                    <label htmlFor="razorpay_id" className="block text-white 0">Razorpay ID</label>
                    <input
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
                        type="submit"
                        className="w-full py-1 px-4 mt-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* Create a form for dashboard   */}
            
        
        </div>
        
        
    )
}

export default page
