import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import UserAvatar from "./use-avatar";
import { auth } from "@/auth";
import { handleSignOut } from "@/actions/user";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="flex p-5 items-center justify-between h-20">
      <div>
        <Link href="/">CustomerEcho</Link>
      </div>
      <div className="flex items-center gap-3">
        {!session ? (
          <Link href="/signin">
            <Button>Sign in</Button>
          </Link>
        ) : (
          <form action={handleSignOut}>
            <Button variant="default" type="submit">
              Sign Out
            </Button>
          </form>
        )}
        <Link href="/dashboard">
          <UserAvatar />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
