import React from "react";
import Image from "next/image";
import {
  EmptyShieldIcon,
  Gift,
  Lock,
  OneWhiteIcon,
} from "../../components/assets/icons";
import BeautyButton from "../../components/common/BeautyButton";
import Card from "../../components/common/Card";
import PageLayout from "../../components/layout/PageLayout";
import { InvestmentDatas } from "../../components/assets/datas/investmentData";

export function CardContent({ children, className = "p-6" }) {
  return <div className={className}>{children}</div>;
}

export default function Investment() {
  return (
    <PageLayout>
      {/* Header Section */}
      <div className="relative text-left pt-[98px] xl:pb-[124px] md:pb-[80px] pb-[42px] xl:px-[208px] md:px-[100px] px-[25px] z-[20] ">
        <div className="relative z-[10]">
          <h1 className="text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            Investment Opportunities
          </h1>
          <p className="mt-6 text-[#B0B0DD] text-[20px] font-normal leading-[28px]">
            Diversify your portfolio with our multi-asset investment platform.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,81,251,0.50)] via-[rgba(9,9,11,0.20)] to-[#09090B]"></div>
      </div>

      <div className="xl:px-[208px] md:px-[100px] px-[25px] xl:py-[64px] py-[20px] z-[20] relative">
        <div className="grid xl:grid-cols-3 gap-8">
          {InvestmentDatas.map((item, index) => (
            <Card
              key={index}
              className="relative min-h-[214px] text-white p-6 flex flex-col rounded-lg border border-[#09090B] bg-gradient-to-l from-[#312e8166] via-[#312e8166] to-[#1E293B99]"
            >
              <Image
                src={item.icon}
                width={80}
                height={80}
                alt={item.title}
              ></Image>
              <div className="mt-7">
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[30px] font-semibold leading-[32px]">
                  {item.title}
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] font-normal leading-[24px] mt-4">
                  {item.intro}
                </p>
                <ul className="descriptions pt-2">
                  {item.desc.map((it, ix) => (
                    <li key={ix} className="mt-3 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#6D51FB] mr-2"></div>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <BeautyButton className="mt-5">Learn More</BeautyButton>
            </Card>
          ))}
        </div>
      </div>

      {/* Staking & Reward Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] xl:py-[64px] py-[40px] z-[20] relative">
        {/* Staking & Rewards Section */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src={EmptyShieldIcon}
            alt="Secure"
            width={64}
            height={64}
          ></Image>
          <h2 className="text-[40px] text-center xl:my-10 mt-6 mb-5 font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            Secure & Transparent
          </h2>
          <p className="text-[#B0B0DD] text-center font-[Segoe UI] text-[20px] font-normal leading-[24px] xl:w-[835px] w-full">
            Every investment is backed by smart contracts, audit trails, and
            blockchain validation, ensuring complete transparency and security
            for your assets.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
