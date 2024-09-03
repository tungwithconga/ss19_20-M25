"use client"
import { useAuth, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { userInfo } from 'os';
import React from 'react'

export default function page() {
    const userinfo = useAuth();
    const router = useRouter();
    //Kiem tra user da dang nhap chua
    // console.log("userinfo:",userinfo);
    // if (userinfo.isSignedIn){
    //     return <>Duoc di vao trang dashboard</>
    // }else{
    //     //Chua dang nhap
    //     router.push('/sign');
    //     return null;
    // }
  return <>{userinfo.isSignedIn ? <UserButton/> : router.push("sign-in")}</>
}
