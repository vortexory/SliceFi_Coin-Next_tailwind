import Link from "next/link";
import Image from "next/image";
import { FooterJewellery, Logo } from "../assets/images";
import { TgIcon, FaceBookIcon, MediumIcon, DiscordIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="xl:pt-[60px] md:pt-[30px] pt-0 relative overflow-hidden">
      <div className="z-30 w-full xl:px-[208px] md:px-[100px] px-[20px] md:py-[49px] py-[20px]">
        <div className="flex justify-between flex-wrap pb-[48px] gap-[32px]">
          <div className="xl:w-[306px] w-full pr-[48px]">
            <Image src={Logo} alt="logo" width={60} height={60}></Image>
            <p className="mt-[20px] text-[15px] font-normal leading-[24px] text-[#B0B0DD]">
              Next-generation crypto investment platform connecting real estate,
              stocks, and digital assets.
            </p>
          </div>
          <div className="xl:w-[352px] w-full flex-shrink-0">
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
          <div className="xl:w-[352px] w-full flex-shrink-0">
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
          <div className="xl:w-[352px] w-full flex-shrink-0">
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
        <hr className="h-[2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7]" />
        <div className="flex h-[53px] pt-[36px] justify-center items-center">
          <p className="text-center text-[15px] font-normal leading-[20px] text-[#8A8ACC]">
            © 2025 SLICEFI. All rights reserved.
          </p>
        </div>
      </div>
      <div>
        <Image src={FooterJewellery} className="absolute md:hidden right-0 top-0 opacity-50" alt="footer jewellery"></Image>
      </div>
    </footer>
  );
};

export default Footer;
