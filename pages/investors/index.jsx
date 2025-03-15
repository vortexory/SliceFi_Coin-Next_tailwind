import React from "react";
import Image from "next/image";
import BeautyButton from "../../components/common/BeautyButton";
import Card from "../../components/common/Card";
import PageLayout from "../../components/layout/PageLayout";
import { TokenMetrics } from "../../components/assets/datas/investorsData";
import CommonButton from "../../components/common/CommonButton";

import {
  Gift,
  Lock,
  CrownIcon,
  RightArrow,
  CommentIcon,
  GiftIcon2,
  UserIcon,
  PageIcon,
} from "../../components/assets/icons";

export function CardContent({ children, className = "p-6" }) {
  return <div className={className}>{children}</div>;
}

export default function Investors() {
  return (
    <PageLayout>
      {/* Header Section */}
      <div className="relative text-left pt-[98px] xl:pb-[68px] md:pb-[20px] pb-[6px] xl:px-[208px] md:px-[100px] px-[25px] z-[20]">
        <div className="relative z-[10]">
          <h1 className="text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            Investor Relations
          </h1>
          <p className="mt-6 text-[#B0B0DD] text-[20px] font-normal leading-[28px]">
            Access detailed information about SLICEFI's performance and future
            plans.
          </p>
          <BeautyButton className="mt-10 py-[14px] px-[32px] flex items-center gap-2">
            Download White Paper
            <Image src={PageIcon} alt="whiteIcon"></Image>
          </BeautyButton>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,81,251,0.50)] via-[rgba(9,9,11,0.20)] to-[#09090B]"></div>
      </div>

      {/* Token Metrics Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[66px] z-[20] relative">
        <h2 className="text-center text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA]  to-[#A855F7] bg-clip-text text-transparent">
          Token Metrics
        </h2>
        <div className="mt-[45px] grid xl:grid-cols-4 md:grid-cols-2 gap-8">
          {TokenMetrics.map((item, index) => (
            <Card
              key={index}
              className="relative min-h-[138px] text-white p-7 pb-0 flex flex-col rounded-lg border border-[#09090B] bg-gradient-to-l from-[#312e8166] via-[#312e8166] to-[#1E293B99]"
            >
              <h3 className="text-[#E6E6F4] text-center font-[Segoe UI] text-[20px] font-normal leading-[24px]">
                {item.title}
              </h3>
              <p className="text-[#B0B0DD] text-center font-[Segoe UI] text-[20px] font-bold leading-[32px] mt-2">
                {item.amount}
              </p>
              <p className="text-[#E6E6F4] text-center font-[Segoe UI] text-[15px] font-normal leading-[20px] mt-[3px]">
                {item.token}
              </p>
            </Card>
          ))}
        </div>
      </div>
      {/* Community Benefits Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[64px] grid xl:grid-cols-2 gap-12 z-[20] relative">
        {/* Community Benefits Section */}
        <div className="">
          <h2 className="text-[#E6E6F4] text-[30px] font-semibold leading-[36px]">
            Token Sale Details
          </h2>
          <ul className="mt-3 text-[#E6E6F4] text-[15px] font-normal leading-[24px]">
            <li className="mb-3 flex items-center gap-4">
              <Image src={CommentIcon} height={48} alt="comment"></Image>
              <div>
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                  Seed Round
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                  60% discount with 2-year lockup period
                </p>
              </div>
            </li>
            <li className="mb-3 flex items-center gap-4">
              <Image src={GiftIcon2} height={48} alt="Gift"></Image>
              <div>
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                  Pre-Sale
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                  40% discount with 2-year lockup period
                </p>
              </div>
            </li>
            <li className="mb-3 flex items-center gap-4">
              <Image src={UserIcon} height={48} alt="User"></Image>
              <div>
                <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                  Public Sale
                </h3>
                <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                  Exchange listing at market price
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Platinum Membership Section */}
        <div className="">
          <div className="bg-gradient-to-l from-[#312e8166] via-[#312e8166] to-[#1E293B99] p-6 rounded-lg border-purple-500">
            <h2 className="flex items-center text-[#E6E6F4] text-[30px] font-semibold leading-[36px]">
              <Image
                src={CrownIcon}
                alt="crown"
                className="mr-3"
                width={32}
                height={32}
              ></Image>
              Transparency Report
            </h2>
            <ul className="mt-5 text-[#B0B0DD]  text-[15px] font-normal leading-[24px]">
              <li className="mb-3 flex items-center gap-4">
                <Image src={UserIcon} height={48} alt="User"></Image>
                <div>
                  <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                    Treasury Updates
                  </h3>
                  <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                    Monthly reports on fund allocation and usage
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Image src={UserIcon} height={48} alt="User"></Image>
                <div>
                  <h3 className="text-[#E6E6F4] font-[Segoe UI] text-[20px] font-semibold leading-[24px]">
                    Token Vesting
                  </h3>
                  <p className="text-[#B0B0DD] font-[Segoe UI] text-[15px] leading-[24px]">
                    Detailed vesting schedules for all token holders
                  </p>
                </div>
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
