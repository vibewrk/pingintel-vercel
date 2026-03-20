import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import HeroSimple from '@/components/HeroSimple'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'From data cleansing and enrichment to automated submissions and rich data visualization. View our products designed to fit into your workflow.',
}

const products = [
  {
    name: 'PING.Maps',
    href: '/products/ping-maps/',
    color: '#c94dff',
    image: 'Group-1321316853-1.png',
    desc: 'Bring Ping.Extraction insurance data to life with powerful mapping and rich visualizations. Understand your geospatial risk, see the effect of ambiguous geocoding, and create market-ready presentations.',
    tag: 'Geospatial Intelligence',
  },
  {
    name: 'PING.Extraction',
    href: '/products/ping-extraction/',
    color: '#4da0ff',
    image: 'Ping-Extraction.jpg',
    desc: 'Extract and enrich critical data from existing documents, including SOVs, ACORDs, Loss Runs, and email bodies. Much more than AI extraction — Ping solves geocoding, enhancing, validating, and weaponizing submission data artifacts.',
    tag: 'Data Extraction',
  },
  {
    name: 'PING.Ready',
    href: '/products/ping-ready/',
    color: '#ffac4d',
    image: 'Firefly_show-me-someone-working-on-their-computer-with-excel-in-their-screen.-make-the-colors-143918.jpg',
    desc: 'A full-service data-extraction solution for the property insurance marketplace. Ping.Ready combines human intelligence with ML processing for an unmatched combination of quality and speed.',
    tag: 'Managed Service',
  },
  {
    name: 'PING.Data',
    href: '/products/ping-data/',
    color: '#c94dff',
    image: 'ping-data@2x.jpg',
    desc: 'Delve into the incredible array of property-relevant data sources across the web. Ping.Data provides fast, easy-to-integrate, consistent, and reliable access to location data — from geocoding to tax records to satellite imagery.',
    tag: 'Data Enrichment',
  },
  {
    name: 'PING.CAT',
    href: '/products/ping-cat/',
    color: '#4da0ff',
    image: 'pexels-pixabay-76969.jpg',
    desc: 'Rapidly model Ping.Extracted submissions via industry-favored CAT tools. Specify flexible policy terms, generate acc/loc CSV import files, or directly trigger cloud-based modeling.',
    tag: 'CAT Modeling',
  },
  {
    name: 'PING.Location',
    href: '/products/ping-location/',
    color: '#ffac4d',
    image: 'ping-location@2x.jpg',
    desc: 'Perform single building lookups into physical aspects of your property portfolio to provide a true picture of location and building risk. Know any property, anywhere, instantly.',
    tag: 'Location Intelligence',
  },
]

const faqs = [
  {
    q: 'How does Ping integrate with existing workflows?',
    a: 'Ping is designed to slot seamlessly into your existing workflows via our API or native integrations. Setup typically takes hours, not months.',
  },
  {
    q: 'What document types can PING.Extraction process?',
    a: 'PING.Extraction handles SOVs (in any format — Excel, PDF, CSV), ACORD forms, Loss Run reports, and unstructured email bodies with property schedules.',
  },
  {
    q: 'How accurate is the data extraction?',
    a: "Ping achieves industry-leading accuracy through a combination of AI models, proprietary training data, and (for PING.Ready) human-in-the-loop validation. Accuracy rates consistently exceed 99% for structured fields.",
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. Ping is SOC 2 Type II compliant. Data is stored in isolated, enterprise-grade Snowflake warehouses.',
  },
  {
    q: 'Can I access my data outside of Ping?',
    a: 'Absolutely. Your data lives in a Snowflake data warehouse that you own and control. You can query it directly or integrate with your existing BI tools.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <HeroSimple
        label="Products"
        heading="Ping Products"
        subheading="From unstructured data to data infrastructure. From data cleansing and enrichment to automated submissions and rich data visualization."
      />

      {/* Products Grid */}
      <section
        style={{
          backgroundColor: '#141414',
          padding: 'clamp(60px,6vw,100px) clamp(20px,4vw,80px)',
        }}
      >
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
            }}
            className="products-2col"
          >
            {products.map((product) => (
              <ProductCard key={product.href} {...product} />
            ))}
          </div>

          <style>{`
            @media (max-width: 768px) {
              .products-2col { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          backgroundColor: '#0f0f0f',
          padding: 'clamp(70px,8vw,120px) clamp(20px,4vw,80px)',
        }}
      >
        <div style={{ maxWidth: '1620px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}
            className="faq-grid"
          >
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: "'MacanPan', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '16px',
                }}
              >
                FAQ
              </div>
              <h2
                style={{
                  fontFamily: "'MacanPan', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 60px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Common questions
              </h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3
                    style={{
                      fontFamily: "'MacanPan', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '12px',
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'MacanPan', sans-serif",
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.65,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
