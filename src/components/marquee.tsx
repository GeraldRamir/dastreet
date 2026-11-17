import { site } from "@config/site";

export function Marquee() {
  const loop = [...site.marquee, ...site.marquee];
  return (
    <div className="overflow-hidden border-y border-alien/40 bg-ink text-bone">
      <div className="ticker py-3">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="px-4 font-display text-2xl tracking-wide uppercase md:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
