interface TopPickMiniCardProps {
  title: string
  subtitle: string
  logoText: string
  price: string
  points: string[]
  url: string
}

export function TopPickMiniCard({
  title,
  subtitle,
  logoText,
  price,
  points,
  url,
}: TopPickMiniCardProps) {
  return (
    <article className="rounded-[12px] border border-[#e1b785] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="px-3 pt-3 pb-2 bg-[radial-gradient(circle_at_100%_0%,#f8e7d5_0,#fffaf3_34%,#ffffff_70%)]">
        <h3 className="text-[18px] sm:text-[20px] leading-[1.05] font-bold tracking-tight text-center text-[#1f2937] font-serif">
          {title}
        </h3>
        <p className="mt-2 text-[11px] text-center text-[#6b7280] leading-[1.25] min-h-[32px]">
          {subtitle}
        </p>
      </div>

      <div className="px-3 pb-2">
        <div className="rounded-[12px] border border-[#d9dde3] bg-[#f6f7f9] px-2.5 py-2">
          <p className="text-center text-[16px] leading-none font-semibold text-[#1f2937] min-h-[20px]">
            {logoText}
          </p>
          <ul className="mt-2.5 space-y-1.5 min-h-[112px]">
            <li className="flex gap-1.5 text-[11px] text-[#5f6672] leading-snug">
              <span className="text-[#1ea972] font-semibold">✓</span>
              <span>Starts at {price}</span>
            </li>
            {points.map((point) => (
              <li key={point} className="flex gap-1.5 text-[11px] text-[#5f6672] leading-snug">
                <span className="text-[#1ea972] font-semibold">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-3 pb-3 space-y-1.5">
        <a
          href={url}
          rel="sponsored noopener noreferrer"
          target="_blank"
          className="block text-center rounded-[9px] bg-[#f97a0e] hover:bg-[#eb6f08] text-white font-semibold py-1.5 text-[12px] leading-tight transition-colors"
        >
          Compare Quotes <span className="ml-1">›</span>
        </a>
        <a
          href={url}
          rel="sponsored noopener noreferrer"
          target="_blank"
          className="block text-center rounded-[9px] bg-[#ffa34a] hover:bg-[#f99635] text-white font-semibold py-1 text-[11px] leading-tight transition-colors"
        >
          Visit Site <span className="ml-1">↗</span>
        </a>
      </div>
    </article>
  )
}
