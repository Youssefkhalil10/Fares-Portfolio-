import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-blue-400">Contact With Me</h1>

        <div className="flex justify-center gap-7 text-3xl">
          {/* <a
            href="https://linkedin.com/in/youssef-khalil-796a23333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 duration-200" />
          </a> */}
          <a
            href="https://www.facebook.com/share/1BoYrD7vZZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-400 duration-200" />
          </a>
          <a
            href="https://www.instagram.com/fares_a_515?igsh=YnVtNGwzaW44MnNu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 duration-200" />
          </a>
          <a
            href="https://wa.me/201090249461"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-400 duration-200" />
          </a>
        </div>

        <p className="text-gray-400">Fares Hakim &copy; {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
