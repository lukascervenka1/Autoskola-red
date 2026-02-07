import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blog-data";
import { useEffect } from "react";

import { SEO } from "@/components/SEO";

export default function BlogPost() {
    const [, params] = useRoute("/blog/:slug");
    const slug = params?.slug;

    const post = blogPosts.find((p) => p.slug === slug);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center container">
                    <h1 className="text-3xl font-bold mb-4">Článek nenalezen</h1>
                    <Link href="/blog">
                        <Button>Zpět na blog</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO
                title={`${post.title} | Magazín Autoškola RED`}
                description={post.excerpt}
                canonical={`https://autoskola.red/blog/${post.slug}`}
            />
            <Navbar />

            {/* Hero Header with Image Background */}
            <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12 w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="container relative z-10">
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground pl-0 hover:bg-transparent">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zpět na přehled
                        </Button>
                    </Link>

                    <Badge className="bg-primary text-white border-0 mb-4 text-md py-1.5 px-4 font-bold">
                        {post.category}
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-4xl text-foreground">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {post.readTime}
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 md:py-20 flex-grow">
                <div className="container max-w-4xl">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t flex justify-between items-center">
                        <div className="font-bold text-lg">
                            Líbil se vám článek?
                        </div>
                        <Button variant="outline" className="gap-2">
                            <Share2 className="w-4 h-4" /> Sdílet
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
