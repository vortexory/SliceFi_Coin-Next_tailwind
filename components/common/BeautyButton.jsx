const BeautyButton = ({ children, classes }) => {
    return (
      <button
        className={`bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white ${classes}`}
      >
        {children}
      </button>
    );
  };
  
  export default BeautyButton;
  