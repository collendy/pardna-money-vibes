
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to login after 2.5 seconds
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="text-center space-y-8 flex flex-col items-center">
        <img 
          src="/lovable-uploads/a944be1f-b473-403c-bfde-5601a2ab7f8b.png" 
          alt="SmarterPartner Logo" 
          className="w-40 h-40"
        />
        
        <div className="space-y-2">
          <img 
            src="/lovable-uploads/80351fa8-4074-493c-b249-bb0e08d72449.png" 
            alt="SmarterPartner Text Logo" 
            className="h-12 mx-auto"
          />
          <p className="text-smarterpartner-secondary-text text-lg">
            Community Savings. Smarter Together.
          </p>
        </div>
        
        <div className="w-12 h-12 border-4 border-t-smarterpartner-purple border-r-smarterpartner-gold border-b-smarterpartner-green border-l-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
