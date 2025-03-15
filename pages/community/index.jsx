import React from "react";
import Image from "next/image";
import {
  Gift,
  Lock,
  CrownIcon,
  RightArrow,
  CommentIcon,
  GiftIcon2,
  UserIcon,
} from "../../components/assets/icons";
import BeautyButton from "../../components/common/BeautyButton";
import Card from "../../components/common/Card";
import PageLayout from "../../components/layout/PageLayout";
import { CommunityData } from "../../components/assets/datas/communityData";
import CommonButton from "../../components/common/CommonButton";
export function CardContent({ children, className = "p-6" }) {
  return <div className={className}>{children}</div>;
}

export default function Community() {
  return (
    <PageLayout>
      {/* Header Section */}
      <div className="relative text-left pt-[98px] xl:pb-[124px] md:pb-[80px] pb-[42px] xl:px-[208px] md:px-[100px] px-[25px] z-[20]">
        <div className="relative z-[10]">
          <h1 className="text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            Join the SLICEFI Community
          </h1>
          <p className="mt-6 text-[#B0B0DD] text-[20px] font-normal leading-[28px]">
            Connect with fellow investors and stay updated on the latest
            developments.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,81,251,0.50)] via-[rgba(9,9,11,0.20)] to-[#09090B]"></div>
      </div>

      {/* Features Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] xl:py-[64px] py-[20px] z-[20] relative">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
          {CommunityData.map((item, index) => (
            <Card
              key={index}
              className="relative min-h-[246px] text-white p-6 flex flex-col rounded-lg border border-[#09090B] bg-gradient-to-l from-[#312e81] via-[#1e293b] to-[#1e293b] bg-opacity-40"
            >
              <Image
                src={item.icon}
                width={64}
                height={64}
                alt={item.title}
              ></Image>
              <div className="mt-[20px]">
                <h3 className="text-[#E6E6F4] text-[20px] font-semibold leading-[28px]">
                  {item.title}
                </h3>
                <p className="text-[#B0B0DD] text-[15px] font-normal leading-[24px] mt-2">
                  {item.desc}
                </p>
              </div>
              <BeautyButton className="mt-3">Join Now</BeautyButton>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Benefits Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[64px] grid xl:grid-cols-2 gap-12 z-[20] relative">
        {/* Community Benefits Section */}
        <div className="">
          <h2 className="text-[#E6E6F4] text-[30px] font-semibold leading-[36px]">
            Community Benefits
          </h2>
          <ul className="mt-3 text-[#E6E6F4] text-[15px] font-normal leading-[24px]">
            <li className="mb-3 flex items-center gap-4">
              <Image src={CommentIcon} height={48} alt="comment"></Image>
              <div>
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                  Exclusive Updates
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                  Be the first to know about new features and opportunities
                </p>
              </div>
            </li>
            <li className="mb-3 flex items-center gap-4">
              <Image src={GiftIcon2} height={48} alt="Gift"></Image>
              <div>
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                  Regular Airdrops
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                  Participate in token airdrops and contests
                </p>
              </div>
            </li>
            <li className="mb-3 flex items-center gap-4">
              <Image src={UserIcon} height={48} alt="User"></Image>
              <div>
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                  Network Effect
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                  Connect with like-minded investors and experts
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Platinum Membership Section */}
        <div className="">
          <div className="bg-gradient-to-l from-[#312e81] via-[#1e293b] to-[#1e293b] bg-opacity-40 p-6 rounded-lg border-purple-500">
            <h2 className="flex items-center text-[#E6E6F4] text-[30px] font-semibold leading-[36px]">
              <Image
                src={CrownIcon}
                alt="crown"
                className="mr-3"
                width={32}
                height={32}
              ></Image>
              Platinum Membership
            </h2>
            <p className="text-[#E6E6F4] text-[15px] font-normal leading-[24px] my-4">
              Get exclusive benefits with our premium membership tier:
            </p>
            <ul className="mt-4 text-[#B0B0DD]  text-[15px] font-normal leading-[24px]">
              <li className="mb-3 flex items-center">
                <Image
                  src={RightArrow}
                  alt="arrow"
                  className="w-4 h-4 mr-2"
                ></Image>
                Dedicated account manager
              </li>
              <li className="mb-3 flex items-center">
                <Image
                  src={RightArrow}
                  alt="arrow"
                  className="w-4 h-4 mr-2"
                ></Image>
                Exclusive investment deals
              </li>
              <li className="flex items-center">
                <Image
                  src={RightArrow}
                  alt="arrow"
                  className="w-4 h-4 mr-2"
                ></Image>
                Early access to token sales
              </li>
            </ul>
            <CommonButton className="w-full mt-[30px] py-2 rounded-[8px]">
              Learn More
            </CommonButton>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
