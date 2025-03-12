import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 w-screen">
      <div className="container mx-auto px-4 py-1 md:px-6 ">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left ">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Berakah Cleaning</h3>
            <p className="text-gray-300">
              Professional cleaning services for homes and businesses. Quality,
              reliability, and attention to detail.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-green-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-green-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-green-300"
                >
                  Contact
                </a>
              </li>
           
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-300">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-300">
                  AirBNB Cleaning Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-300">
                  Deep Cleaning
                </a>
              </li>
             
              <li>
                <a href="#" className="text-gray-300 hover:text-green-300">
                  Move-in/Move-out Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">(801)610-6548</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Berakahcleaningser@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Berakah Cleaning Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
