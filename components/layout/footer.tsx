import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-black relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Cyber.ix
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into digital reality through innovative solutions.
            </p>
          </div>
          
          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Development', 'Software Solutions', 'UI/UX Design'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400 group">
                <Mail className="h-4 w-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">Cyber.ix345@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Phone className="h-4 w-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div className="group-hover:text-white transition-colors">
                  <div>123 Tech Street</div>
                  <div>San Francisco, CA 94105</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Cyber.ix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;