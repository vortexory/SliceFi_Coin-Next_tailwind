const NavButton = ({ children }) => {
  return (
    <button className="relative flex flex-col items-center h-[30px] px-[10px] flex-shrink-0">
      {/* <div className="absolute w-full h-full bg-gradient-to-r from-[#60A5FA] rounded-[6px] to-transparent"></div> */}
      {/* <div className="absolute w-full h-full bg-gradient-to-r from-transparent rounded-[6px] to-purple-800"></div> */}
      <div className="bg-[linear-gradient(135deg,_#09090B_0%,_rgba(9,9,11,0.8)_50%,_rgba(139,92,246,0.7)_100%)] absolute w-full h-full border-[1px] border-[#60A5FA] rounded-[6px] p-[2px]"></div>
      <span className="z-[10]">{children}</span>
    </button>
  );
};

export default NavButton;
