import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
export default async function Profile() {
    const userInfo = await currentUser();

  return (
    <div>page
        <h1>
            Ho va ten:{userInfo?.firstName}{userInfo?.lastName}
        </h1>
        <h1>Email:{userInfo?.emailAddresses[0]?.emailAddress}</h1>
    </div>
  )
}
