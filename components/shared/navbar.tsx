import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { auth } from "@/auth";
import UserAvatar from "./use-avatar";

export default function Navbar() {
  const session = auth();
  return (
    <div className="flex p-5 items-center justify-between h-20">
      <div>
        <Link href="/">CustomerEcho</Link>
      </div>
      <div className="flex items-center gap-3">
        <Button>Sign in</Button>

        {/* <Link href="/dashboard">
            <UserAvatar />
          </Link> */}
        {/* )} */}

        <ModeToggle />
      </div>
    </div>
  );
}
