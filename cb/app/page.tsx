import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildItemListSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

type HomeIconName = 'crm' | 'payroll' | 'email' | 'hr' | 'project' | 'voip'

type CategoryItem = {
  href: string
  icon: HomeIconName
  title: string
  desc: string
  count: string
}

type LatestReviewItem = {
  href: string
  icon: HomeIconName
  cat: string
  title: string
  desc: string
  author: string
  updated: string
}

export const metadata: Metadata = buildMetadata({
  title: 'Best Business Software Comparisons & Reviews 2026 | Compare Bazaar',
  description:
    'Compare the best CRM, payroll, email marketing, and HR software for your business. Independent reviews, side-by-side pricing comparisons, and expert recommendations — updated for 2026.',
  canonical: '/',
})

const CATEGORIES: CategoryItem[] = [
  {
    href: '/marketing/best-crm-software',
    icon: 'crm',
    title: 'Best CRM Software of 2026',
    desc: 'Compare HubSpot, Salesforce, Zoho, and 8 more on pipeline management, automation, and pricing.',
    count: '11 platforms reviewed',
  },
  {
    href: '/technology/best-payroll-system',
    icon: 'payroll',
    title: 'Best Payroll Software for Small Business',
    desc: 'ADP, Gusto, OnPay, and Rippling compared on tax compliance, contractor support, and integrations.',
    count: '8 platforms reviewed',
  },
  {
    href: '/marketing/best-email-marketing-services',
    icon: 'email',
    title: 'Best Email Marketing Services',
    desc: 'Mailchimp, Klaviyo, ActiveCampaign ranked on deliverability, automation depth, and list pricing.',
    count: '9 platforms reviewed',
  },
  {
    href: '/human-resources',
    icon: 'hr',
    title: 'Best HR Software for 2026',
    desc: 'BambooHR, Rippling, Workday compared on onboarding, performance tools, and company size fit.',
    count: '7 platforms reviewed',
  },
  {
    href: '/sales/best-project-management-software',
    icon: 'project',
    title: 'Best Project Management Software',
    desc: 'Monday.com, Asana, ClickUp, and Notion ranked on team size, flexibility, and workflow features.',
    count: '10 platforms reviewed',
  },
  {
    href: '/technology/business-phone-systems',
    icon: 'voip',
    title: 'Best VoIP & Business Phone Systems',
    desc: 'RingCentral, Nextiva, and Ooma compared on call quality, mobile apps, and SMB pricing.',
    count: '6 platforms reviewed',
  },
]

const TEAM = [
  { initials: 'SK', name: 'Sarah Kim', role: 'CRM & Sales Tech Editor', exp: 'Former Salesforce consultant · 9 yrs' },
  { initials: 'MR', name: 'Marcus Rivera', role: 'Payroll & HR Software Lead', exp: 'ex-ADP implementation · 11 yrs' },
  { initials: 'PW', name: 'Priya Winters', role: 'Marketing Tech Reviewer', exp: 'B2B SaaS marketing · 7 yrs' },
  { initials: 'JL', name: 'James Liu', role: 'Business Technology Editor', exp: 'IT procurement specialist · 8 yrs' },
]

const FAQS = [
  {
    q: 'How does Compare Bazaar make money?',
    a: 'Compare Bazaar earns affiliate commissions when readers purchase software through our links. This never affects our editorial rankings — sponsored placements are clearly marked "Advertisement."',
  },
  {
    q: 'How often are your software reviews updated?',
    a: 'Our high-traffic comparison pages are reviewed at least every 90 days, or immediately when a vendor makes major pricing or feature changes.',
  },
  {
    q: 'Can vendors pay to be ranked higher in your comparisons?',
    a: 'No. Organic rankings are determined entirely by our scoring methodology. Vendors can purchase clearly labelled "Featured Partner" placements displayed separately from editorial content.',
  },
  {
    q: 'What criteria do you use to score software?',
    a: 'We evaluate software across 12 standardised criteria including pricing, ease of use, core feature depth, customer support quality, integrations, mobile experience, and security.',
  },
  {
    q: 'How do I choose the right software for my business size?',
    a: 'Start with your team size, budget, and must-have features. Then compare 2-3 shortlisted tools on pricing, onboarding effort, integrations, and support quality before making a final decision.',
  },
]

const FEATURED_COMPARISONS = {
  main: {
    href: '/marketing/best-crm-software',
    label: 'Most popular',
    title: 'HubSpot vs Salesforce vs Zoho CRM: which is right for your team in 2026?',
    desc: 'We tested all three across identical business workflows. The best option depends on your team size, process complexity, and budget.',
  },
  side: [
    {
      href: '/technology/best-payroll-system',
      tag: 'Payroll',
      title: 'Gusto vs ADP vs Rippling: SMB payroll compared',
      meta: 'Updated April 2026 · 8 min read',
    },
    {
      href: '/marketing/best-email-marketing-services',
      tag: 'Email Marketing',
      title: 'Klaviyo vs Mailchimp vs ActiveCampaign for e-commerce',
      meta: 'Updated March 2026 · 9 min read',
    },
  ],
}

