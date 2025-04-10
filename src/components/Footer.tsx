
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white backdrop-blur-sm border-t border-white/10 py-8">
  <div className="container mx-auto px-4 text-center">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-white/80">
        © {currentYear} Shantanu Dongre. All rights reserved.
      </p>
      <div className="mt-4 md:mt-0 flex items-center gap-4 text-white/70">
        {/* Add social icons here if you want */}
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
