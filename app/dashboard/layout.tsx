'use client'

import { HeaderDashboard } from "@/components/admin/headers/adminheader"
import { Dashboard } from "@/components/admin/dashboard/dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const {data,status}=useSession()
  const router=useRouter()
useEffect(()=>{
  if(status==='loading') return
    if(data?.user.role!=='admin'||status==='unauthenticated'){
    router.push('/')
    toast.warning('not allowed')
    return
  }

},[data,status])
  if (status === 'loading') {
    return 
  }

  if (data?.user.role !== 'admin') {
    return null
  }


  return (
    <>
    <HeaderDashboard></HeaderDashboard>
      <main className=" flex flex-row items-center justify-start  w-full bg-sec text-[3px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px]  ">
        <Dashboard></Dashboard>
        {children}
        </main>
      
    </>
  );
}