const LATEST_REVIEWS: LatestReviewItem[] = [
  {
    href: '/marketing/best-crm-software',
    icon: 'crm',
    cat: 'CRM Software',
    title: 'Best CRM Software for Small Business & Teams (2026)',
    desc: 'We tested 11 CRM platforms across lead management, pipeline tools, and integration depth to find the best fit by team size.',
    author: 'Sarah Kim',
    updated: 'Updated Apr 2026',
  },
  {
    href: '/technology/best-payroll-system',
    icon: 'payroll',
    cat: 'Payroll Software',
    title: 'Best Payroll Software for Small Business: Compared & Ranked',
    desc: 'From Gusto to ADP to OnPay, we compared payroll platforms on compliance, ease of use, and contractor support.',
    author: 'Marcus Rivera',
    updated: 'Updated Apr 2026',
  },
  {
    href: '/marketing/best-email-marketing-services',
    icon: 'email',
    cat: 'Email Marketing',
    title: 'Best Email Marketing Services for Business in 2026',
    desc: 'We tested deliverability, automation features, and list-based pricing across leading email marketing tools.',
    author: 'Priya Winters',
    updated: 'Updated Mar 2026',
  },
]

const itemListSchema = buildItemListSchema(
  'Business Software Categories',
  CATEGORIES.map((c) => ({ name: c.title, href: c.href, description: c.desc }))
)

function HomeIcon({ name, className = 'w-6 h-6' }: { name: HomeIconName; className?: string }) {
  const iconProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'crm':
      return (
        <svg {...iconProps}>
          <path d="M9.5 10.5 12 13l2.5-2.5" />
          <path d="M6.5 9 9 11.5m8.5-2.5L15 11.5" />
          <path d="M4.8 12.6 9 16.8a2.6 2.6 0 0 0 3.7 0l.2-.2a2.6 2.6 0 0 1 3.7 0l2.6 2.6" />
          <path d="M3.5 8.8 6 6.3a2.2 2.2 0 0 1 3.1 0L12 9.2" />
          <path d="m20.5 8.8-2.5-2.5a2.2 2.2 0 0 0-3.1 0L12 9.2" />
        </svg>
      )
    case 'payroll':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 8h10M7 12h5M7 16h10" />
          <path d="M15.5 12.5c1.2 0 2 .7 2 1.6 0 1-1 1.7-2.3 1.7-1.1 0-2-.4-2.5-1" />
        </svg>
      )
    case 'email':
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'hr':
      return (
        <svg {...iconProps}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" />
        </svg>
      )
    case 'project':
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M8 2.5v3M16 2.5v3M7 10h10M7 14h6" />
        </svg>
      )
    case 'voip':
      return (
        <svg {...iconProps}>
          <path d="M7 4h4l1 5-3 2a14 14 0 0 0 4 4l2-3 5 1v4a2 2 0 0 1-2.2 2A17 17 0 0 1 5 6.2 2 2 0 0 1 7 4Z" />
        </svg>
      )
    default:
      return null
  }
}

