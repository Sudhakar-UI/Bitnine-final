"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Image } from 'react-bootstrap';
import "./globals.css";
import { Providers } from './Providers';
import { SideMenuProvider } from './SideMenuProvider';
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(false)
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/images/favicon2.svg" type="image/png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="layout">
          <main className="layout-content">
            {/* {loading ? (
            <React.Fragment>
            </React.Fragment>
          ) : (
            <div className="pageloaderbox">
              <div className="pulseloader">
                <Image src="assets/images/loader.gif" />
              </div>
            </div>
          )} */}
            <Providers>
              <ThemeProvider>
                <SideMenuProvider>{children}</SideMenuProvider>
              </ThemeProvider>
            </Providers>
            <ProgressBar height="2px" color="#0abab5" options={{ showSpinner: false }} shallowRouting />
          </main>
        </div>
      </body>
    </html>
  );
} 
