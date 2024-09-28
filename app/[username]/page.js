"use client"
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
// import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import PaymentPage from '@/components/PaymentPage'

const page = ({params}) => {
  const { data: session } = useSession()
  console.log(params);
  return (
    <>
      <PaymentPage username={params.username}/>
    </>
  )
}

export default page
