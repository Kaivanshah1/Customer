import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return "";

  return (
    <div>
      <img
        src={session.user.image || ""}
        alt="User Avatar"
        width={35}
        height={35}
        className="rounded-full"
      />
    </div>
  );
}
