
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="h-16 w-16">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 80C33.4 80 20 66.6 20 50C20 33.4 33.4 20 50 20C66.6 20 80 33.4 80 50C80 66.6 66.6 80 50 80Z" fill="black"/>
              </svg>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
              <li><a href="#why-haptic" className="text-gray-600 hover:text-black transition-colors">Work</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/hapticstudio" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/byhaptic/" className="text-gray-600 hover:text-black transition-colors">Instagram</a></li>
              <li><a href="https://x.com/madebyhaptic" className="text-gray-600 hover:text-black transition-colors">X</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">Haptic © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
