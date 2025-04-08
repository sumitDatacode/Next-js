"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/assets/scss/main.scss'
import Navbar from '@/components/Navbar'
import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname)
  const hideLayout = ['/login', '/signup', '/createbook'];

  const shouldHideLayout = hideLayout.includes(pathname);



  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

 {
     shouldHideLayout ?  (  
                   children
                      ) : 
             (
              <div className="flex justify-between h-full  m-auto">
              <Sidebar/>
          
              <div className="pl-5 pr-5 md:ml-[400px]  h-screen md:pl-12 flex  md:pr-12 w-full flex-col">
                 <TopNavbar/>
                 {children}
                 </div>
                 </div>
             )         
        
 }
      
       
      
      </body>
    </html>
  );
}
