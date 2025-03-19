import { auth } from "@/auth";
import { redirect } from "next/navigation";

const UnAuthPage = async () => {
  const getSession = await auth();
  if (getSession?.user) redirect("/");
  return (
    <div className="p-20">
      <div className="text-red-500 font-extrabold text-6xl">
        You are not Logged In. Login In first
      </div>
    </div>
  );
};

export default UnAuthPage;
