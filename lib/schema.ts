import { areas } from "@/lib/areas";
import { loftTypes } from "@/lib/estimator";
import { site } from "@/lib/site";

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    alternateName: site.tradeName,
    url: site.url,
    image: `${site.url}${site.logo}`,
    telephone: `+44-20-8871-3323`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postcode,
      addressCountry: "GB",
    },
    areaServed: areas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area.name,
    })),
    sameAs: [site.houzz, site.instagram, site.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.houzzRating,
      reviewCount: site.houzzReviews,
      bestRating: 5,
    },
    award: site.houzzYears.map((year) => `Best of Houzz ${year}`),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design and build services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft conversions", serviceType: "Loft conversion" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House extensions", serviceType: "House extension" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchens", serviceType: "Kitchen design and build" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathrooms", serviceType: "Bathroom design and build" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interiors and refurbishments", serviceType: "Interior refurbishment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Staircases and joinery", serviceType: "Joinery" } },
        ...loftTypes.map((type) => ({
          "@type": "Offer",
          name: `${type.name} guide price`,
          description: `Guide only. ${type.time}. A survey is required for a fixed quote.`,
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: type.min,
            maxPrice: type.max,
            priceCurrency: "GBP",
          },
        })),
      ],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: { name: string; path: string; description: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: "+44-20-8871-3323" },
    areaServed: areas.map((area) => ({ "@type": "AdministrativeArea", name: area.name })),
  };
}
