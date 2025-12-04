"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, MessageCircle, Repeat, Share, MoreHorizontal } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { FadeIn } from "@/components/ui/fade-in";
import { Footer } from "@/components/layout/footer";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#fffaf2]">
            {/* Navigation */}
            <div className="w-full max-w-3xl mx-auto px-4 pt-8">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium mb-12">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>
            </div>

            {/* Header */}
            <article className="w-full max-w-3xl mx-auto px-4 pb-20">
                <FadeIn>
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1d1d1f] mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-500 font-serif leading-relaxed mb-8">
                            {post.subtitle}
                        </h2>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                {/* Placeholder for author image if not available, or use post.authorImage */}
                                <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm tracking-wide uppercase">{post.author}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">{post.date}</span>
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div className="border-y border-gray-200 py-3 flex items-center justify-between mb-12">
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-serif prose-p:font-sans prose-p:text-gray-800 prose-li:text-gray-800 max-w-none">
                        {post.content}
                    </div>
                </FadeIn>
            </article>

            <Footer />
        </main>
    );
}
