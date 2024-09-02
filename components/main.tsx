import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col mt-[100px] gap-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold ">
            Discover what your customers <br />
            <span className="text-center mx-auto">really think about you</span>
          </h1>

          <p className="mt-5">
            We know gathering customer feedback can be a challenge. That's why
            we created an easy-to-use solution.
            <br /> In just a few clicks, you can collect text testimonials from
            your customers, all without needing any technical expertise.
          </p>

          <Button variant="default" className="mt-3">
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  );
}
