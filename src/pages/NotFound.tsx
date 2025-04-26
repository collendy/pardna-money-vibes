
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-smarterpartner-purple">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found!</p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto mb-6">
          <p className="text-gray-700 mb-4">
            Sorry, we can't find the page you're looking for. It might have moved or never existed.
          </p>
          <Button asChild className="w-full bg-smarterpartner-purple hover:bg-smarterpartner-purple/90 rounded-xl">
            <Link to="/">
              Go back home
            </Link>
          </Button>
        </div>
        
        <div className="mt-8">
          <img 
            src="/lovable-uploads/a944be1f-b473-403c-bfde-5601a2ab7f8b.png" 
            alt="SmarterPartner Logo" 
            className="w-16 h-16 mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
