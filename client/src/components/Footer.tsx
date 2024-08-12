import { Facebook, Twitter, Linkedin,Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About CodeCap</h3>
            <p className="text-md font-semibold">CodeCap is a leading platform for developers to learn, share, and build their careers. Join our community and take your coding skills to the next level.</p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-md font-semibold space-y-2">
              <li><a href="/Home" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/hackathons" className="hover:text-white transition-colors duration-300">Hackathons</a></li>
              <li><a href="/buildteam" className="hover:text-white transition-colors duration-300">Team</a></li>
              <li><a href="/about" className="hover:text-white transition-colors duration-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
            <address className="text-md font-semibold not-italic">
              <p className="mb-2">Maharaja Agrasen Institute Of Technology, Delhi-110084</p>
              <p className="mb-2">Phone: (XXX) XXX-XXXX</p>
              <p className="mb-2">Email: </p>
            </address>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-lg font-semibold">
          <p>&copy; {currentYear}{" "} 
            <a 
              className='hover:text-blue-500 transition-colors duration-300' 
              href="https://github.com/abhinav2805-ux/Code_cap" 
              target='_blank' 
              rel="noopener noreferrer"
            >
              Code Cap
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;