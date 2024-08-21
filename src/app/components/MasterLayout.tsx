"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function MasterLayout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false); //sidebar expand
  const [hoverClass, setHoverClass] = useState(""); // side bar hoverover extra class
 

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setHoverClass("hover:w-[20%]");
    
      }, 100); // Add hover class after 1 second
      return () => clearTimeout(timer); // Cleanup timeout on unmount or state change
    } else {
      setHoverClass(""); // Reset hover class when not expanded
      
    }
  }, [isExpanded]);

  return (
    <>
      {/* Sidebar */}
      <div
      
        id="SideBar"
        className={`z-40 bg-black text-white h-[100%]  hidden fixed lg:flex transition-all duration-300 ${
          isExpanded ? `w-[10%] ${hoverClass}` : "w-[20%]"
        } `}
      >
         <Sidebar isExpanded={isExpanded}/>
        {/* Adjust Button (inside sidebar but positioned absolutely) */}
        <button
          id="adjustButton"
          onClick={handleButtonClick}
          className="px-2 py-1 bg-blue-500 text-white rounded absolute top-3 -right-3 transition-all duration-300"
        >
          
          {isExpanded ?   <i className="ki-filled ki-black-right-line transition-all rotate-180 duration-1000 ">
            </i>: <i className="ki-filled ki-black-left-line rotate-180 transition-all duration-1000">
            </i> }
        </button>
      </div>

      {/* Content Div */}
      <div
     
        id="contentDiv"
        className={` fixed w-[100%]  transition-all duration-300 border-b-2 h-[100px] text-center flex grow bg-white ${
          isExpanded ? "lg:w-[90%] lg:ml-[10%] " : "lg:w-[80%] lg:ml-[20%] "
        }`}
      >
        <Header/>
      </div>

      {/* Body Div */}
      <div
    
        id="bodyDiv"
        className={`h-auto  pt-[100px]  min-h-[100vh]  transition-all duration-300 border-b-2 text-center flex grow ${
          isExpanded ? "lg:w-[90%] lg:ml-[10%]" : "lg:w-[80%] lg:ml-[20%]"
        }`}
      >
        
        {children}
      </div>
    </>
  );
}
