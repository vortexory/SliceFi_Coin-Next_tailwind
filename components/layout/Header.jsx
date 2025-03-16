import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import CountdownTimer from "../common/CountDownTimer";
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
  const targetDate = new Date("2025-04-01T00:00:00");
  return (
    <div className="min-h-screen relative text-white bg-gradient-to-tr from-[rgba(109,81,251,0.30)] via-[rgba(9,9,11,0.20)] to-[#09090B]">
      <Nav />
      <div className="relative">
        <div className="relative flex justify-center z-[100]">
          <div className="xl:w-[1216px] w-full ">
            <div className="flex flex-col items-center text-center mt-16 px-6">
              <button className="relative flex flex-col items-center justify-center px-[17px] py-[5px] flex-shrink-0">
                <div className="bg-gradient-to-br from-[#09090B] via-[#09090B] to-[rgba(109,81,251,0.50)] absolute w-full h-full border-[1px] border-[#60A5FA] rounded-full p-[2px]"></div>
                <p className="z-10 text-center font-['Segoe_UI'] text-[20px] font-normal leading-[24px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
                  Pre-sale Starting Soon
                </p>
              </button>
              <h1 className="text-center lg:text-[120px] md:text-[80px] text-[40px] font-bold lg:leading-[140px] leading-normal bg-gradient-to-r from-[#60A5FA] to-[#A855F7] my-[60px] bg-clip-text text-transparent">
                The Future of DeFi is Here
              </h1>
              <p className="text-center text-[#E6E6F4] text-[25px] font-normal leading-[32px] lg:px-[180px] md:px-[100px] px-[20px]">
                Join the revolution in decentralized finance with SliceFi -
                connecting real estate, stocks, and digital assets in one
                powerful ecosystem.
              </p>
              <div className="my-[60px] flex space-x-4">
                <BeautyButton className="px-6 py-2">Join Presale</BeautyButton>
                <button className="border border-white px-6 py-2 rounded-md">
                  Read Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center text-center z-[100] gap-3">
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
      <Image
        className="absolute right-0 top-0 z-0 lg:w-auto w-[400px]"
        src={World}
        alt="World"
      ></Image>
      <Image
        className="absolute left-0 bottom-0 z-0 lg:w-auto w-[400px]"
        src={Jewellery}
        alt="jewellery"
      ></Image>
    </div>
  );
};

export default Header;
