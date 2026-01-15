import Script from 'next/script';
import { config } from '@/data/config';

interface StructuredDataProps {
  type: 'WebSite' | 'Person' | 'Portfolio' | 'Article';
  data?: any;
}

export function StructuredData({ type, data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'WebSite':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: config.title,
          url: config.site,
          description: config.description.short,
          author: {
            '@type': 'Person',
            name: config.author,
            url: config.site,
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: `${config.site}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        };

      case 'Person':
        return {
          ...baseData,
          '@type': 'Person',
          name: config.author,
          url: config.site,
          jobTitle: 'Software Engineer',
          worksFor: {
            '@type': 'Organization',
            name: 'ENSIAS',
          },
          alumniOf: {
            '@type': 'Organization',
            name: 'ENSIAS - National School of Computer Science and Systems Analysis',
          },
          sameAs: [
            config.social.linkedin,
            config.social.github,
            config.social.twitter,
            config.social.instagram,
          ],
          knowsAbout: [
            'Software Engineering',
            'Web Development',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            '3D Web Development',
            'Creative Technology',
          ],
        };

      case 'Portfolio':
        return {
          ...baseData,
          '@type': 'CreativeWork',
          name: `${config.author}'s Portfolio`,
          description: config.description.long,
          url: config.site,
          author: {
            '@type': 'Person',
            name: config.author,
            url: config.site,
          },
          dateCreated: '2024',
          inLanguage: 'en',
        };

      case 'Article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: data.title || config.title,
          description: data.description || config.description.short,
          author: {
            '@type': 'Person',
            name: config.author,
            url: config.site,
          },
          datePublished: data.publishedAt,
          dateModified: data.modifiedAt || data.publishedAt,
          url: data.url,
          image: data.image,
          publisher: {
            '@type': 'Person',
            name: config.author,
            url: config.site,
          },
        };

      default:
        return baseData;
    }
  };

  const structuredData = { ...getStructuredData(), ...data };

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}