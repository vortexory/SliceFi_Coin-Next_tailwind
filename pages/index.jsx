import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../variants";
import {
  PasteIcon,
  OneIcon,
  GraphIcon,
  ShieldIcon,
  ZapierIcon,
  WorldIcon,
  UtilWireIcon,
  UtilBoxIcon,
  UtilUserIcon,
  UtilShieldIcon,
  EmptyCircleIcon,
  EmptyOnetwoIcon,
  EmptyMedalIcon,
  EmptyShieldIcon,
  StarIcon,
  BoardIcon,
  CheckIcon,
  CheckIcons,
  BoardCommon,
  ArrowTopIcon,
  ArrowDownIcon,
} from "../components/assets/icons";
import {
  chooseSectionData,
  roadmapSectionData,
  slicefiSectionData,
  Tokenomics,
  InvestmentData,
} from "../components/assets/datas";
import Box from "../components/common/Box";
import MainButton from "../components/common/MainButton";
import BeautyButton from "../components/common/BeautyButton";
import {
  BottomImg,
  LeftJewellery,
  LeftWorld,
  RightJewellery,
} from "../components/assets/images";

const Home = () => {
  return (
    <div className="h-full">
      {/* text */}
      <div className="w-full h-full">
        <div className="chooseSection relative xl:py-[90px] lg:py-[40px] py-[10px]  xl:px-[208px] lg:px-[100px] md:px-[50px] px-[20px] mb-[60px]">
          <div className="relative text-center mb-[60px] z-[20]">
            <h2 className="text-center text-[40px] font-semibold leading-[48px] tracking-[-1.2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
              Why Choose SLICEFI?
            </h2>
            <p className="text-[20px] mt-[20px] text-[#E6E6F4] font-normal leading-6">
              Experience the future of decentralized finance with our
              comprehensive investment platform
            </p>
          </div>
          <div className="relative flex justify-center z-[20]">
            <div className="flex flex-wrap justify-around items-center gap-[32px]">
              {chooseSectionData.map((item, index) => (
                <Box
                  className="lg:w-[480px] w-[400px] h-[174px]"
                  key={index}
                  data={item}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-0 lg:w-auto w-[300px] bottom-[-500px] z-0">
            <Image src={RightJewellery} alt="RightJewellery"></Image>
          </div>
        </div>
        <div
          className="slicefiSection mb-[60px] lg:py-[35px] py-[10px] xl:px-[352px] lg:px-[100px] md:px-[50px] px-[20px]"
          id="slicefi"
        >
          <div className="text-center lg:mb-[60px] mb-[25px]">
            <h2 className="text-center text-[40px] font-semibold leading-[48px] tracking-[-1.2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
              SLICEFI
            </h2>
            <p className="text-[20px] font-normal text-[#E6E6F4] mt-[20px] leading-6">
              SLICEFI is a multi-purpose investment coin, enabling seamless
              asset transfers from crypto to real-world value.
            </p>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="relative lg:w-[500px] w-full">
              <h3 className="text-[24px] font-semibold leading-[32px] lg:text-start text-center tracking-[-0.6px] text-[#E6E6F4] mb-6">
                The Utility of SlICEFI
              </h3>
              <div className="flex flex-col">
                {slicefiSectionData.map((item, index) => (
                  <div key={index} className="flex lg:mb-8 mb-[20px]">
                    <div className="mr-4">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="flex-grow-0 gap-[3px]">
                      <h4 className="text-[19px] font-semibold leading-[28.08px] tracking-[-0.468px] text-[#E6E6F4]">
                        {item.title}
                      </h4>
                      <p className="text-[14px] font-normal leading-[20px] text-[#B0B0DD]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-8 lg:w-auto w-full">
              <h3 className="relative z-10 flex items-center text-[30px] font-semibold leading-[32px] tracking-[-0.6px] text-[#E6E6F4]">
                <Image
                  src={StarIcon}
                  alt="starIcon"
                  className="mr-4 rounded-full"
                  width={48}
                  height={48}
                ></Image>
                Platinum Membership
              </h3>
              <div className="z-10 relative text-[16px] font-normal leading-[24px] text-[#B0B0DD]">
                <p className="my-6">
                  Exclusive benefits for holders of 10M SLICEFI ($10,000
                  equivalent)
                </p>
                <div>
                  <div className="flex items-center">
                    <Image
                      className="mr-3"
                      src={CheckIcon}
                      alt="CheckIcon1"
                    ></Image>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex items-center my-4">
                    <Image
                      className="mr-3"
                      src={CheckIcon}
                      alt="CheckIcon1"
                    ></Image>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="mr-3"
                      src={CheckIcon}
                      alt="CheckIcon1"
                    ></Image>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex items-center my-4">
                    <Image
                      className="mr-3"
                      src={CheckIcon}
                      alt="CheckIcon1"
                    ></Image>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="mr-3"
                      src={CheckIcon}
                      alt="CheckIcon1"
                    ></Image>
                    <p>Dedicated account manager</p>
                  </div>
                </div>
                <MainButton classes="lg:w-[520px] w-full h-[60px] mt-8">
                  <p className="relative text-[20px] font-bold leading-[20px] text-[#E6E6F4]">
                    Join Platinum Membership
                  </p>
                </MainButton>
              </div>
              <Image
                className="absolute top-0 left-0 w-full h-full min-w-[400px]"
                src={BoardIcon}
                alt="bg_board"
              ></Image>
            </div>
          </div>
        </div>
        <div
          className="roadmap mb-[60px] lg:pt-[84px] pt-[10px] lg:pb-[60px] pb-0 relative"
          id="roadmap"
        >
          <div className="relative z-[20] text-center lg:mb-[60px] mb-[40px]">
            <h2 className="text-center text-[40px] font-semibold leading-[48px] tracking-[-1.2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
              RoadMap
            </h2>
            <p className="text-[20px] mt-[20px] text-[#E6E6F4] font-normal leading-6">
              Our strategic plan for building and expanding the roadmap
              ecosystem.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative flex flex-wrap justify-around items-center lg:gap-[32px] gap-[20px]">
              {roadmapSectionData.map((item, index) => (
                <div
                  key={index}
                  className="relative px-[18px] py-[21px] w-[350px] h-[400px] z-[20]"
                >
                  <h3 className="relative w-[120px] h-[30px] mb-[40px] text-[12px] font-normal leading-[16px] text-[#E6E6F4] rounded-[10px] bg-[#5454B5] z-10 p-[5px] flex justify-center items-center ">
                    {item.date}
                  </h3>
                  <div className="z-10 relative text-[16px] font-normal leading-[24px] text-[#B0B0DD]">
                    <h4 className="mb-[30px] text-[20px] font-semibold leading-[28px] tracking-[-0.5px] text-[#E6E6F4]">
                      {item.title}
                    </h4>
                    <div>
                      <div className="flex items-center">
                        <Image
                          width={20}
                          height={20}
                          className="mr-3"
                          src={CheckIcons}
                          alt="CheckIcons1"
                        ></Image>
                        <p className="text-[15px] font-normal text-[#E6E6F4]">
                          Dedicated account manager
                        </p>
                      </div>
                      <div className="flex items-center my-[15px]">
                        <Image
                          width={20}
                          height={20}
                          className="mr-3"
                          src={CheckIcons}
                          alt="CheckIcons1"
                        ></Image>
                        <p className="text-[15px] font-normal text-[#E6E6F4]">
                          Dedicated account manager
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Image
                          width={20}
                          height={20}
                          className="mr-3"
                          src={CheckIcons}
                          alt="CheckIcons1"
                        ></Image>
                        <p className="text-[15px] font-normal text-[#E6E6F4]">
                          Dedicated account manager
                        </p>
                      </div>
                      <div className="flex items-center my-[15px]">
                        <Image
                          width={20}
                          height={20}
                          className="mr-3"
                          src={CheckIcons}
                          alt="CheckIcons1"
                        ></Image>
                        <p className="text-[15px] font-normal text-[#E6E6F4]">
                          Dedicated account manager
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Image
                          width={20}
                          height={20}
                          className="mr-3"
                          src={CheckIcons}
                          alt="CheckIcons1"
                        ></Image>
                        <p className="text-[15px] font-normal text-[#E6E6F4]">
                          Dedicated account manager
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="absolute top-0 left-0 w-full h-full"
                    src={BoardIcon}
                    alt="bg_board"
                  ></Image>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 xl:top-0 md:top-[-75px] top-[-150px] z-[0]">
            <Image
              src={LeftWorld}
              className="xl:w-auto md:w-[300px] w-[200px]"
              alt="leftworld"
            ></Image>
          </div>
        </div>
        <div
          className="tokenomics relative mb-[60px] lg:py-[189px] py-[50px] bg-gradient-to-b from-[#09090B] to-[rgba(109,81,251,0.10)]"
          id="tokenomics"
        >
          <div className="text-center mb-[60px]">
            <h2 className="text-center font-['Segoe_UI'] text-[40px] font-semibold leading-[48px] tracking-[-1.2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
              Tokenomics
            </h2>
            <p className="text-[20px] font-normal leading-[24px] text-[#E6E6F4] mt-[20px] text-center">
              Designed for long-term sustainability and growth
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-around items-center gap-[32px]">
              {Tokenomics.map((item, index) => (
                <div
                  key={index}
                  className="relative px-[18px] py-[21px] w-[280px] h-[182px]"
                >
                  <div className="z-10 relative text-[16px] font-normal leading-[24px] text-[#B0B0DD]">
                    <div>
                      <Image
                        src={item.icon}
                        width={32}
                        height={32}
                        alt="empty"
                      ></Image>
                    </div>
                    <h4 className="text-[20px] mt-4 mb-2 font-semibold leading-[28px] text-[#E6E6F4]">
                      {item.title}
                    </h4>
                    <p className="text-[15px] font-normal leading-[24px] text-[#B0B0DD]">
                      {item.description}
                    </p>
                  </div>
                  <Image
                    className="absolute top-0 left-0 w-full h-full"
                    src={BoardCommon}
                    alt="bg_common"
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="investment mb-[60px] relative" id="investment">
          <div className="text-center mb-[60px] relative z-[20]">
            <h2 className="text-center text-[40px] font-semibold leading-[48px] tracking-[-1.2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
              Investment Opportunities
            </h2>
            <p className="text-[20px] text-[#E6E6F4] mt-[20px] font-normal leading-6">
              SLICEFI offers a multi-asset investment platform with
              decentralized and transparent opportunities.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col lg:pb-[60px] pb-[40px] relative z-[20]">
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-around items-center gap-[32px]">
                {InvestmentData.map((item, index) => (
                  <div
                    key={index}
                    className="relative p-[20px] w-[400px] h-[400px]"
                  >
                    <div className="mb-[40px]">
                      <Image
                        src={item.icon}
                        width={64}
                        height={64}
                        alt="invest"
                      ></Image>
                    </div>
                    <div className="z-10 relative text-[16px] font-normal leading-[24px] text-[#B0B0DD]">
                      <h4 className="mb-[10px] text-[20px] font-semibold leading-[28px] tracking-[-0.5px] text-[#E6E6F4]">
                        {item.title}
                      </h4>
                      <p className="text-[15px] mb-[18px] font-normal leading-[24px] text-[#B0B0DD]">
                        {item.description}
                      </p>
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[-0.35px] text-[#E6E6F4]">
                          Examples:
                        </p>
                        <div className="flex items-center my-[8px]">
                          <Image
                            width={20}
                            height={20}
                            className="mr-3"
                            src={CheckIcons}
                            alt="CheckIcons1"
                          ></Image>
                          <p className="text-[15px] font-normal text-[#E6E6F4]">
                            {item.data[0]}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            width={20}
                            height={20}
                            className="mr-3"
                            src={CheckIcons}
                            alt="CheckIcons1"
                          ></Image>
                          <p className="text-[15px] font-normal text-[#E6E6F4]">
                            {item.data[1]}
                          </p>
                        </div>
                        <div className="flex items-center my-[8px]">
                          <Image
                            width={20}
                            height={20}
                            className="mr-3"
                            src={CheckIcons}
                            alt="CheckIcons1"
                          ></Image>
                          <p className="text-[15px] font-normal text-[#E6E6F4]">
                            {item.data[2]}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            width={20}
                            height={20}
                            className="mr-3"
                            src={CheckIcons}
                            alt="CheckIcons1"
                          ></Image>
                          <p className="text-[15px] font-normal text-[#E6E6F4]">
                            {item.data[3]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Image
                      className="absolute top-0 left-0 w-full h-full"
                      src={BoardIcon}
                      alt="bg_board"
                    ></Image>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:pb-[42px] md:pb-[20px] pb-0 relative z-[20]">
            <MainButton classes="w-[520px] h-[60px]">
              <p className="relative text-[20px] font-bold leading-[20px] text-[#E6E6F4]">
                Explore All Investment Opportunities
              </p>
            </MainButton>
          </div>
          <div className="absolute left-0 lg:w-auto w-[300px] top-[-400px] z-0">
            <Image src={LeftJewellery} alt="LeftJewellery"></Image>
          </div>
        </div>
        <div className="askquestion mb-[60px]" id="askquestion">
          <div className="text-center">
            <h2 className="text-center text-[40px] font-semibold leading-[48px] tracking-[-1.2px] bg-gradient-to-r from-[#60A5FA] to-[#A855F7] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-[20px] text-[#E6E6F4] my-[20px] font-normal leading-6">
              Find answers to common questions about the SLICEFI ecosystem.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-around items-center px-[20px]">
              <div className="relative px-[20px] lg:pt-[65px] pt-[20px] lg:pb-[40px] pb-[20px] lg:w-[760px] w-full h-full">
                <Image
                  className="absolute top-0 left-0 w-full h-full"
                  src={BoardIcon}
                  alt="bg_board"
                ></Image>
                <div className="relative">
                  <div className="mb-[40px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
                        Is SLICEFI a security token?
                      </h4>
                      <Image
                        src={ArrowTopIcon}
                        alt="top"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                    <p className="mt-[15px] text-[16px] font-normal leading-[24px] text-[#B0B0DD]">
                      No, SLICEFI is a utility token used within our platform
                      for investments, transactions, and staking. It provides
                      access to platform features but does not represent
                      ownership in any company or entity.
                    </p>
                  </div>
                  <div className="mb-[40px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
                        Is my investment secured?
                      </h4>
                      <Image
                        src={ArrowDownIcon}
                        alt="down"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </div>
                  <div className="mb-[40px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
                        How can I earn from SLICEFI?
                      </h4>
                      <Image
                        src={ArrowDownIcon}
                        alt="down"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </div>
                  <div className="mb-[40px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
                        What blockchain does SLICEFI operate on?
                      </h4>
                      <Image
                        src={ArrowDownIcon}
                        alt="down"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </div>
                  <div className="mb-[40px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
                        How are real estate investments verified?
                      </h4>
                      <Image
                        src={ArrowDownIcon}
                        alt="down"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </div>
                  <div className="mb-[40px]">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
                        What are the minimum investment requirements?
                      </h4>
                      <Image
                        src={ArrowDownIcon}
                        alt="down"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="relative text-[30px] font-normal leading-[24px] text-[#B0B0DD] text-center lg:pt-[40px] pt-[0] pb-[60px]">
                    Still have questions?
                  </p>
                  <div className="flex justify-center">
                    <MainButton small={true} classes="w-[240px] h-[60px]">
                      <p className="relative text-[20px] font-bold leading-[20px] text-[#E6E6F4]">
                        Contact Support
                      </p>
                    </MainButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomSection relative lg:pt-0 pt-[368px]">
          <Image src={BottomImg} alt="world" className="w-full h-full"></Image>
          <div className="absolute left-0 top-0 w-full h-full px-[10px]">
            <div className="flex flex-col justify-end items-center py-[80px] h-full">
              <h4 className="text-[40px] font-bold leading-[36px] text-[#E6E6F4] text-center">
                Join the Future of Finance
              </h4>
              <p className="my-[24px] text-[20px] font-normal leading-[28px] text-[#B0B0DD] text-center">
                Don't miss out on the next generation of DeFi
              </p>
              <div className="my-[60px] flex space-x-4">
                <BeautyButton classes="px-[32px] py-[14px] text-[15px] font-bold leading-[24px] text-[#E6E6F4] text-center">
                  Join Presale
                </BeautyButton>
                <div className="flex justify-center">
                  <MainButton small={true} classes="w-[240px] h-[60px]">
                    <p className="relative text-[15px] font-semibold leading-[24px] text-[#E6E6F4] text-center">
                      Join Community
                    </p>
                  </MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
