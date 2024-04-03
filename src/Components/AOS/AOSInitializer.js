// AOSInitializer.js
import React, { useEffect } from "react";

const AOSInitializer = () => {
  useEffect(() => {
    // Load AOS library once the component mounts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
    document.body.appendChild(script);

    // Initialize AOS after the script has loaded
    script.onload = () => {
      window.AOS.init();
    };

    // Clean up the dynamically added elements when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs once

  return null; // This component doesn't render anything
};

export default AOSInitializer;
