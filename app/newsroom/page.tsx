import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import HeroSimple from '@/components/HeroSimple'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'The latest news, announcements, and insights from Ping Intel.',
}

const articles = [
  {
    id: 1,
    title: 'Eirion Risk Underwriters selects Ping Intel for Property Underwriting',
    category: 'News',
    date: 'March 12, 2026',
    excerpt: 'Ping Intel announces a new partnership with Eirion Risk Underwriters to power their property underwriting workflow.',
    href: '/newsroom/eirion-risk-underwriters-selects-ping-intel-for-property-underwriting/',
    image: 'image-2889.jpg',
    external: false,
  },
  {
    id: 2,
    title: 'Ping Intel and Property Guardian Partner to Deliver Best-in-Class Wildfire Data to Commercial Insurers',
    category: 'Press Release',
    date: 'November 17, 2025',
    excerpt: 'Ping Intel and Property Guardian announce a strategic partnership to provide unparalleled wildfire risk data to the commercial insurance market.',
    href: '/newsroom/ping-intel-and-property-guardian-partner-to-deliver-best-in-class-wildfire-data-to-commercial-insurers/',
    image: null,
    external: false,
  },
  {
    id: 3,
    title: 'PING.Data: Fast-Tracking SOVs into Your Underwriting Ecosystem',
    category: 'Blog',
    date: 'October 2025',
    excerpt: 'How PING.Data accelerates the journey from raw SOV to actionable underwriting data, cutting days of manual work to minutes.',
    href: '/newsroom/ping-data-fast-tracking-sovs-into-your-underwriting-ecosystem/',
    image: 'ping-data@2x.jpg',
    external: false,
  },
  {
    id: 4,
    title: 'A New Era in Geospatial Intelligence',
    category: 'Blog',
    date: 'July 18, 2025',
    excerpt: 'How advanced geospatial analysis is transforming commercial property risk assessment.',
    href: '/newsroom/a-new-era-in-geospatial-intelligence/',
    image: 'Group-1321316853-1.png',
    external: false,
  },
  {
    id: 5,
    title: 'Ping Unveils New Ping.Maps; A Platform for Advanced Property Exposure Insights',
    category: 'News',
    date: 'June 16, 2025',
    excerpt: 'Ping announces the launch of Ping.Maps, a next-generation geospatial platform for commercial property insurance.',
    href: '/newsroom/ping-unveils-new-ping-maps-a-platform-for-advanced-property-exposure-insights/',
    image: 'Group-1321316853-1.png',
    external: false,
  },
  {
    id: 6,
    title: 'Smarter, Faster Systems: Transforming Underwriting from Submission to Decision',
    category: 'Blog',
    date: 'May 2025',
    excerpt: 'How automation and AI are reshaping the E&S commercial property underwriting workflow.',
    href: '/newsroom/smarter-faster-systems-transforming-underwriting-from-submission-to-decision/',
    image: 'lance-anderson-uevmkfCH98Q-unsplash.jpg',
    external: false,
  },
]

export default function NewsroomPage() {
  return (
    <>
      <HeroSimple
        label="Newsroom"
        heading="News & Insights"
        subheading="The latest developments, announcements, and thought leadership from the Ping Intel team."
      />

      <section style={{ backgroundColor: '#141414', padding: 'clamp(60px,6vw,100px) clamp(20px,4vw,80px)' }}>
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner label="Stay connected" heading="Stay up to date with Ping" text="Get the latest news, product updates, and insights delivered to your inbox." buttonText="Contact Us" />
    </>
  )
}
