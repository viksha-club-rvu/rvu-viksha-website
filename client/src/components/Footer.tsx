import { Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="px-4 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                {/* Custom image logo */}
                <div className="w-12 h-12 rounded-3xl flex items-center justify-center">
                  <img
                    src="/assets/Viksha2.jpg" // Update this path to match your image
                    alt="Viksha Coding Club Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    VIKSHA CODING CLUB
                  </h3>
                  <p className="text-sm text-gray-400">OF RVU</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Empowering coders through collaboration, innovation, and continuous learning.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold mb-4 md:px-10 text-lg flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-blue-400" />
                Contact Information
              </h4>
              <p className="text-gray-400 md:px-16 text-sm mb-2">RV University, Bengaluru</p>
              <p className="text-gray-400 md:px-24 text-sm">Karnataka, India</p>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold mb-4 md:px-16 text-lg flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                Email
              </h4>
              <p className="text-gray-400 md:px-9 text-sm mb-2">club_viksha@rvu.edu.in</p>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay connected with us on social media for updates and events.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/viksha_rvu?igsh=eXY3OGN4dTY2aG1z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Visit our Instagram"
                >
                  <Instagram size={20} className="text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/viksha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Visit our LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-300" />
                </a>
                <a
                  href="https://github.com/viksha-club-rvu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Visit our GitHub"
                >
                  <Github size={20} className="text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Viksha Coding Club. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}