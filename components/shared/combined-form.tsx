import SignIn from "./sign-in";
import SignInWithGoogle from "./sign-in-with-google";

export default function CombinedForm() {
  return (
    <div className="flex flex-col max-w-md mx-auto p-4 rounded-md">
      <div className="p-2 mb-3 max-w-md mx-auto mt-5">
        <SignInWithGoogle />
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  );
}
