import type { Metadata } from 'next'
import { getComparisonPageBySlug } from '@/data/comparisons'
import { buildComparisonMetadata, ComparisonRoute } from '@/components/comparison/ComparisonRoute'
import { GPSFleetPopup } from '@/components/ui/GPSFleetPopup'

const baseData = getComparisonPageBySlug('gps-fleet-management')
const data = baseData ? { ...baseData, slug: 'gps-fleet-management' } : undefined
export const metadata: Metadata = buildComparisonMetadata(data)
export default function Page() {
  return (
    <>
      <GPSFleetPopup />
      <ComparisonRoute data={data} />
    </>
  )
}
