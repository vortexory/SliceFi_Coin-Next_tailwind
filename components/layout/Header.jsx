import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-black text-white">
      
      <Nav />
      <header className="flex flex-col items-center text-center mt-16 px-6">
        <p className="text-sm text-purple-400 border border-purple-400 px-4 py-1 rounded-full">Pre-sale Starting Soon</p>
        <h1 className="text-5xl font-bold mt-4">
          <span className="text-blue-400">The Future of </span>
          <span className="text-purple-400">DeFi</span>
          <span className="text-white"> is Here</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          Join the revolution in decentralized finance with SliceFi - connecting real estate, stocks, and digital assets in one powerful ecosystem.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-md text-white">Join Presale</button>
          <button className="border border-white px-6 py-2 rounded-md">Read Whitepaper</button>
        </div>
      </header>

      <footer className="flex justify-center space-x-6 mt-12 text-center">
        <div>
          <p className="text-3xl font-bold">82</p>
          <p className="text-gray-400">Days</p>
        </div>
        <div>
          <p className="text-3xl font-bold">15</p>
          <p className="text-gray-400">Hours</p>
        </div>
        <div>
          <p className="text-3xl font-bold">25</p>
          <p className="text-gray-400">Minutes</p>
        </div>
        <div>
          <p className="text-3xl font-bold">51</p>
          <p className="text-gray-400">Seconds</p>
        </div>
      </footer>
    </div>
  )
};

export default Header;
