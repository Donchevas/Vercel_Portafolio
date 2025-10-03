
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts?.map((post) => ({
    slug: post?.slug ?? '',
  })) ?? []
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params?.slug ?? '')
  
  if (!post) {
    return {
      title: 'Post no encontrado - Specialistati',
    }
  }

  return {
    title: `${post?.title ?? 'Post'} - Specialistati`,
    description: post?.excerpt ?? '',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params?.slug ?? '')

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f8fa]">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[#0f4c81] hover:gap-3 transition-all duration-300 mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al blog
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c81] mb-6">
            {post?.title ?? 'Sin título'}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post?.date ?? 'Fecha no disponible'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Lectura de {post?.readingTime ?? '5'} min</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-[#0f4c81] prose-a:text-[#0f4c81] prose-strong:text-[#0f4c81]">
            {post?.content}
          </div>
        </div>
      </article>
    </div>
  )
}
