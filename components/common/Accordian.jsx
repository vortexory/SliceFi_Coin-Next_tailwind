import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownIcon, ArrowTopIcon } from "../assets/icons";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-[40px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h4 className="text-[18px] font-normal leading-[28px] tracking-[-0.45px] text-[#E6E6F4]">
          {title}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={ArrowDownIcon} alt="toggle" width={20} height={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-[16px] font-normal leading-[24px] text-[#B0B0DD]">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

export default Accordion;
