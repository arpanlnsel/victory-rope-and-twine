const Seo = (page) => {
  const { meta_title, meta_description, featured_image } = page?.data;

  return {
    title: meta_title,
    description: meta_description,
    metadataBase: new URL(`https://${process.env.PRISMIC_ID}`),
    alternates: {
      canonical: `https://${process.env.PRISMIC_ID}.${process.env.TLD}${page.url}`,
      languages: {
        "en-US": "/en-US",
      },
    },

    openGraph: {
      title: meta_title,
      description: meta_description,
      url: page.url,
      siteName: process.env.PRISMIC_ID,
      images: [
        {
          url: featured_image?.url,
          width: 1200,
          height: 600,
          alt: featured_image?.alt || meta_title,
        },
        {
          url: featured_image?.large?.url,
          width: 1024,
          height: 524,
          alt: featured_image?.alt || meta_title,
        },
        {
          url: featured_image?.medium?.url,
          width: 300,
          height: 150,
          alt: featured_image?.alt || meta_title,
        },
        {
          url: featured_image?.thumbnail?.url,
          width: 150,
          height: 150,
          alt: featured_image?.alt || meta_title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

export default Seo;
