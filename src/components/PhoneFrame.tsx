/** A restrained phone mock around a mobile screenshot. */
export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[1.9rem] border border-line-strong bg-ink p-[3px] shadow-[0_30px_60px_-24px_rgba(28,24,21,0.55)]">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-paper">
        <span
          className="absolute left-1/2 top-2 z-10 h-1 w-9 -translate-x-1/2 rounded-full bg-ink/20"
          aria-hidden="true"
        />
        <img
          src={src}
          alt={alt}
          width={390}
          height={845}
          loading="lazy"
          decoding="async"
          className="block aspect-[9/19.5] w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
