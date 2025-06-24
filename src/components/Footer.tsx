import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left: Logo + Name */}
        <div className="flex flex-col items-start gap-3">
          {/* Replace with your actual logo image */}
              <img src={logo} alt="Logo" className="h-8 w-auto" />
     <h1 className="text-xl font-semibold">KREYT: Powering the Decentralized Internet</h1>

        </div>

        {/* Right: Navigation Sections */}
        <div className="flex flex-wrap gap-12 text-sm text-white/80">
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Bandwidth Sharing</a></li>
              <li><a href="#" className="hover:text-white">Rewards Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Extension</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Documentation</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Getting Started</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Kreyt. All rights reserved.
      </div>
    </footer>
  );
}
