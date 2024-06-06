/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useState } from "react";
import { Menu, X } from "react-feather";
import Img from "../../../assets/img.png";
import { Link } from "react-router-dom";

interface HeaderItem {
  title: string;
  link: string;
}
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const header: HeaderItem[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Review", link: "/" },
    { title: "CTA", link: "/" },
    { title: "Feedback", link: "/" }
  ];

  return (
    <header className="text-white ">
      <div className="container mx-auto flex justify-between text-center items-center p-3">
        <img src={Img} alt="" className="w-16 h-16" loading="lazy" />

        <div className="hidden lg:flex gap-4 text-md">
          {header.map((item, index) => (
            <ul key={index} className="flex">
              <Link to={item.link}>
                <li>{item.title}</li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex items-center text-white font-extrabold gap-5">
          <button
            className="  bg-purple-300 bg-gradient-to-b  from-[#f5bbaa]  p-3 rounded-lg "
            type="button">
            Login
          </button>
          <button
            className=" bg-purple-300 bg-gradient-to-b  from-[#f5bbaa]   p-3 rounded-lg "
            type="button">
            Signup
          </button>

          <button type="button" className="lg:hidden" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-zinc-700 p-4">
          {header.map((item, index) => (
            <ul key={index} className="flex flex-col">
              <li className="py-1">{item.title}</li>
            </ul>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
