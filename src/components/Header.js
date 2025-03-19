import Link from "next/link";
import { Button } from "./ui/button";
import { loginAction, logoutAction } from "@/actions";

const Header = ({ getSession }) => {
  console.log(getSession, "getSessions in header");
  const handleOauthSignIn = async () => {
    await loginAction();
  };

  const handleOauthSignOut = async () => {
    await logoutAction();
  };
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
        <form
          action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}
        >
          <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
        </form>
      </div>
    </div>
  );
};

export default Header;
