"use client"
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = ({params}) => {
  // const { data: session } = useSession()
  //   if (!session){
  //       const router=useRouter();
  //       router.push("/");
  //   }
  return (
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              <div className='relative'>
              <img src="patreon_banner.gif" className='w-full h-[350]' alt="" />
                <div className="absolute -bottom-16 right-[46%] ">
                  <img src="cat.avif" alt="" width={100} className='rounded-full border-white border-2'/>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-20 text-white">
                  <div className="font-bold text-xl">
                    @{params.username}
                  </div>
                  <div className='text-slate-500'>
                    Creating Animated art for VTT's
                  </div>
                  <div className='text-slate-500 '>
                    <ul className="flex gap-4">
                      <li>12753 memebers</li>
                      <li>86 posts</li>
                      <li>$16910/release</li>
                    </ul>
                  </div>
              </div>
            <div className='flex justify-center gap-4 pb-12 text-white mt-4  '>
              <div className='w-[40%] bg-slate-900 px-5 py-5'>
                <h2 className='font-bold text-lg px-2 my-5 h-86'>Supporters</h2>
                <ul>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  <li className="flex"><img src="Avatar.gif" width={30} alt="" /> Subham donated $120 with message ""</li>
                  {/* //rzp_test_4UuSVfCkeceMaP */}
                  {/* oVMbSumBctvizRPS5YFkauHl */}
                


                  
                  
                  
                  
                  
                </ul>
              </div>
              <div className='w-[40%] bg-slate-900 p-5'>
                <h2 className='font-bold text-lg'>Make a Payment</h2>
                <form action="">
                  <input  type="text" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3' placeholder='Enter Name' />
                  <input  type="text" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3' placeholder='Enter Message' />
                  <input  type="text" className='w-full bg-slate-800 mr-3  mb-5 h-8 rounded-lg p-3' placeholder='Enter Amount' />
                  <button type="button" class="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                </form>
                <div className='flex gap-3'>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">$10</button>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">$20</button>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">$30</button>
                </div>
              </div>
              
            </div>
    </div>
  )
}

export default page
