import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  canonical,
  ogTitle,
  ogDescription,
}) => {
  const siteName = "Biosoftech";
  const defaultTitle = "Biosoftech – Full-Service Software Development Company for Digital Growth";
  const defaultDescription =
    "Biosoftech is a full-service software development company for digital growth with 2+ years of excellence. We provide custom software, mobile applications, AI solutions, and digital tools for real estate and hospitality.";
  const defaultKeywords =
    "Biosoftech, Software Development Company, Digital Growth, Custom Software, Mobile Applications, AI Solutions";
  const siteUrl = "https://www.biosoftech.com";
  const defaultOgImage = "/og-image.jpg";

  const finalOgTitle = ogTitle || (title ? `${title} | ${siteName}` : defaultTitle);
  const finalOgDescription = ogDescription || description || defaultDescription;

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonical || ogUrl || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO;
