export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "SaveFromNet",
        "alternateName": ["Save From Net", "Save from Net"],
        "url": "https://www.savefromnet.fun",
        "logo": "https://www.savefromnet.fun/apple-icon.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@savefromnet.fun",
          "contactType": "customer support"
        }
      },
      {
        "@type": "WebSite",
        "name": "SaveFromNet",
        "alternateName": "Save From Net",
        "url": "https://www.savefromnet.fun",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.savefromnet.fun/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "YouTube Transcript Generator",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "url": "https://www.savefromnet.fun",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}