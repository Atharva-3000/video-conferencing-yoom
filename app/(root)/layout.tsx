import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Yoom: Video Conferencing made Transparent",
  description: "An alternative to Zoom, built with Stream and Clerk",
  icons:{
    icon:'/icons/logo.svg'
  }
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>
    <StreamVideoProvider>
    {children}
    </StreamVideoProvider>
    </main>;
};

export default RootLayout;
