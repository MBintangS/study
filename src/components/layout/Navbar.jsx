import React, { useEffect, useRef, useState } from "react";
import logo from "/logo.png";
import logoStudyinIdn from "../../assets/study-in-idn.png";
import { LuSearch } from "react-icons/lu";
import { CSSTransition } from "react-transition-group";
import "./style.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const mobileMenuRef = useRef(null);
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop === 0) {
        // Selalu tampilkan navbar ketika berada di atas halaman
        setShowNavbar(true);
      } else if (currentScrollTop > lastScrollTop) {
        // Sembunyikan navbar saat scroll ke bawah
        setShowNavbar(false);
      } else {
        // Tampilkan navbar saat scroll ke atas
        setShowNavbar(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-dark_blue py-5 flex items-center relative">
        <div className="max-w-7xl mx-auto w-full flex justify-between px-4 flex-col md:flex-row">
          <div className="flex w-full items-center gap-4 cursor-default justify-between md:justify-normal">
            <div className="gap-2 flex items-center cursor-pointer" onClick={() => [navigate("/")]}>
              <div className="max-w-10 md:max-w-14">
                <img src={logo} alt="Logo" width={60} height={60} />
              </div>
              <div className="text-white">
                <p className="text-xs font-medium">
                  Directorate General of
                  <br /> Higher Education, Research, and Technology
                </p>
                <p className="text-[8px]">
                  Ministry of Education, Culture, Research, and Technology
                </p>
              </div>
            </div>
            <div className="max-w-[42px] md:max-w-[64px] lg:max-w-[72px]">
              <img src={logoStudyinIdn} alt="Study in Indonesia Logo" width={72} height={72} />
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex text-white items-center gap-4 cursor-pointer">
            <div className="border-[2px] p-2 rounded-full ">
              <LuSearch />
            </div>
            <p>Login</p>
          </div>

          <div
            onClick={toggleMobileMenu}
            className="block md:hidden absolute left-1/2 transform -translate-x-1/2 bottom-1 h-[3px] w-28 bg-[#fff] rounded-full mt-3 cursor-pointer"
          ></div>

          {/* Mobile View */}
          <CSSTransition
            in={isMobileOpen}
            timeout={300}
            classNames="mobile-menu"
            unmountOnExit
            nodeRef={mobileMenuRef}
          >
            <div className="flex flex-row md:hidden text-white items-center mt-6 gap-4 cursor-pointer">
              <div className="border-[2px] p-2 rounded-full">
                <LuSearch size={14} />
              </div>
              <p className="text-sm">Login</p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
