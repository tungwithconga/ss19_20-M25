"use client"
import { useAuth, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { userInfo } from 'os';
import React from 'react'

export default function page() {
    const userinfo = useAuth();
    const router = useRouter();
  return <>{userinfo.isSignedIn ? <UserButton/> : router.push("sign-in")}</>
}
