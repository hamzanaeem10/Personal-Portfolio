
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the main portfolio page
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Loading Portfolio...</h1>
        <p className="text-xl text-gray-300">Redirecting to main portfolio page</p>
      </div>
    </div>
  );
};

export default Index;
