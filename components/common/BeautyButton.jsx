  export default function BeautyButton({ children, className = "", ...props }) {
    return (
      <button
        className={`px-6 py-2 rounded-lg font-semibold transition bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }