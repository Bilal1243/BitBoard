import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-10 border-t border-gray-800 mt-16">
      <div className="grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-2">CONNECT WITH US</h3>
          <p className="mb-1">📞 +91 123 123 1231</p>
          <p>📧 info@deepnetsoft.com</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="text-center">
            <img
              src={logo} 
              alt="Deep Net Soft"
              className="mx-auto w-14 h-14 object-contain mb-2"
            />
            <p className="text-lg font-bold text-yellow-500">DEEP NET SOFT</p>
          </div>
        </div>

        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-2">FIND US</h3>
          <p>First floor, Geo Infopark,</p>
          <p>Infopark EXPY, Kakkanad</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © 2025 Deepsnet Soft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
