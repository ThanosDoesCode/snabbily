import type { ReactNode } from 'react';

/** A restrained phone mock around a mobile screen. Matches the browser frame's
    light border colors; no bezel elements overlap the screen. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.8rem] border border-line-strong bg-paper p-[5px] shadow-[0_24px_60px_-28px_rgba(28,24,21,0.35)] transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/phone:shadow-[0_38px_80px_-30px_rgba(28,24,21,0.5)]">
      <div className="work-phone rounded-[1.45rem] border border-line bg-paper">{children}</div>
    </div>
  );
}
