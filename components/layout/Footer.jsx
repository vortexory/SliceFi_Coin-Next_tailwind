import Link from "next/link";
import Image from "next/image";
import { Logo } from "../assets/images";
import {TgIcon, FaceBookIcon, MediumIcon, DiscordIcon} from "../assets/icons"

const Footer = () => {
  return (
    <footer className="pt-[60px]">
      <div className="z-30 w-full px-[208px] py-[49px] ">
        <div className="flex justify-between flex-wrap pb-[48px] gap-[32px]">
          <div className="w-[306px] pl-[48px]">
            <Image src={Logo} alt="logo" width={60} height={60}></Image>
            <p className="mt-[20px] text-[15px] font-normal leading-[24px] text-[#B0B0DD]">
              Next-generation crypto investment platform connecting real estate,
              stocks, and digital assets.
            </p>
          </div>
          <div className="w-[352px] flex-shrink-0">
            <h4 className="text-[20px] font-semibold leading-[24px] text-[#E6E6F4]">
              Quick Links
            </h4>
            <div className="flex flex-col pt-[16px] gap-2">
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                SLICEFI Coin
              </Link>
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                Investment
              </Link>
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                Community
              </Link>
            </div>
          </div>
          <div className="w-[352px] flex-shrink-0">
            <h4 className="text-[20px] font-semibold leading-[24px] text-[#E6E6F4]">
              Resources
            </h4>
            <div className="flex flex-col pt-[16px] gap-2">
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                White Papaer
              </Link>
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                Documentation
              </Link>
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                FAQ
              </Link>
              <Link
                href="/"
                className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]"
              >
                Investors
              </Link>
            </div>
          </div>
          <div className="w-[352px] flex-shrink-0">
            <h4 className="text-[20px] font-semibold leading-[24px] text-[#E6E6F4]">
              Community
            </h4>
            <div className="flex pt-[12px] gap-4">
              <Image src={TgIcon} alt={TgIcon}></Image>
              <Image src={FaceBookIcon} alt={FaceBookIcon}></Image>
              <Image src={MediumIcon} alt={MediumIcon}></Image>
              <Image src={DiscordIcon} alt={DiscordIcon}></Image>
            </div>
          </div>
        </div>
        <hr className="h-[3px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7]" />
        <div className="flex h-[53px] pt-[36px] justify-center items-center">
          <p className="text-center text-[15px] font-normal leading-[20px] text-[#8A8ACC]">
            © 2025 SLICEFI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
