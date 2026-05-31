import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  canonical,
}) => {
  const siteName = "Biosoftech Solutions";
  const defaultTitle = "Biosoftech Solutions – Software Development Company";
  const defaultDescription =
    "Biosoftech Solutions is a leading software development company delivering web, mobile, desktop, cloud, and AI automation solutions since 2015.";
  const defaultKeywords =
    "software development company, web development, mobile app development, cloud services, AI automation, Lucknow, India";
  const siteUrl = "https://www.biosoftech.com";
  const defaultOgImage = "/og-image.jpg";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonical || ogUrl || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO;