export default function HomePage() {
  return (
    <>
      <JsonLd schema={itemListSchema} />

      {/* Advertising disclosure */}
      <div className="bg-[#fff7ec] border-b border-brand/30 px-4 py-2.5 text-center">
        <p className="text-xs sm:text-sm text-navy/85">
          <strong>Advertising disclosure:</strong> Some links are affiliate links. We may earn a commission at no extra cost to you.{' '}
          <Link href="/advertising-disclosure" className="font-semibold underline">
            Learn how we make money
          </Link>
        </p>
      </div>

      {/* Trust bar */}
      <div className="bg-[#000e54] text-white/80 text-center py-2.5 px-4">
        <p className="text-xs sm:text-sm">
          Reviewed by <strong className="text-white">independent experts</strong> ·
          No paid placements in rankings ·{' '}
          <strong className="text-white">Updated monthly</strong> · Trusted by 80,000+ business buyers
        </p>
      </div>

      {/* Hero */}
      <header
        className="py-16 sm:py-20 px-4 relative overflow-hidden"
        style={{
          backgroundColor: '#FB6D1F',
          backgroundImage: 'linear-gradient(135deg, #FB6D1F 0%, #F97316 45%, #EA580C 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden="true" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5 text-balance">
            Find the <em className="text-accent not-italic">right</em> business software,{' '}
            <br className="hidden sm:block" />without the guesswork
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl mx-auto text-pretty">
            Independent comparisons of CRM, payroll, HR, and marketing software — researched by
            experts, ranked on real criteria, updated for 2026.
          </p>

          {/* Search bar */}
          <form
            action="/search"
            method="get"
            className="max-w-2xl mx-auto mb-7"
            role="search"
            aria-label="Search software categories"
          >
            <div className="group flex items-center gap-2 bg-white rounded-2xl p-2 shadow-lg ring-1 ring-black/10 transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-brand/30 focus-within:shadow-xl">
              <div className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl text-brand transition-transform duration-300 ease-out group-focus-within:scale-105" aria-hidden="true">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </div>
              <input
                type="search"
                name="q"
                placeholder="Search CRM, payroll, HR, email..."
                className="min-w-0 flex-1 bg-transparent px-3 sm:px-1 py-3 text-sm sm:text-base text-gray-800 placeholder:text-gray-400 outline-none transition-colors duration-200"
                aria-label="Search software categories"
                required
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-brand hover:bg-brand-hover text-white px-5 py-3 text-sm font-semibold transition-all duration-200 ease-out active:scale-[0.98]"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick links */}
          <nav aria-label="Popular categories" className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.slice(0, 5).map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="cb-pill bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
              >
                {c.title.replace(' of 2026', '').replace(' for Small Business', '').replace(' for 2026', '')}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Methodology bar */}
      <div className="bg-brand-light border-b border-brand/30 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <span className="bg-brand text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wide">
            How we review
          </span>
          <p className="text-sm text-navy">
            Every comparison is based on hands-on testing, pricing verification, and structured scoring
            across 12+ criteria — never influenced by vendor payments.{' '}
            <Link href="/editorial-process" className="font-semibold underline">
              Read our editorial process →
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-16 sm:space-y-20">

        {/* Categories */}
        <section aria-labelledby="categories-heading">
          <p className="cb-section-kicker">
            Browse by category
          </p>
          <h2 id="categories-heading" className="cb-section-title mb-2 text-balance">
            Compare the best business software for 2026
          </h2>
          <p className="cb-section-desc mb-10 max-w-xl text-pretty">
            From CRM to payroll, our experts test and rank the tools your business actually needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block p-6 rounded-2xl border border-gray-200/80 hover:border-brand/35 bg-white/50 hover:bg-white transition-colors relative overflow-hidden"
                aria-label={`${cat.title} — ${cat.count}`}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" />
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-light to-[#ffe6bf] ring-1 ring-brand/20 shadow-sm flex items-center justify-center text-brand mb-4 group-hover:scale-105 transition-transform" aria-hidden="true">
                  <HomeIcon name={cat.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{cat.count}</span>
                  <span className="text-sm text-brand font-semibold">Compare →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured comparisons */}
        <section aria-labelledby="featured-heading">
          <p className="cb-section-kicker">Editor&apos;s picks</p>
          <h2 id="featured-heading" className="cb-section-title mb-2 text-balance">
            Most-read comparisons this month
          </h2>
          <p className="cb-section-desc mb-8 max-w-xl">
            The comparisons our readers return to most, updated with current pricing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
            <div className="bg-gradient-to-br from-brand-hover to-brand rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/15" aria-hidden="true" />
              <p className="text-xs uppercase tracking-widest text-[#fff3c4] font-semibold mb-3">
                {FEATURED_COMPARISONS.main.label}
              </p>
              <h3 className="font-serif text-3xl leading-tight mb-3 text-balance">
                {FEATURED_COMPARISONS.main.title}
              </h3>
              <p className="text-white/85 mb-6 max-w-2xl">{FEATURED_COMPARISONS.main.desc}</p>
              <Link
                href={FEATURED_COMPARISONS.main.href}
                className="inline-flex items-center bg-[#fff3c4] text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition-colors"
              >
                Read full comparison →
              </Link>
            </div>

            <div className="space-y-4">
              {FEATURED_COMPARISONS.side.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-5 rounded-2xl border border-gray-200/80 bg-white/60 hover:bg-white hover:border-brand/30 transition-colors"
                >
                  <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">{item.tag}</p>
                  <h3 className="text-navy font-semibold mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.meta}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How we review */}
        <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm" aria-labelledby="how-heading">
          <p className="cb-section-kicker">Our methodology</p>
          <h2 id="how-heading" className="cb-section-title mb-2 text-balance">
            How we independently review and rank software
          </h2>
          <p className="cb-section-desc mb-10 max-w-lg text-pretty">
            Our reviews are never pay-to-play. Here&apos;s exactly how we evaluate each platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Hands-on testing',
                body: 'Every platform is tested by a subject-matter expert using a structured protocol. We create real accounts, run real workflows, and score 12+ criteria.',
              },
              {
                num: '02',
                title: 'Verified pricing',
                body: 'We contact vendors directly to confirm pricing and flag hidden fees. All pricing data is dated — we note when prices were last confirmed.',
              },
              {
                num: '03',
                title: 'Independent scoring',
                body: 'Rankings are based on weighted scores across our criteria — vendors cannot pay to improve their ranking. Sponsored placements are always clearly labelled.',
              },
            ].map(({ num, title, body }) => (
              <div key={num}>
                <p className="font-serif text-5xl text-brand leading-none mb-3">{num}</p>
                <h3 className="font-semibold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <Link href="/editorial-process" className="inline-block mt-8 text-sm text-brand font-semibold hover:underline">
            Read our full editorial process →
          </Link>
        </section>

        {/* Expert team */}
        <section aria-labelledby="team-heading">
          <p className="cb-section-kicker">Our editorial team</p>
          <h2 id="team-heading" className="cb-section-title mb-2 text-balance">
            Reviews written by verified software experts
          </h2>
          <p className="cb-section-desc mb-8 max-w-lg text-pretty">
            Our writers combine hands-on industry experience with structured review frameworks.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map(({ initials, name, role, exp }) => (
              <div key={name} className="cb-card p-5 text-center">
                <div
                  className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand text-lg font-semibold mx-auto mb-3"
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <h4 className="font-semibold text-navy text-sm">{name}</h4>
                <p className="text-xs text-brand font-medium mt-0.5">{role}</p>
                <p className="text-xs text-gray-400 mt-1">{exp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest reviews */}
        <section aria-labelledby="reviews-heading">
          <p className="cb-section-kicker">Recently updated</p>
          <h2 id="reviews-heading" className="cb-section-title mb-8 text-balance">
            Latest software reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LATEST_REVIEWS.map((review) => (
              <Link
                key={review.href}
                href={review.href}
                className="block overflow-hidden p-0 rounded-2xl border border-gray-200/80 bg-white/60 hover:bg-white hover:border-brand/30 transition-colors"
              >
                <div className="h-28 bg-gradient-to-br from-brand-light to-[#ffe6bf] flex items-center justify-center text-brand" aria-hidden="true">
                  <span className="w-16 h-16 rounded-2xl bg-white/70 ring-1 ring-brand/20 shadow-sm flex items-center justify-center">
                    <HomeIcon name={review.icon} className="w-8 h-8" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">{review.cat}</p>
                  <h3 className="text-navy font-semibold mb-2 leading-snug">{review.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{review.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>By {review.author}</span>
                    <span>{review.updated}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust stats */}
        <section className="bg-gradient-to-br from-brand-hover to-brand rounded-3xl p-8 sm:p-12 text-center text-white shadow-[0_20px_45px_-30px_rgba(148,73,20,0.65)]" aria-label="Trust statistics">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-3">Trusted by thousands of business buyers</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-10 text-base">
            Our comparison guides help B2B decision-makers cut through vendor marketing and make confident software choices.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { num: '80K+', label: 'Monthly readers' },
              { num: '60+', label: 'Platforms reviewed' },
              { num: '12', label: 'Scoring criteria per platform' },
              { num: '100%', label: 'Independent editorial' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-serif text-5xl text-[#fff3c4] leading-none">{num}</p>
                <p className="text-sm text-white/60 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <p className="cb-section-kicker">Common questions</p>
          <h2 id="faq-heading" className="cb-section-title mb-8 text-balance">
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-gray-200 rounded-xl overflow-hidden bg-white"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="list-none cursor-pointer px-5 py-4 font-medium text-navy flex items-center justify-between gap-3">
                    <span itemProp="name">{q}</span>
                    <span
                      className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div
                    className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{a}</p>
                  </div>
                </details>
              ))}
            </div>
            <aside className="rounded-2xl bg-gradient-to-br from-brand-hover to-brand p-5 sm:p-6 text-white shadow-[0_20px_45px_-30px_rgba(148,73,20,0.7)]">
              <p className="text-xs uppercase tracking-widest text-[#ffe7c0] font-semibold mb-2">Need help choosing?</p>
              <h3 className="text-xl sm:text-2xl font-serif leading-tight mb-2.5 text-balance">
                Compare tools faster with expert-backed picks
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Shortlist the right software quickly with our tested comparisons.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-white/15 border border-white/20 rounded-full px-2.5 py-1">60+ platforms reviewed</span>
                <span className="text-xs bg-white/15 border border-white/20 rounded-full px-2.5 py-1">Updated monthly</span>
              </div>
              <div className="space-y-2.5 mb-5">
                {['Updated pricing snapshots', 'Independent scoring model'].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffe7c0]" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/editorial-process"
                className="inline-flex items-center bg-[#ffe7c0] text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition-colors"
              >
                Read our methodology
              </Link>
            </aside>
          </div>
        </section>

      </div>
    </>
  )
}
