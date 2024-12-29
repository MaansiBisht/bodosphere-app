import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: App Download */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Download the BodSphere App
            </h2>
            <p className="text-gray-600 mb-4">
              Take classes online and practice anytime.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a>
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="text-center my-6 md:my-0">
            <a
            
              className="block text-gray-700 hover:text-orange-500 font-medium mb-2"
            >
              FAQ
            </a>
            <a
   
              className="block text-gray-700 hover:text-orange-500 font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Right Section: Social Media */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Follow BodSphere
            </h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
            
                className="text-gray-500 hover:text-orange-500 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.412c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.917c-1.505 0-1.796.715-1.796 1.762v2.31h3.59l-.467 3.622h-3.123V24h6.116c.729 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a

                className="text-gray-500 hover:text-orange-500 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.312 3.608 1.287.975.975 1.225 2.242 1.287 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.312 2.633-1.287 3.608-.975.975-2.242 1.225-3.608 1.287-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.312-3.608-1.287-.975-.975-1.225-2.242-1.287-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.312-2.633 1.287-3.608.975-.975 2.242-1.225 3.608-1.287 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.07 5.771.128 4.68.442 3.837 1.285c-.843.843-1.157 1.934-1.215 3.215C2.013 5.668 2 6.092 2 12c0 5.908.013 6.332.07 7.612.058 1.281.372 2.372 1.215 3.215.843.843 1.934 1.157 3.215 1.215 1.281.058 1.705.07 7.613.07 5.908 0 6.332-.013 7.612-.07 1.281-.058 2.372-.372 3.215-1.215.843-.843 1.157-1.934 1.215-3.215.058-1.281.07-1.705.07-7.613 0-5.908-.013-6.332-.07-7.612-.058-1.281-.372-2.372-1.215-3.215-.843-.843-1.934-1.157-3.215-1.215C18.332.013 17.908 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.2a4.038 4.038 0 110-8.076 4.038 4.038 0 010 8.076zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-500 mt-8">
          <p className="text-sm">
            &copy; 2024 BodSphere. All rights reserved. | Terms | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
