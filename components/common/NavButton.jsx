const NavButton = ({ children }) => {
  return (
    <button className="relative flex flex-col items-center h-[30px] px-[10px] flex-shrink-0">
      <div className="bg-gradient-to-br from-[#09090B] via-[#09090B] to-[rgba(109,81,251,0.50)] absolute w-full h-full border-[1px] border-[#60A5FA] rounded-[6px] p-[2px]"></div>
      <span className="z-[10]">{children}</span>
    </button>
  );
};

export default NavButton;
