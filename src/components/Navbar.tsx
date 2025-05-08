import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#FF4D12]">
      <nav className="flex items-center justify-between py-6 px-6 md:px-12 border-b-0">
        <div className="text-3xl md:text-4xl font-bold">
          <a
            href="/"
            className="text-black hover:opacity-80 transition-opacity"
          >
            Haptic
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white text-black fixed right-0  m-6 md:m-12 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      {isMenuOpen && (
        <div
          dir="rtl"
          className="fixed   w-full text-white z-50 animate-fadeIn flex flex-row "
        >
          <div className="p-6 md:p-12 flex flex-col gap-6 ">
            <a
              href="#why-haptic"
              className="text-2xl w-fit bg-black  space-y-2 md:text-3xl p-2 rounded-md hover:text-haptic-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Haptic
            </a>
            <a
              href="#partners-projects"
              className="text-2xl md:text-3xl  w-auto bg-black p-2  space-y-2 rounded-md hover:text-haptic-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >Partners + Projects
            </a>
            <a
              href="#pricing"
              className="text-2xl md:text-3xl w-fit bg-black  space-y-2 p-2 rounded-md hover:text-haptic-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing + Contact
            </a>
            <a
              href="#careers"
              className="text-2xl md:text-3xl w-fit bg-black  space-y-2 p-2 rounded-md hover:text-haptic-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
