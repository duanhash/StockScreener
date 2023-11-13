import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";
import { logo } from "../assets";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { stockRoute } = useSelector((state) => state.home);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Stocks", path: `Stocks/${stockRoute}` },
  ];

  const navIndexes = [
    { name: "Dow", path: "Indexes/Dow" },
    { name: "Nasdaq", path: "/" },
    { name: "S&P 500", path: "/" },
  ];

  return (
    <nav className="bg-base-100 shadow sticky left-0 right-0 z-20 top-0">
      <div className="container px-6 py-2 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img width={50} height={50} src={logo} alt="Duan Logo" />
          </Link>
          <div className="flex md:hidden">
            <label className="btn btn-circle swap swap-rotate bg-base-100 border-base-100 text-white">
              <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-base-100 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            {navigation.map((item, id) => (
              <Link to={item.path} key={id}>
                <label className="px-2.5 py-2 text-white bg-base-100 border-base-100 transition-colors duration-300 transform hover:bg-secondary hover:text-base-100 md:mx-2 btn btn-ghost rounded-btn">
                  {item.name}
                </label>
              </Link>
            ))}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="px-2.5 py-2 text-white bg-base-100 border-base-100 transition-colors duration-300 transform hover:bg-secondary hover:text-base-100 md:mx-2 btn btn-ghost rounded-btn"
              >
                Indexes
              </label>
              <ul
                tabIndex={0}
                className="left-0 menu dropdown-content z-20 p-2 shadow text-white bg-base-100 rounded-box w-52 mt-4"
              >
                {navIndexes.map((item, id) => (
                  <Link to={item.path} key={id}>
                    <li className="btn btn-ghost rounded-btn w-full hover:bg-secondary hover:text-base-100">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
