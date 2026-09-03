/** A restrained phone mock around a mobile screenshot. Matches the browser
    frame's light border colors; no bezel elements overlap the screenshot. */
export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[1.8rem] border border-line-strong bg-paper p-[5px] shadow-[0_24px_60px_-28px_rgba(28,24,21,0.35)] transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/phone:shadow-[0_38px_80px_-30px_rgba(28,24,21,0.5)]">
      <div className="overflow-hidden rounded-[1.45rem] border border-line bg-paper">
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
