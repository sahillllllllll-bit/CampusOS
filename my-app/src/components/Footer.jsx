import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1f29] text-gray-300 pt-16 pb-6 px-6 md:px-16">  
      <div className="w-full flex justify-center mb-12">      
         <h1 className="text-4xl font-bold tracking-wide lobster text-white">campusOS</h1>
              </div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Columns */}
        <div className="grid grid-cols-2 gap-10 col-span-2">
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>Tutorials</li>
              <li>Documentation</li>
              <li>Forum</li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4">Open Source</h3>
            <ul className="space-y-2">
              <li>Download</li>
              <li>Github</li>
              <li>Runbot</li>
              <li>Translations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Odoo.sh Hosting</li>
              <li>Support</li>
              <li>Upgrade</li>
              <li>Custom Developments</li>
              <li>Education</li>
              <li>Find an Accountant</li>
              <li>Find a Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>

        {/* About Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About us</h3>
          <ul className="space-y-2">
            <li>Our company</li>
            <li>Brand Assets</li>
            <li>Contact us</li>
            <li>Jobs</li>
            <li>Events</li>
            <li>Podcast</li>
            <li>Blog</li>
            <li>Customers</li>
            <li className="mt-4">Legal • Privacy</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇺🇸</span> English ▼
          </div>

          <p className="leading-relaxed text-sm border-t border-gray-600 pt-6">
           CampusOS is an all-in-one platform built for students — combining academics, productivity, collaboration, and campus engagement into one unified ecosystem.
          </p>

          <p className="leading-relaxed text-sm">
            Our competitive advantage is simplicity + integration: everything works together effortlessly so students can do more with less effort.
          </p>

          <div className="flex gap-6 text-xl mt-6">
            <span>f</span>
            <span>X</span>
            <span>in</span>
            <span>🐙</span>
            <span>📸</span>
            <span>🎵</span>
            <span>📞</span>
            <span>💬</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full text-center mt-10 border-t border-gray-700 pt-4 text-sm flex justify-center items-center gap-2">
        Website made by  <span className="text-white lobster font-semibold">Sahil Singh</span>
      </div>
    </footer>
  );
}
