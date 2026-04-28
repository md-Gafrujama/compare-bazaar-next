import type { Metadata } from 'next'
import { getComparisonPageBySlug } from '@/data/comparisons'
import { buildComparisonMetadata, ComparisonRoute } from '@/components/comparison/ComparisonRoute'
import { CallCenterPopup } from '@/components/ui/CallCenterPopup'

const baseData = getComparisonPageBySlug('call-center')
const data = baseData ? { ...baseData, slug: 'call-center' } : undefined
export const metadata: Metadata = buildComparisonMetadata(data)
export default function Page() {
  return (
    <>
      <CallCenterPopup />
      <ComparisonRoute data={data} />
    </>
  )
}
