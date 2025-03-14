import Image from "next/image";
import { ButtonImg, SButtonImg } from "../assets/images";
const MainButton = ({ children, classes, small }) => {
  return (
    <button
      className={`relative flex justify-center items-center text-white ${classes}`}
    >
      <div className="absolute w-full">
        <Image
          src={small ? SButtonImg : ButtonImg}
          className="w-full"
          alt="main button"
        />
      </div>
      {children}
    </button>
  );
};

export default MainButton;
