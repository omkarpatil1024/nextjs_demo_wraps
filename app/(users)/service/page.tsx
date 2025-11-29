import { Metadata } from "next";
import {notFound} from "next/navigation";
export const metadata: Metadata = {
  title: 'Service Page',
  description: 'Welcome to my Next.js application!',
  authors:[{name:"Omkar" , url:"https://omkarpatil.com"}],
  keywords:["Next.js", "React", "TypeScript"],
  icons:{
    icon:"../../public/offerBiz.png"
  },
  openGraph:{
    title:"Service Page",
    description:"Welcome to my Next.js application!",
    siteName:"My App",
    images:[{
      url:"https://omkarpatil.com/og-image.png",
      width:1200,
      height:630,
      alt:"Omkar Patil"
    }]
  },
  twitter:{
    title:"Service Page",
    description:"Welcome to my Next.js application!",
    images:[{
      url:"https://omkarpatil.com/og-image.png",
      width:1200,
      height:630,
      alt:"Omkar Patil"
    }]
  }
}

export default function Service() {
  let omkar = true;
  if(omkar){
    notFound();
  }

  return (
    <>
      <h3>Service Page</h3>
    </>
  );
}