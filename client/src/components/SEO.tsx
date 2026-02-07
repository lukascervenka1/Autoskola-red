
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical || window.location.href} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical || window.location.href} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
}
