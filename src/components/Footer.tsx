import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Pill className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Samir Pharma</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your comprehensive resource for pharmaceutical education, professional development, 
              and interactive learning experiences in the field of pharmacy.
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for pharmaceutical education</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/achievements" className="hover:text-white transition-colors duration-200">Achievements</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors duration-200">Courses</Link></li>
              <li><Link to="/quiz" className="hover:text-white transition-colors duration-200">Quiz</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>samirsapkota09@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+977 9863199343</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PharmaCare. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Purbanchal University Curriculum • Professional Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;