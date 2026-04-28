import type { ComparisonPageData } from '@/types'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { AuthorBar } from '@/components/ui/AuthorBar'
import { ProductCard } from '@/components/comparison/ProductCard'
import { TopPicksStrip } from '@/components/comparison/TopPicksStrip'
import { ComparisonTable } from '@/components/comparison/ComparisonTable'
import { FaqAccordion } from '@/components/comparison/FaqAccordion'
import { ComparisonSidebar } from '@/components/comparison/ComparisonSidebar'
import { WinnerBanner } from '@/components/comparison/WinnerBanner'

interface ComparisonPageProps {
  data: ComparisonPageData
}

export function ComparisonPageTemplate({ data }: ComparisonPageProps) {
  return (
    <>
      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb items={data.breadcrumbs} className="mb-4" />

          {/* H1 — exact target keyword */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight tracking-tight mb-4">
            {data.h1}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {data.intro}
          </p>

          {/* Author bar — E-E-A-T */}
          <AuthorBar
            author={data.author}
            reviewer={data.reviewer}
            lastReviewed={data.lastReviewed}
          />
          <TopPicksStrip products={data.products} slug={data.slug} />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">

          {/* Main content */}
          <div>
            {/* Winner banner */}
            <WinnerBanner summary={data.winnerSummary} />

            {/* Products */}
            <section aria-labelledby="picks-heading">
              <h2
                id="picks"
                className="text-2xl sm:text-3xl text-navy tracking-tight mb-1"
              >
                Our top picks for 2026
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Ranked by expert score across 12 criteria. All pricing verified{' '}
                {data.lastReviewed}.
              </p>

              <div className="space-y-6">
                {data.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Comparison table */}
            <section className="mt-12" aria-labelledby="compare-heading">
              <h2
                id="compare"
                className="text-2xl sm:text-3xl text-navy tracking-tight mb-1"
              >
                Full comparison table
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                All platforms side by side. Pricing verified {data.lastReviewed}.
              </p>
              <ComparisonTable
                data={data.table}
                caption={`${data.h1} — pricing and feature comparison, ${data.lastReviewed}`}
              />
            </section>

            {/* FAQ */}
            <section className="mt-12" aria-labelledby="faqs-heading">
              <h2
                id="faqs"
                className="text-2xl sm:text-3xl text-navy tracking-tight mb-1"
              >
                Frequently asked questions
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Answered by {data.author.name}, {data.author.credential.split('·')[0].trim()}.
              </p>
              <FaqAccordion items={data.faqs} />
            </section>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:sticky lg:top-24">
            <ComparisonSidebar
              tocItems={data.tocItems}
              ctaTitle={data.ctaTitle}
              ctaBody={data.ctaBody}
              ctaSlug={data.ctaSlug}
            />
          </div>

        </div>
      </div>
    </>
  )
}
