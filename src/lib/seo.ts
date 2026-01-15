import { Metadata } from 'next';
import { config } from '@/data/config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  modifiedAt?: string;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedAt,
  modifiedAt,
}: SEOProps): Metadata {
  const seoTitle = title ? `${title} | ${config.author}` : config.title;
  const seoDescription = description || config.description.short;
  const seoImage = image || `${config.site}assets/me.JPG`;
  const seoUrl = url || config.site;
  const allKeywords = [...config.keywords, ...keywords];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    authors: [{ name: config.author, url: config.site }],
    creator: config.author,
    publisher: config.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: seoUrl,
    },
    openGraph: {
      type,
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: `${config.author}'s Portfolio`,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: title || `${config.author} - Software Engineer`,
        },
      ],
      locale: 'en_US',
      ...(type === 'article' && publishedAt && {
        publishedTime: publishedAt,
        modifiedTime: modifiedAt || publishedAt,
        authors: [config.author],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: `@${config.social.twitter}`,
    },
    other: {
      'application-name': `${config.author}'s Portfolio`,
      'apple-mobile-web-app-title': `${config.author}`,
      'format-detection': 'telephone=no',
    },
  };
}

export const defaultSEO = generateSEO({});