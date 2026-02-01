import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              Clothify
            </h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Clothify is a modern fashion brand focused on premium
              clothing, clean design, and confident everyday style.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">
              Phone: <span className="text-white">+91 7301553921</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Location: <span className="text-white">Newtown, Kolkata</span>
            </p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Policies</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return & Refund Policy</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/itselfaman"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/amankumar5647/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/amann_keshri?igsh=cmwzODVmMXJsYzdo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Thank you for shopping
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

