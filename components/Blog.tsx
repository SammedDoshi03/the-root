import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { ExternalLink, Calendar, Tag, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';
import { MANUAL_BLOG_POSTS } from '../constants';

const TECH_KEYWORDS = [
  'technology', 'tech', 'programming', 'coding', 'software', 'development',
  'developer', 'react', 'javascript', 'typescript', 'mobile', 'android', 'ios',
  'web', 'app', 'engineering', 'ai', 'artificial intelligence', 'machine learning',
  'firebase', 'git', 'api', 'backend', 'frontend', 'data', 'cloud', 'security'
];

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Using rss2json to convert Medium's RSS feed to JSON
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sammeddoshi')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          // Filter for tech related posts and enhance thumbnail extraction
          const techPosts = data.items.map((post: any) => {
            // Attempt to extract image from description if thumbnail is missing
            let thumbnail = post.thumbnail;
            if (!thumbnail && post.description) {
              const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) {
                thumbnail = imgMatch[1];
              }
            }
            return { ...post, thumbnail };
          }).filter((post: BlogPost) => {
            // Check if any category/tag matches our tech keywords
            const hasTechTag = post.categories.some(cat =>
              TECH_KEYWORDS.some(keyword => cat.toLowerCase().includes(keyword))
            );
            // Also check title as a fallback
            const hasTechTitle = TECH_KEYWORDS.some(keyword =>
              post.title.toLowerCase().includes(keyword)
            );

            return hasTechTag || hasTechTitle;
          });

          // Merge manual posts with fetched posts
          const allPosts = [...MANUAL_BLOG_POSTS, ...techPosts];

          // Sort by date descending
          allPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

          setPosts(allPosts.slice(0, 4));
        } else {
          // If API fails, at least show manual posts
          setPosts(MANUAL_BLOG_POSTS as BlogPost[]);
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback to manual posts on error
        setPosts(MANUAL_BLOG_POSTS as BlogPost[]);
        setLoading(false);
      });

  }, []);

  // Helper to strip HTML tags for preview text
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  if (loading) {
    return (
      <Section id="blog" title="Recent Writing" subtitle="Thoughts on technology and development" className="min-h-[400px]">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      </Section>
    );
  }

  // If no posts (fetched or manual), hide section
  if (posts.length === 0) {
    return null;
  }


  return (
    <Section id="blog" title="Recent Writing" subtitle="Thoughts, tutorials, and insights on technology" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            key={post.guid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full"
          >
            {/* Thumbnail Image */}
            <div className="relative h-56 overflow-hidden bg-slate-200">
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                  <BookOpen size={48} />
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                <ExternalLink size={12} /> Medium
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center text-xs text-slate-500 mb-3 gap-2">
                <Calendar size={14} />
                {new Date(post.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                {stripHtml(post.description).substring(0, 150)}...
              </p>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {post.categories.slice(0, 3).map((tag, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-primary-50 text-primary-700 border border-primary-100 uppercase tracking-wide">
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://sammeddoshi.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
        >
          Read more on Medium
          <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Section>
  );
};