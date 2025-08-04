import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white border-t border-white/10 py-8"
      
    >
      {/* Background image with blur overlay */}
      <div className="absolute inset-0 bg-[url('/projects/background.png')] bg-cover bg-center opacity-90 blur-sm"></div>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90">
            © {currentYear} Shantanu Dongre. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-4 text-white/70">
            {/* Optional footer links or icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;