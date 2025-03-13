import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 bg-black/80 backdrop-blur-md">
        <h1 className="text-xl font-bold">SLICEFI</h1>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">SLICEFI Coin</a>
          <a href="#" className="text-gray-300 hover:text-white">Investment</a>
          <a href="#" className="text-gray-300 hover:text-white">Community</a>
          <a href="#" className="text-gray-300 hover:text-white">Investors</a>
        </div>
        <div className="flex space-x-4">
          <button className="border border-white px-4 py-2 rounded-md">White Paper</button>
          <button className="bg-purple-600 px-4 py-2 rounded-md">Buy SLICEFI</button>
        </div>
      </nav>
  )

  // return (
  //   <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
  //     <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        
  //       {navData.map((link, i) => (
  //         <Link
  //           className={`${
  //             link.path === pathname && "text-accent"
  //           } relative flex items-center group hover:text-accent transition-all duration-300`}
  //           href={link.path}
  //           key={i}
  //         >
  //           {/* tolltip */}
  //           <div
  //             role="tooltip"
  //             className="absolute pr-14 right-0 hidden xl:group-hover:flex"
  //           >
  //             <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
  //               <div className="text-[12px] leading-none font-semibold capitalize">
  //                 {link.name}
  //               </div>

  //               {/* triangle */}
  //               <div
  //                 className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
  //                 aria-hidden
  //               />
  //             </div>
  //           </div>

  //           {/* icon */}
  //           <div>
  //             <link.Icon aria-hidden />
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </nav>
  // );
};

export default Nav;
