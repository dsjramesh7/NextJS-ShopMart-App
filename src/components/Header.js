import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex shadow-md py-4 px-6 bg-white min-h[70px] tracking-wide">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"} className="text-red-400 font-bold text-3xl">
          IMart
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <ul className="flex gap-4 font-semibold text-xl">
          <li>
            <Link href={"/"}>Products</Link>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
        </ul>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
