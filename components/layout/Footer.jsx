import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" className="flex items-end flex-row gap-3">
            <h1 className="text-4xl font-bold">Steven</h1>
            <h3 className="text-3xl text-red-500 font-bold">Lee</h3>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
