import Image from "next/image";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import logoImg from "../../assets/logo.png";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-10 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyNavLink href="/">
                  <div className="text-lg">
                    <RiHome2Line />
                  </div>
                  <p>Home</p>
                </MyNavLink>
              </li>
              <li>
                <MyNavLink href="/timeline">
                  <div className="text-lg">
                    <MdOutlineWatchLater />
                  </div>
                  <p>Timeline</p>
                </MyNavLink>
              </li>
              <li>
                <MyNavLink href="/stats">
                  <div className="text-lg">
                    <ImStatsDots />
                  </div>
                  <p>Stats</p>
                </MyNavLink>
              </li>
            </ul>
          </div>
          <Image src={logoImg} alt="Logo" height={70} width={100} />
        </div>

        <div className="navbar-end hidden md:flex">
          <MyNavLink href="/">
            <div className="text-lg">
              <RiHome2Line />
            </div>
            <p>Home</p>
          </MyNavLink>
          <MyNavLink href="/timeline">
            <div className="text-lg">
              <MdOutlineWatchLater />
            </div>
            <p>Timeline</p>
          </MyNavLink>
          <MyNavLink href="/stats">
            <div className="text-lg">
              <ImStatsDots />
            </div>
            <p>Stats</p>
          </MyNavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
