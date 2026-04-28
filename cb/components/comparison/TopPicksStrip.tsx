import type { Product } from '@/types'
import { TopPickMiniCard } from '@/components/comparison/TopPickMiniCard'

interface TopPicksStripProps {
  products: Product[]
  slug: string
}

type FixedCard = {
  name: string
  subtitle: string
  logoText: string
  price: string
  points: string[]
  url?: string
}

const FIXED_CARDS_BY_SLUG: Record<string, FixedCard[]> = {
  'project-management': [
    {
      name: 'Hub CRM',
      subtitle: 'Best for Client and Pipeline Visibility',
      logoText: 'HubSpot',
      price: '$9 per user/month',
      points: ['Task + deal tracking in one place', 'Email/chat support included'],
      url: 'https://www.hubspot.com/products/crm',
    },
    {
      name: 'Zoho CRM',
      subtitle: 'Best for Process Automation',
      logoText: 'Zoho CRM',
      price: '$14 per user/month',
      points: ['Workflow automation and blueprints', '24/7 customer support'],
      url: 'https://www.zoho.com/crm/',
    },
    {
      name: 'Monday.com',
      subtitle: 'Best for Visual Project Planning',
      logoText: 'monday.com',
      price: '$9 per seat/month',
      points: ['Timeline, Kanban, and workload views', 'Large app integration library'],
      url: 'https://monday.com',
    },
    {
      name: 'ClickUp',
      subtitle: 'Best for All-in-One Work Management',
      logoText: 'ClickUp',
      price: '$10 per user/month',
      points: ['Docs, goals, sprints, and automations', 'Strong free tier for small teams'],
      url: 'https://clickup.com',
    },
    {
      name: 'Asana',
      subtitle: 'Best for Team Collaboration',
      logoText: 'asana',
      price: '$10.99 per user/month',
      points: ['Great task dependencies and timelines', 'Excellent cross-team reporting'],
      url: 'https://asana.com',
    },
  ],
  'call-center': [
    {
      name: 'GoTo',
      subtitle: 'Best for Small Business Management',
      logoText: 'GoTo',
      price: '$19.95 per user/month',
      points: ['Agent dashboard and softphone', '24/7 customer support'],
      url: 'https://www.goto.com/connect',
    },
    {
      name: 'RingCentral',
      subtitle: 'Best for Inbound Customer Services',
      logoText: 'RingCentral',
      price: '$20 per user/month',
      points: ['Google, Microsoft integrations', '24/7 customer support'],
      url: 'https://www.ringcentral.com',
    },
    {
      name: 'Goanswer',
      subtitle: 'Best Outsourced Call Center Service',
      logoText: 'goanswer',
      price: '$175/mo for 100 minutes/user',
      points: ['Scalable, bilingual, partial access', '24/7 bilingual live agents'],
      url: 'https://www.goanswer.com',
    },
    {
      name: 'Twilio',
      subtitle: 'Best for Complex Communication',
      logoText: 'twilio',
      price: '$15 per user/month',
      points: ['MMS support & message tracking', '24/7 customer support'],
      url: 'https://www.twilio.com',
    },
    {
      name: 'Salesforce',
      subtitle: 'Best for Improving Customer Service',
      logoText: 'service cloud',
      price: '$25 per user/month',
      points: ['Video capacity: 250', 'Dynamic Email Marketing and Analytics'],
      url: 'https://www.salesforce.com/products/service-cloud/overview/',
    },
  ],
  'business-phone-systems': [
    {
      name: 'Ooma Office',
      subtitle: 'Best for Ease of Use',
      logoText: 'Ooma',
      price: '$19.95 per user/month',
      points: ['No Contract Necessary', '50+ Standard Features'],
      url: 'https://www.ooma.com/business-phone/',
    },
    {
      name: '800.com',
      subtitle: 'Best for Unified Communications',
      logoText: '800.com',
      price: '$20/user/month paid annually',
      points: ['HD video meetings (100 participants)', '24/7 customer support'],
      url: 'https://www.800.com',
    },
    {
      name: 'Zoom',
      subtitle: 'Video Conferencing',
      logoText: 'zoom',
      price: '$10 monthly per user/month',
      points: ['International Calling Metered', '24/7 customer support'],
      url: 'https://zoom.us/phone',
    },
    {
      name: 'NextivoONE',
      subtitle: 'Best for Support',
      logoText: 'nextiva',
      price: '$30 per user/month',
      points: ['Social media channels', '24/7 customer support'],
      url: 'https://www.nextiva.com',
    },
    {
      name: 'Vonage',
      subtitle: 'Best for Support',
      logoText: 'VONAGE',
      price: '$13.99 per user/month',
      points: ['Unlimited domestic calling', 'Supports desktop and mobile apps'],
      url: 'https://www.vonage.com/business',
    },
  ],
  'employee-management-software': [
    {
      name: 'Teramind',
      subtitle: 'Best for Security Threat Detection',
      logoText: 'TERAMIND',
      price: '$19.95 per user/month',
      points: ['Video capacity: 100', '24/7 customer support'],
      url: 'https://www.teramind.co',
    },
    {
      name: 'ActivTrack',
      subtitle: 'Best for Workforce Analytics',
      logoText: 'ActivTrak',
      price: '$19.95 per user/month',
      points: ['Video capacity: 100', '24/7 customer support'],
      url: 'https://www.activtrak.com',
    },
    {
      name: 'Hubstaff',
      subtitle: 'Best for Remote Teams management',
      logoText: 'Hubstaff',
      price: '$10 per user/month',
      points: ['Video capacity: 1000', '24/7 customer support'],
      url: 'https://hubstaff.com',
    },
    {
      name: 'BambooHR',
      subtitle: 'Best for Performance Management',
      logoText: 'bambooHR',
      price: '$36 per user/month',
      points: ['Video capacity: 250', '24/7 customer support'],
      url: 'https://www.bamboohr.com',
    },
    {
      name: 'Intelogos',
      subtitle: 'Best for Larger Organizations',
      logoText: 'intelogos',
      price: '$36 per user/month',
      points: ['Video capacity: 250', '24/7 customer support'],
      url: 'https://www.intelogos.com',
    },
  ],
  'gps-fleet-management': [
    {
      name: 'Motive',
      subtitle: 'Best for Accountability and Automation',
      logoText: 'Motive',
      price: '$19.95 per user/month',
      points: ['Video capacity: 100', '24/7 customer support'],
      url: 'https://gomotive.com',
    },
    {
      name: 'Teletracnavman',
      subtitle: 'Best for Maintenance and Safety',
      logoText: 'Teletrac Navman',
      price: '$10 per user/month',
      points: ['Video capacity: 1000', '24/7 customer support'],
      url: 'https://www.teletracnavman.com',
    },
    {
      name: 'Verizon Connect',
      subtitle: 'Best for Midsize Fleets Services',
      logoText: 'Verizon Connect',
      price: '$36 per user/month',
      points: ['Video capacity: 250', '24/7 customer support'],
      url: 'https://www.verizonconnect.com',
    },
    {
      name: 'Samsara',
      subtitle: 'Best for Sustainability and Safety',
      logoText: 'samsara',
      price: '$19.95 per user/month',
      points: ['Video capacity: 100', '24/7 customer support'],
      url: 'https://www.samsara.com',
    },
    {
      name: 'Surecam',
      subtitle: 'Best for Video Telematics and Safety',
      logoText: 'SURECAM',
      price: 'Custom pricing available',
      points: ['AI-powered dash cams', '24/7 customer support'],
      url: 'https://surecam.com',
    },
  ],
  'payroll-software': [
    {
      name: 'ADP',
      subtitle: 'Best for Large Enterprises',
      logoText: 'ADP',
      price: '$10/user/month + $50 base',
      points: ['Full-service payroll & tax filing', 'Dedicated specialist'],
      url: 'https://www.adp.com/solutions/small-business/payroll.aspx',
    },
    {
      name: 'Zoho',
      subtitle: 'Best for Small Businesses',
      logoText: 'Zoho Payroll',
      price: '$25/user/month',
      points: ['Automated payroll & compliance', 'Email/chat support'],
      url: 'https://www.zoho.com/payroll/',
    },
    {
      name: 'BambooHr',
      subtitle: 'Best for HR Integration',
      logoText: 'bambooHR',
      price: 'Custom pricing',
      points: ['Payroll + HR platform', '24/7 support'],
      url: 'https://www.bamboohr.com',
    },
    {
      name: 'Onpay',
      subtitle: 'Best for SMBs with contractors',
      logoText: 'onpay',
      price: '$36 + $4/user/month',
      points: ['Unlimited payroll runs', 'Phone/email support'],
      url: 'https://onpay.com',
    },
    {
      name: 'QuickBooks',
      subtitle: 'Best for Accounting Sync',
      logoText: 'quickbooks',
      price: '$45/month + $5/user',
      points: ['Auto tax calculations', '24/7 support'],
      url: 'https://quickbooks.intuit.com/payroll/',
    },
  ],
  'website-building-platform': [
    {
      name: 'Wix',
      subtitle: 'Best Templates',
      logoText: 'WIX',
      price: '$17/month',
      points: ['800+ integrations', '14-day money-back guarantee'],
      url: 'https://www.wix.com',
    },
    {
      name: 'Godaddy',
      subtitle: 'Best for Added Tools',
      logoText: 'GoDaddy',
      price: '$16.99/month',
      points: ['Integrations for WordPress sites', '7-day free trial'],
      url: 'https://www.godaddy.com/websites/website-builder',
    },
    {
      name: 'Mochahost',
      subtitle: 'Best for Businesses on a Budget',
      logoText: 'Mochahost',
      price: '$3.99/month',
      points: ['15+ integrations', 'No free trial'],
      url: 'https://www.mochahost.com',
    },
    {
      name: 'Web.com',
      subtitle: 'Best for Beginners',
      logoText: 'web.com',
      price: '$19.99/month',
      points: ['No app store', 'No free trial'],
      url: 'https://www.web.com',
    },
    {
      name: 'Bluehost',
      subtitle: 'Best for WordPress',
      logoText: 'bluehost',
      price: '$11.99/month',
      points: ['WordPress plug-ins available', '30-day money-back guarantee'],
      url: 'https://www.bluehost.com',
    },
  ],
  'email-marketing': [
    {
      name: 'Campaign Monitor',
      subtitle: 'Best for Deliverability',
      logoText: 'Campaign Monitor',
      price: '$12 per month',
      points: ['Starts at 2,500 monthly emails', '30-day free trial'],
      url: 'https://www.campaignmonitor.com',
    },
    {
      name: 'Campaigner',
      subtitle: 'Best for Larger Businesses',
      logoText: 'Campaigner',
      price: '$59 per month',
      points: ['Starts at 5k contacts and 30k sends', '30-day full-featured free trial'],
      url: 'https://www.campaigner.com',
    },
    {
      name: 'Klaviyo',
      subtitle: 'Best for Data-Driven Marketing',
      logoText: 'klaviyo',
      price: '$20/month',
      points: ['Starts at 5,000 monthly emails', 'Free plan'],
      url: 'https://www.klaviyo.com',
    },
    {
      name: 'GetResponse',
      subtitle: 'Best AI-powered automation',
      logoText: 'GetResponse',
      price: '$15.58 per month',
      points: ['Unlimited email sends', '30-day free trial'],
      url: 'https://www.getresponse.com',
    },
    {
      name: 'HubSpot',
      subtitle: 'Best Bundled Marketing Solution',
      logoText: 'HubSpot',
      price: '$20 per month',
      points: ['5,000 daily emails to contacts', '14-day free trial; free plan'],
      url: 'https://www.hubspot.com/products/marketing/email',
    },
  ],
  'crm-software': [
    {
      name: 'Zoho CRM',
      subtitle: 'Best for Growing Businesses',
      logoText: 'Zoho CRM',
      price: '$14 per user per month',
      points: ['Office 365 integration , Zoho Marketplace', '24/7 customer support'],
      url: 'https://www.zoho.com/crm/',
    },
    {
      name: 'Creatio',
      subtitle: 'Best for Customer Lifecycle Management',
      logoText: 'Creatio',
      price: '$25 per user per month',
      points: ['14-day free trial', '24/7 customer support'],
      url: 'https://www.creatio.com/',
    },
    {
      name: 'Hub CRM',
      subtitle: 'Best for Sales and Marketing Integrations',
      logoText: 'HubSpot',
      price: '$9 per month per user',
      points: ['Includes 1,000 marketing contacts', 'Email chat support included'],
      url: 'https://www.hubspot.com/products/crm',
    },
    {
      name: 'HoneyBook',
      subtitle: 'Best for All-in-One Option',
      logoText: 'HONEYBOOK',
      price: '$29 per user per month',
      points: ['7-day free trial', '24/7 phone and email support'],
      url: 'https://www.honeybook.com',
    },
    {
      name: 'Pipedrive',
      subtitle: 'Best for Automation and Management',
      logoText: 'pipedrive',
      price: '$14 per user per month',
      points: ['Free 14-day trial', '24/7 online chat; premium for phone'],
      url: 'https://www.pipedrive.com/',
    },
  ],
}

export function TopPicksStrip({ products, slug }: TopPicksStripProps) {
  const fixedCards = FIXED_CARDS_BY_SLUG[slug] ?? FIXED_CARDS_BY_SLUG['crm-software']

  return (
    <section className="mt-6" aria-label="Quick top picks">
      <div className="grid grid-cols-5 gap-3">
        {fixedCards.map((card, idx) => (
          <TopPickMiniCard
            key={card.name}
            title={card.name}
            subtitle={card.subtitle}
            logoText={card.logoText}
            price={card.price}
            points={card.points}
            url={card.url ?? products[idx]?.vendorUrl ?? '#'}
          />
        ))}
      </div>
    </section>
  )
}
