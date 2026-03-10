
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    noindex?: boolean;
    structuredData?: Record<string, any> | Record<string, any>[];
}

const SITE_URL = "https://autoskola.red";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg.jpg`;

function toAbsoluteUrl(url: string) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    if (url.startsWith("/")) {
        return `${SITE_URL}${url}`;
    }
    return `${SITE_URL}/${url}`;
}

export function SEO({ title, description, canonical, image, noindex = false, structuredData }: SEOProps) {
    const canonicalUrl = canonical
        ? toAbsoluteUrl(canonical)
        : `${SITE_URL}${window.location.pathname}`;
    const imageUrl = image ? toAbsoluteUrl(image) : DEFAULT_OG_IMAGE;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" hrefLang="cs-CZ" href={canonicalUrl} />
            <meta property="og:locale" content="cs_CZ" />
            <meta property="og:site_name" content="Autoškola RED" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Structured Data (JSON-LD) */}
            {structuredData &&
                (Array.isArray(structuredData) ? structuredData : [structuredData]).map((schema, index) => (
                    <script key={index} type="application/ld+json">
                        {JSON.stringify(schema)}
                    </script>
                ))}
        </Helmet>
    );
}
