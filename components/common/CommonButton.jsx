const CommonButton = ({ children, className }) => {
  return (
    <button
      className={`relative z-[10] bg-gradient-to-br from-[#09090B] via-[#09090B] to-[rgba(109,81,251,0.50)] rounded-[8px]  ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton;
