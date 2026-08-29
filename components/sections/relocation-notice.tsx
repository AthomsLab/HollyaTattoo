import { siteConfig } from "@/content/site"

export function RelocationNotice() {
  const { label, currentPeriod, currentPlace, nextPeriod, nextPlace } =
    siteConfig.relocationNotice

  return (
    <div className="mb-8 w-full text-center md:mb-10">
      <p className="mb-2 font-sans text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
        {label}
      </p>
      <p className="font-serif text-[15px] leading-snug text-foreground md:text-lg">
        {currentPeriod}{" "}
        <span className="font-semibold text-primary">{currentPlace}</span>
      </p>
      <p className="mt-1.5 font-serif text-[15px] leading-snug text-foreground/75 italic md:text-base">
        {nextPeriod}{" "}
        <span className="font-semibold not-italic text-accent">{nextPlace}</span>
      </p>
    </div>
  )
}
