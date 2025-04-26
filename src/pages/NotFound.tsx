
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
    <div className="min-h-screen flex items-center justify-center bg-jamaica-bg-light">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-jamaica-green">404</h1>
        <p className="text-xl text-gray-600 mb-6">Wah dis? Page not found!</p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto mb-6">
          <p className="text-gray-700 mb-4">
            Sorry star, we cyaan find the page yuh looking for. It might have moved or never existed.
          </p>
          <Button asChild className="w-full bg-jamaica-green hover:bg-jamaica-accent-green">
            <Link to="/">
              Go back home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
