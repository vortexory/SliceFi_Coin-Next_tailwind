import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Logo } from "../assets/images";
import CommonButton from "../common/CommonButton";
import Button from "../common/Button";
import { ExitIcon, MenuIcon } from "../assets/icons";

export const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "SLICEFI Coin", path: "/slicefi" },
  {
    name: "Investment",
    path: "/investment",
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "Investors",
    path: "/investors",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`flex top-0 sticky z-[1000] justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm ${
        isOpen ? "bg-black" : "bg-black/60"
      }`}
    >
      <div className="md:w-[80%] w-full md:px-0 px-[10px]  flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Slicefi Logo" width={59} height={59} />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-6">
          {navData.map((link, i) => (
            <Link
              className="relative flex items-center group text-[#E6E6F4] transition-all duration-300 gap-1"
              href={link.path}
              key={i}
            >
              {link.path === pathname ? (
                <CommonButton className="w-full py-0 relative border-[1px] border-[#60A5FA] flex flex-col items-center h-[30px] px-[10px] flex-shrink-0">
                  {link.name}
                </CommonButton>
              ) : (
                <span className="px-[10px] text-[15px] font-normal leading-[20px]">
                  {link.name}
                </span>
              )}
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex gap-4">
          <div className="hidden lg:flex space-x-4">
            <Button classes="h-[40px] px-[14.406px] py-[10px] pl-[15px] border-[rgba(109,81,251,0.50)] bg-[#09090B]">
              White Paper
            </Button>
            <Button classes="w-[112.359px] h-[40px] px-[15.359px] border-0 py-[10px] bg-[#6D51FB] ">
              Buy SLICEFI
            </Button>
          </div>
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="xl:hidden z-50 text-white">
            {isOpen ? (
              <Image src={ExitIcon} alt="exit" width={40} height={30}></Image>
            ) : (
              <Image src={MenuIcon} alt="menu" width={40} height={30}></Image>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed w-full top-[59px] left-0 px-[20px] py-[30px] bg-black bg-opacity-90 flex flex-col justify-center space-y-6 xl:hidden"
          >
            {navData.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                onClick={closeMenu}
                className="text-2xl text-white hover:text-purple-400"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
