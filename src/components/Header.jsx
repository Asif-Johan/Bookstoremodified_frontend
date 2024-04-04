import React, { useState } from 'react';
import ISORUETlogo from "../assets/ISORUETlogo.png";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='bg-green-100 py-2 mb-10'>
      <div className={`header-container flex justify-between ${isOpen?"justify-center items-center ":""} max-w-[90vw] mx-auto`}>
        <div className={`header-image border border-green-600 rounded-2xl ps-4 pe-1 py-1 ${isOpen?"hidden":"block"} lg:block`}>
          <img src={ISORUETlogo} alt="" className='w-60' />
        </div>

        <div className={`my-auto ${isOpen?"mx-auto":"mx-0"} `}>
          <div className=''>
            <div className={`sm:block lg:hidden ${isOpen?"ms-10":"ms-0"}`} onClick={toggleOpen}>
              <FaBars size={24} />
            </div>
            <div className={`${isOpen ? "block mx-auto" : "hidden mx-0"} lg:flex`}> {/* Show/hide on small screens, always show on larger screens */}
              <div className="header-navlinks flex justify-center items-center sm:flex-col lg:flex-row gap-6">
                <div className='header-nav-home'>
                  <Link to={"/"}>Home</Link>
                </div>

                {/* About */}
                <div className='header-nav-about'>
                  <Link to={"/about"}>About</Link>
                </div>

                {/* Admin */}
                <div className='header-nav-admin cursor-pointer'>
                  {isAdmin ? (
                    <div onClick={() => window.location.reload()}>Logout From Admin</div>
                  ) : (
                    <Link to={"/admin/login"}>Login As Admin</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
