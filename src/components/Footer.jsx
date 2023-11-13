import { Link } from "react-router-dom";
import { logo } from "../assets";
import { BsLinkedin, BsFillEnvelopeAtFill, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-base-100 z-20 absolute bottom-0 left-0 right-0">
      <div className="container flex flex-col items-center justify-between px-6 py-2 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link to="/">
          <img width={50} height={20} src={logo} alt="Duan Logo" />
        </Link>

        <div className="flex -mx-2">
          <a
            href="https://linkedin.com/in/duan-chen/"
            className="mx-2 text-white transition-colors duration-300 hover:text-secondary"
            aria-label="linkedin"
            target="_blank"
          >
            <BsLinkedin className="w-8 h-8" />
          </a>

          <a
            href="mailto:duanchenwork@gmail.com"
            className="mx-2 text-white transition-colors duration-300 hover:text-secondary"
            aria-label="Email"
            target="_blank"
          >
            <BsFillEnvelopeAtFill className="w-8 h-8" />
          </a>

          <a
            href="https://github.com/duanhash/StockScreener"
            className="mx-2 text-white transition-colors duration-300 hover:text-secondary"
            aria-label="Github"
            target="_blank"
          >
            <BsGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
