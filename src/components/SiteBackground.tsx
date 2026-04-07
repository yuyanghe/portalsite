export function SiteBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-faint [background-size:36px_36px] opacity-[0.65]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_100%_70%_at_50%_-30%,rgba(37,99,235,0.11),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_100%_80%,rgba(17,24,39,0.95),transparent)]"
        aria-hidden
      />
    </>
  );
}
