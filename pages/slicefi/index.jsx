import React from "react";
import Image from "next/image";
import { Gift, Lock, OneWhiteIcon } from "../../components/assets/icons";
import BeautyButton from "../../components/common/BeautyButton";
import Card from "../../components/common/Card";
import { SliceFiData } from "../../components/assets/datas";
import PageLayout from "../../components/layout/PageLayout";

export function CardContent({ children, className = "p-6" }) {
  return <div className={className}>{children}</div>;
}

export default function SliceFi() {
  return (
    <PageLayout>
      {/* Header Section */}
      <div className="relative text-left pt-[98px] pb-[68px] xl:px-[208px] md:px-[100px] px-[25px]">
        <div className="relative z-[10]">
          <h1 className="text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            SLICEFI Coin
          </h1>
          <p className="mt-6 text-[#B0B0DD] text-[20px] font-normal leading-[28px]">
            The utility token powering the future of decentralized finance.
          </p>
          <BeautyButton className="mt-10 py-[14px[ px-[32px] flex items-center gap-2">
            Buy SLICEFI
            <Image src={OneWhiteIcon} alt="whiteIcon"></Image>
          </BeautyButton>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,81,251,0.50)] via-[rgba(9,9,11,0.20)] to-[#09090B]"></div>
      </div>

      {/* Features Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[66px]">
        <h2 className="text-[#FAFAFA] text-center text-[30px] font-normal leading-[36px]">
          The Power of SLICEFI
        </h2>
        <div className="mt-[45px] grid xl:grid-cols-3 gap-8">
          {SliceFiData.map((item, index) => (
            <Card
              key={index}
              className="relative min-h-[214px] text-white p-6 flex flex-col rounded-lg border border-[#09090B] bg-gradient-to-br from-[#09090B] via-[#09090B] to-[rgba(109,81,251,0.50)]"
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
            </Card>
          ))}
        </div>
      </div>

      {/* Staking & Reward Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[64px] grid xl:grid-cols-2 gap-12">
        {/* Staking & Rewards Section */}
        <div className="">
          <h2 className="text-[#E6E6F4] text-[30px] font-semibold leading-[36px]">
            Staking & Rewards
          </h2>
          <p className="text-[#B0B0DD] text-[15px] font-normal leading-[24px] mt-[25px]">
            Earn passive income by staking your SLICEFI tokens and becoming part
            of our governance system.
          </p>
          <ul className="mt-3 text-[#E6E6F4] text-[15px] font-normal leading-[24px]">
            <li className="mb-2 flex items-center gap-2">
              <Image src={Lock} height={12} alt="lock"></Image>
              Minimum stake: 1,000 SLICEFI
            </li>
            <li className="flex items-center gap-2">
              <Image src={Gift} height={12} alt="Gift"></Image>
              Annual rewards up to 12% APY
            </li>
          </ul>
        </div>

        {/* Platinum Membership Section */}
        <div className="">
          <div className="bg-gray-900 p-6 rounded-lg border border-purple-500">
            <h2 className="text-[#E6E6F4] text-[30px] font-semibold leading-[36px]">
              Platinum Membership
            </h2>
            <p className="text-[#E6E6F4] text-[15px] font-normal leading-[24px] my-4">
              Hold 100M SLICEFI ($100,000 equivalent) to unlock exclusive
              benefits:
            </p>
            <ul className="mt-4 text-[#B0B0DD]  text-[15px] font-normal leading-[24px]">
              <li className="mb-3 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#6D51FB] mr-2"></div>
                Dedicated account manager
              </li>
              <li className="mb-3 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#6D51FB] mr-2"></div>
                Free crypto credit card
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#6D51FB] mr-2"></div>
                20% discount on platform fees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
