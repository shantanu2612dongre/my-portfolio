
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 backdrop-blur-lg shadow-md"
      : "bg-transparent"
  }`}
>
  <div className="container mx-auto px-4 h-16 flex items-center justify-between">
    <a href="#home" className="font-heading text-xl font-semibold text-white">
      Portfolio
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="px-4 py-2 text-white/80 hover:text-white transition-colors font-medium"
        >
          {item.label}
        </a>
      ))}
      <div className="ml-4">
        <ThemeSwitcher />
      </div>
    </nav>

    {/* Mobile Menu Button */}
    <div className="flex md:hidden items-center">
      <ThemeSwitcher />
      <Button
        variant="ghost"
        size="icon"
        className="ml-2 text-white"
        onClick={toggleMobileMenu}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden ${
      mobileMenuOpen ? "translate-x-0" : "translate-x-full"
    } bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white`}
  >
    <div className="flex justify-end p-4">
      <Button variant="ghost" size="icon" onClick={closeMobileMenu} className="text-white">
        <X className="h-5 w-5" />
        <span className="sr-only">Close menu</span>
      </Button>
    </div>
    <nav className="flex flex-col items-center mt-16 space-y-6">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-xl py-2 font-medium text-white/90 hover:text-white"
          onClick={closeMobileMenu}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
</header>
  );
};

export default Header;
