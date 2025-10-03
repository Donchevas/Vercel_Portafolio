
import PostCard from '@/components/post-card'
import { getAllPosts } from '@/lib/posts'
import { BookOpen } from 'lucide-react'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-[#0f4c81]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artículos sobre tecnología, automatización y lecciones aprendidas 
            en proyectos reales de ingeniería de sistemas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <PostCard key={post?.slug ?? index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
