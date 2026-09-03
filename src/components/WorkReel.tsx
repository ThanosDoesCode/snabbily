export interface ReelPage {
  src: string;
  w: number;
  h: number;
}

/** Stacked pages of a site inside a framed device. At rest the first page shows;
    the scroll-through and page-to-page fades are driven entirely by CSS on hover
    of the surrounding .reel-card (see index.css). */
export function WorkReel({ pages }: { pages: ReelPage[] }) {
  return (
    <>
      {pages.map((p) => (
        <div className="reel-page" key={p.src}>
          <img src={p.src} alt="" width={p.w} height={p.h} loading="lazy" decoding="async" />
        </div>
      ))}
    </>
  );
}
