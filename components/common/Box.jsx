import Image from "next/image";

const Box = ({ data, className }) => {
  return (
    <div className={className}>
      <div className="w-full relative flex-shrink-0">
        <div className="bg-[linear-gradient(163deg,_#09090B_0%,_rgba(9,9,11,0.8)_50%,_rgba(139,92,246,0.7)_100%)] absolute w-full h-full border-[1px] border-[#60A5FA] rounded-[6px] p-[2px]"></div>
        <div className="relative w-full h-full p-[25px] pb-0">
          <Image
            src={data.icon}
            alt={data.title}
            width={48}
            height={48}
          ></Image>
          <div className="py-[21px]">
            <h4 className="mb-[7px]">{data.title}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
