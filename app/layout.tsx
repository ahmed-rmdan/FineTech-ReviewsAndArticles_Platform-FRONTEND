'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/state/reduxprovider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/global/themeprovider";
import { geistSans, geistMono } from "@/lib/fonts";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
          <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
             >
              <ReduxProvider>
              <SessionProvider>
              <ThemeProvider>
                    {children}
              </ThemeProvider>
              </SessionProvider>
               
               </ReduxProvider>  
       
         <Toaster  richColors position='bottom-right' />
      </body>


    </html>
  );
}
