import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../assets/images";
import NavButton from "../common/NavButton";
import Button from "../common/Button";

export const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "SLICEFI Coin", path: "/slicefi" },
  {
    name: "Investment",
    path: "/investment",
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "Investors",
    path: "/investors",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex top-0 sticky z-[1000] justify-center items-center bg-black/60 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <div className="w-[80%] flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Image src={Logo} alt="Slicefi Logo" width={59} height={59} />
        </h1>
        <div className="flex space-x-6">
          {navData.map((link, i) => (
            <Link
              className="relative flex items-center group text-[#E6E6F4] transition-all duration-300 gap-1"
              href={link.path}
              key={i}
            >
              {link.path === pathname ? (
                <span className="hidden xl:inline">
                  <NavButton className="hidden xl:inline">
                    {link.name}
                  </NavButton>
                </span>
              ) : (
                <span className="px-[10px] text-[15px] font-normal leading-[20px] hidden xl:inline">
                  {link.name}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button classes="h-[40px] px-[14.406px] py-[10px] pl-[15px] border-[rgba(109,81,251,0.50)] bg-[#09090B]">
            White Paper
          </Button>
          <Button classes="w-[112.359px] h-[40px] px-[15.359px] border-0 py-[10px] bg-[#6D51FB] ">
            Buy SLICEFI
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
