
'use client'

import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  readingTime?: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${post?.slug ?? ''}`}>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 h-full group">
          <h3 className="text-xl font-bold text-[#0f4c81] mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
            {post?.title ?? 'Sin título'}
          </h3>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post?.date ?? 'Sin fecha'}</span>
            </div>
            {post?.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 line-clamp-3">
            {post?.excerpt ?? 'Sin descripción'}
          </p>
          
          <div className="mt-4 text-[#0f4c81] font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-300">
            Leer artículo →
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
