
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-haptic-orange p-6">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-black">404</h1>
          <p className="text-xl md:text-2xl text-black mb-8">
            This page seems to have disappeared into the void.
          </p>
          <Button asChild className="bg-black text-white hover:bg-black/80">
            <a href="/">Return Home</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
