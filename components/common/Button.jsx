const Button = ({ children, classes }) => {
  return (
    <button
      className={`relative flex flex-col items-center border px-[10px] flex-shrink-0 justify-center rounded-[6px] ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
