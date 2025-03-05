import { Menu, X, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';



export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Cyber.ix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-foreground/80 hover:text-foreground transition ${isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-foreground/80 hover:text-foreground transition ${isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-foreground/80 hover:text-foreground transition ${isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              Service
            </NavLink>
            {/* <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-foreground/80 hover:text-foreground transition ${isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              Portfolio
            </NavLink> */}
            {/* <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-foreground/80 hover:text-foreground transition ${isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              Blog
            </NavLink> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-foreground/80 hover:text-foreground transition ${isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              Contact
            </NavLink>

          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground/80 hover:text-foreground transition">Home</a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition">About</a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition">Services</a>
              <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition">Portfolio</a>
              <a href="#blog" className="text-foreground/80 hover:text-foreground transition">Blog</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}