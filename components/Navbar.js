"use client"
import React, {usestate} from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useContext, useState } from 'react'

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false);
  const { data: session } = useSession()
  if (session) {
    return <>
      <nav className='bg-blue-950 text-white flex justify-between px-8 h-12 items-center '>
        <span className='flex gap-1 items-center'>
          <Link href="/"><img src="/coffee-lover.gif" width={25} /></Link>
          Get Me A Chai!
        </span>

        <div className='relative'>
        <button onClick={()=>setshowdropdown(!showdropdown)}  onBlur={()=>{setTimeout(()=>setshowdropdown(false),300)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>


        <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-28 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link href="/dasboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
            </li>
            <li>
              <Link onClick={()=>signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>

    </>
  }
  else {
    return (
      <nav className='bg-blue-950 text-white flex justify-between px-8 h-12 items-center '>
        <span className='flex gap-1 items-center'>
          <Link href="/"><img src="/coffee-lover.gif" width={25} /></Link>
          Get Me A Chai!
        </span>
        <Link href="/login"><button type="button" className="m-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
        </Link>
      </nav>
    )
  }
}

export default Navbar
