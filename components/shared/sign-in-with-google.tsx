import { signIn } from "@/auth";
import { Button } from "../ui/button";

export default function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button variant="default" type="submit">
        Signin with Google
      </Button>
    </form>
  );
}
