import { Helmet } from "react-helmet-async";

const SITE_NAME =
  "Cabdirahman Warsame Cilmi Mosque & Orphan Centre";

const SITE_URL = "https://www.cwcmosque.org";

const DEFAULT_IMAGE = `${SITE_URL}/cwc-social-share.jpg`;

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} | CWC Mosque` : SITE_NAME;

  return (
    <Helmet>
      {/* Primary metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Indexing */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="Cabdirahman Warsame Cilmi Mosque and Orphan Centre"
      />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="Cabdirahman Warsame Cilmi Mosque and Orphan Centre"
      />
    </Helmet>
  );
}