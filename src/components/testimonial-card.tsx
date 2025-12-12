interface TestimonalCardProps {
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
}: TestimonalCardProps) {
  return (
    <div className="flex h-[233px] w-[340px] flex-col gap-4 rounded-lg bg-white p-6">
      <div className="flex h-[49px] w-[292px] gap-4">
        <img
          className="size-12 rounded-full"
          src={image.src}
          alt={`Photo of ${name}`}
        />
        <div className="flex flex-col">
          <div className="text-lg">{name}</div>
          <div className="text-sm">{handle}</div>
        </div>
      </div>
      <div className="text-base">{testimonial}</div>
    </div>
  );
}
