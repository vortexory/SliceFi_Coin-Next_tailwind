import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-30 w-full items-center px-16 xl-px-0 xl:h-[90px] py-8        ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
        {/* logo */}
        <Link href="/" className="flex items-end flex-row gap-3">
          footer
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
