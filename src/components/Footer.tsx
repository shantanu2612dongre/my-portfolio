
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {currentYear} Shantanu Dongre. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center text-muted-foreground">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
