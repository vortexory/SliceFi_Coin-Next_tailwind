import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import BeautyButton from "../common/BeautyButton";
import { Jewellery, World } from "../assets/images";

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
    <div className="min-h-screen relative text-white bg-gradient-to-tr from-[rgba(109,81,251,0.20)] via-[rgba(9,9,11,0.20)] to-[#09090B]">
      <Nav />
      <div className="relative">
        <div className="relative flex justify-center z-[100]">
          <div className="max-w-[1216px] ">
            <div className="flex flex-col items-center text-center mt-16 px-6">
              <button className="relative flex flex-col items-center justify-center px-[17px] py-[5px] flex-shrink-0">
                <div className="bg-[linear-gradient(135deg,_#09090B_0%,_rgba(9,9,11,0.8)_50%,_rgba(139,92,246,0.7)_100%)] absolute w-full h-full border-[1px] border-[#60A5FA] rounded-full p-[2px]"></div>
                <p className="z-10 text-center font-['Segoe_UI'] text-[20px] font-normal leading-[24px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
                  Pre-sale Starting Soon
                </p>
              </button>
              <h1 className="text-center text-[120px] font-bold leading-[140px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] my-[60px] bg-clip-text text-transparent">
                The Future of DeFi is Here
              </h1>
              <p className="text-center text-[#E6E6F4] text-[25px] font-normal leading-[32px] px-[180px]">
                Join the revolution in decentralized finance with SliceFi -
                connecting real estate, stocks, and digital assets in one
                powerful ecosystem.
              </p>
              <div className="my-[60px] flex space-x-4">
                <BeautyButton classes=" px-6 py-2">Join Presale</BeautyButton>
                <button className="border border-white px-6 py-2 rounded-md">
                  Read Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center space-x-6 text-center z-[100]">
          <div className="flex w-[156px] p-[17px] flex-col flex-shrink-0 self-stretch rounded-[8px] shadow-[1px_1px_2px_rgba(10,10,130,0.6)] bg-[rgba(0,0,0,0.50)] backdrop-blur-[2px]">
            <p className="text-3xl font-bold text-[#8A8ACC]">82</p>
            <p className="text-[14px] text-[#B0B0DD]">Days</p>
          </div>
          <div className="flex w-[156px] p-[17px] flex-col flex-shrink-0 self-stretch rounded-[8px] shadow-[1px_1px_2px_rgba(10,10,130,0.6)] bg-[rgba(0,0,0,0.50)] backdrop-blur-[2px]">
            <p className="text-3xl font-bold text-[#8A8ACC]">15</p>
            <p className="text-[14px] text-[#B0B0DD]">Hours</p>
          </div>
          <div className="flex w-[156px] p-[17px] flex-col flex-shrink-0 self-stretch rounded-[8px] shadow-[1px_1px_2px_rgba(10,10,130,0.6)] bg-[rgba(0,0,0,0.50)] backdrop-blur-[2px]">
            <p className="text-3xl font-bold text-[#8A8ACC]">25</p>
            <p className="text-[14px] text-[#B0B0DD]">Minutes</p>
          </div>
          <div className="flex w-[156px] p-[17px] flex-col flex-shrink-0 self-stretch rounded-[8px] shadow-[1px_1px_2px_rgba(10,10,130,0.6)] bg-[rgba(0,0,0,0.50)] backdrop-blur-[2px]">
            <p className="text-3xl font-bold text-[#8A8ACC]">51</p>
            <p className="text-[14px] text-[#B0B0DD]">Seconds</p>
          </div>
        </div>
      </div>
      <Image
        className="absolute right-0 top-0 z-0"
        src={World}
        alt="World"
      ></Image>
      <Image
        className="absolute left-0 bottom-0 z-0"
        src={Jewellery}
        alt="jewellery"
      ></Image>
    </div>
  );
};

export default Header;
