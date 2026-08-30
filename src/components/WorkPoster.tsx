/**
 * An honest, self-contained project poster shown inside the browser frame.
 * Not a screenshot of the live site — a branded preview tile. The real site
 * is always one click away via the "Visit the live site" link.
 */
export function WorkPoster({ name, role }: { name: string; role: string }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-ink p-6 md:p-8">
      {/* top row: faux nav */}
      <div className="flex items-center justify-between text-bone/70">
        <span className="font-serif text-lg text-bone">{name.split(' ')[0]}</span>
        <span className="hidden gap-4 text-[0.7rem] uppercase tracking-widest sm:flex">
          <span>Services</span>
          <span>Education</span>
          <span>Book</span>
        </span>
      </div>

      {/* centre: headline */}
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-coral">{role}</p>
        <p className="mt-3 font-serif text-[length:clamp(1.6rem,4.2vw,2.8rem)] leading-[1.05] text-bone">
          {name}
        </p>
      </div>

      {/* bottom row: faux booking bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <span className="rounded-full border border-bone/25 px-3 py-1 text-[0.7rem] text-bone/80">Cut</span>
          <span className="rounded-full border border-bone/25 px-3 py-1 text-[0.7rem] text-bone/80">Colour</span>
          <span className="hidden rounded-full border border-bone/25 px-3 py-1 text-[0.7rem] text-bone/80 sm:inline">
            Courses
          </span>
        </div>
        <span className="rounded-full bg-coral px-4 py-1.5 text-[0.7rem] font-medium text-white">Book now</span>
      </div>
    </div>
  );
}
