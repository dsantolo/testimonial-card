interface TestimonialCardProps {
  image: { src: string };
  name: string;
  handle: string;
  testimonial: string;
}
export default function TestimonialCard({
  image = { src: "" },
  name = "",
  handle = "",
  testimonial = "",
}: TestimonialCardProps) {
  return (
    <div className="flex h-[233px] w-[340px] flex-col gap-4 rounded-lg bg-white p-6">
      <div className="flex h-[49px] w-[292px] gap-4">
        <img
          className="size-12 rounded-full"
          src={image.src}
          alt={`Photo of ${name}`}
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-neutral-900">{name}</div>
          <div className="text-sm text-neutral-600">{handle}</div>
        </div>
      </div>
      <div className="text-base text-neutral-600">{testimonial}</div>
    </div>
  );
}
