import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="text-black" size={24} />
            <span className="text-xl font-light tracking-wider">FakeNewsGuard</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link to="/dashboard" className="text-black hover:text-gray-600 transition-colors text-sm tracking-wide">
              Dashboard
            </Link>
            <Link to="/about" className="text-black hover:text-gray-600 transition-colors text-sm tracking-wide">
              About
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-600 transition-colors text-sm tracking-wide">
              Contact
            </Link>
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors text-sm tracking-wide"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            ) : (
              <Link
                to="/auth"
                className="bg-black text-white px-6 py-2 text-sm tracking-wide hover:bg-gray-900 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg"
            >
              <div className="flex flex-col p-6 space-y-4">
                <Link to="/dashboard" className="text-black hover:text-gray-600 transition-colors">
                  Dashboard
                </Link>
                <Link to="/about" className="text-black hover:text-gray-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">
                  Contact
                </Link>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    className="bg-black text-white px-6 py-2 text-center hover:bg-gray-900 transition-colors"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}