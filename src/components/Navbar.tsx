
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { CalendarDays, Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getLinks = () => {
    if (!currentUser) return [];

    if (currentUser.role === "admin") {
      return [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Booking Requests", href: "/admin/requests" },
        { name: "Halls", href: "/admin/halls" },
      ];
    }

    return [
      { name: "Browse Halls", href: "/halls" },
      { name: "My Bookings", href: "/bookings" },
    ];
  };

  const links = getLinks();

  return (
    <header className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to={currentUser?.role === "admin" ? "/admin/dashboard" : "/halls"} className="flex items-center">
              <CalendarDays className="h-8 w-8 text-purple animate-pulse-gentle" />
              <span className="ml-2 text-xl font-semibold text-white">SeminarBook</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {currentUser && (
              <div className="flex items-center ml-4">
                <span className="text-sm font-medium text-gray-300 mr-4">
                  {currentUser.name} ({currentUser.role})
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800 animate-fade-in">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {currentUser && (
              <div className="pt-4 pb-3 border-t border-gray-800">
                <div className="flex items-center px-4">
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-200">{currentUser.name}</div>
                    <div className="text-sm font-medium text-gray-400">{currentUser.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign out
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
