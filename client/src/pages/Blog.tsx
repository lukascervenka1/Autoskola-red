import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog-data";

import { SEO } from "@/components/SEO";

export default function Blog() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Magazín Autoškola RED",
        "url": "https://autoskola.red/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Autoškola RED",
            "url": "https://autoskola.red"
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO
                title="Blog Autoškola Praha 6 | Rady pro řidiče z Dejvic"
                description="Magazín Autoškoly RED. Tipy k řízení v Praze 6, novinky v předpisech a rady pro studenty z Dejvic, jak zvládnout řidičák v klidu."
                canonical="https://autoskola.red/blog"
                image="/images/skoda-kodiaq-dejvice.webp"
                structuredData={structuredData}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Blog Autoškoly Praha 6 Dejvice</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Aktuality ze světa autoškol, změny v zákonech a tipy pro bezpečnější jízdu v Praze i mimo ni.
                    </p>
                </div>
            </section>

            {/* Blog List Section */}
            <section className="py-20 flex-grow">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...blogPosts].sort((a, b) => b.dateIso.localeCompare(a.dateIso)).map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`}>
                                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden cursor-pointer flex flex-col">
                                    {/* Image Container */}
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary hover:bg-primary text-white border-0">
                                                {post.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </div>
                                            <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Číst více <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
