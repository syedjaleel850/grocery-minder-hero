
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingCart, UserCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="glass-card border-b border-border/40 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-semibold">FreshTrack</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/dashboard" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/auth" 
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 flex items-center"
            >
              <UserCircle className="mr-1.5 h-4 w-4" />
              Sign In
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-primary transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} animate-slide-down`} id="mobile-menu">
        <div className="glass-card px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/40">
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/auth"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
