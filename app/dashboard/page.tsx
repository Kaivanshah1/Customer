import Testimonial from "@/components/shared/testimonial";

export default function Dashboard() {
  return (
    <div className="px-20 flex justify-between mt-12">
      <div className="font-semibold text-2xl">Overview</div>
      <Testimonial />
    </div>
  );
}
