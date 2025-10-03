
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-[#0f4c81] via-blue-600 to-blue-400 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-12 h-12" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Christian
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Ingeniero de Sistemas
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-50"
        >
          Portafolio y Blog de Proyectos Tecnológicos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group px-8 py-4 bg-white text-[#0f4c81] rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Ver Proyectos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/blog"
            className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Leer Blog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
