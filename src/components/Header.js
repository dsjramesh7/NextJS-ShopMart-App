import Link from "next/link";

const Header = () => {
  return (
    <div className="flex shadow-md py-4 px-6 bg-white min-h[70px] tracking-wide">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"} className="text-red-400 font-bold text-3xl">
          IMart
        </Link>
      </div>
    </div>
  );
};

export default Header;
