import React from "react";
import Image from "next/image";
import { PageJewellery } from "../../components/assets/images";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {children}

      {/* Image Section */}
      <Image
        className="absolute xl:top-[10%] top-[30%] right-0 xl:w-[400px] w-auto opacity-50 z-0"
        src={PageJewellery}
        alt="background effect"
      ></Image>
    </div>
  );
}
