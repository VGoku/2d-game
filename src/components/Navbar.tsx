import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-blood text-white shadow-gothic'
            : 'text-gray-300 hover:text-crimson hover:bg-vampire-black/50'
        }`}
      >
        {children}
      </Link>
    );
  };

  const gameLinks = [
    { to: '/hunt', label: 'Hunt' },
    { to: '/arena', label: 'Arena' },
    { to: '/coven', label: 'Coven' },
    { to: '/market', label: 'Market' },
    { to: '/missions', label: 'Missions' },
  ];

  const profileLinks = [
    { to: '/dashboard', label: 'Profile' },
    { to: '/inventory', label: 'Inventory' },
    { to: '/skills', label: 'Skills' },
    { to: '/achievements', label: 'Achievements' },
  ];

  return (
    <div className="bg-vampire-black/90 backdrop-blur-sm shadow-gothic">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif text-crimson hover:text-blood transition-colors">
            Dark Realm
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-6">
              {/* Game Actions */}
              <div className="flex items-center space-x-2">
                {gameLinks.map((link) => (
                  <NavLink key={link.to} to={link.to}>
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Profile Actions */}
              <div className="flex items-center space-x-2 border-l border-gothic-purple/50 pl-6">
                {profileLinks.map((link) => (
                  <NavLink key={link.to} to={link.to}>
                    {link.label}
                  </NavLink>
                ))}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-gray-300 hover:text-crimson hover:bg-vampire-black/50 rounded-lg transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Submenu for additional game info */}
      {isAuthenticated && (
        <div className="border-t border-gothic-purple/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-6 h-10 text-sm">
              <span className="text-blood">Blood: 100/100</span>
              <span className="text-crimson">Gold: 1,000</span>
              <span className="text-gothic-purple">Experience: 2,500</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
