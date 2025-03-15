import React from "react";
import Image from "next/image";
import PageLayout from "../../components/layout/PageLayout";
import Card from "../../components/common/Card";
import { MissionData, CoreValues } from "../../components/assets/datas";

const About = () => {
  return (
    <PageLayout>
      {/* Header Section with Gradient */}
      <div className="relative text-left pt-[98px] pb-[128px] xl:px-[208px] md:px-[100px] px-[25px]">
        <div className="relative z-[10]">
          <h1 className="text-[40px] font-extrabold leading-[40px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
            About SLICEFI
          </h1>
          <p className="mt-6 text-[#B0B0DD] text-[20px] font-normal leading-[28px]">
            The utility token powering the future of decentralized finance.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(109,81,251,0.50)] via-[rgba(9,9,11,0.20)] to-[#09090B]"></div>
      </div>
    
      {/* Mission and Vision Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[64px]">
        <div className="grid xl:grid-cols-2 gap-8">
          {/* Mission Card */}
          {MissionData.map((item, index) => (
            <Card
              key={index}
              className="min-h-[214px] rounded-[10px] p-6 border border-[#09090B] bg-gradient-to-l from-[#312e81] via-[#1e293b] to-[#1e293b] bg-opacity-40"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <Image src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <h2 className="mt-5 mb-4 text-[#E6E6F4] font-[Segoe UI] text-[30px] font-normal leading-[32px]">
                {item.title}
              </h2>
              <p className="text-[#B0B0DD] font-[Segoe UI] text-[20px] font-normal leading-[24px]">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="xl:px-[208px] md:px-[100px] px-[25px] py-[66px]">
        <h2 className="text-center font-[Segoe UI] text-[40px] font-semibold leading-[36px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="mt-[45px] grid xl:grid-cols-3 gap-8">
          {CoreValues.map((item, index) => (
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
    </PageLayout>
  );
};

export default About;
