'use client';
import React from 'react';

const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SS West Coast Cleaning Services',
    image: 'https://sswestcoast.com.au/logo.jpeg',
    '@id': 'https://sswestcoast.com.au',
    url: 'https://sswestcoast.com.au',
    telephone: ['+61411236714', '+61423090602'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '48A Kyle Avenue',
      addressLocality: 'Bentley',
      addressRegion: 'WA',
      postalCode: '6102',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -32.0042,
      longitude: 115.9172,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/sswestcoast',
      'https://twitter.com/sswestcoast',
      'https://www.linkedin.com/company/sswestcoast',
      'https://www.instagram.com/sswestcoast',
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Bentley',
      },
      {
        '@type': 'City',
        name: 'Perth',
      },
      {
        '@type': 'State',
        name: 'Western Australia',
      },
    ],
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cleaning Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SS West Coast Cleaning Services',
    },
    areaServed: {
      '@type': 'State',
      name: 'Western Australia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Cleaning',
            description: 'Professional residential cleaning services for homes in Perth and Bentley area',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office Cleaning',
            description: 'Commercial office cleaning services in Perth, Western Australia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpet Cleaning',
            description: 'Professional carpet cleaning services using advanced equipment',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Cleaning',
            description: 'Crystal clear window cleaning for residential and commercial properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Furniture Cleaning',
            description: 'Professional upholstery and furniture cleaning services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deep Cleaning',
            description: 'Thorough deep cleaning services for homes and offices',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sswestcoast.com.au',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://sswestcoast.com.au#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://sswestcoast.com.au#contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;