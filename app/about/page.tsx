
import Image from 'next/image'
import { Linkedin, Github, Heart, Dumbbell, Brain } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f8fa]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-12 text-center">
          Acerca de Mí
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-[#0f4c81] to-blue-300 flex-shrink-0 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Christian - Ingeniero de Sistemas"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c81] mb-4">
                Christian
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Soy Christian, <strong>ingeniero de sistemas</strong> apasionado por la tecnología y la innovación. 
                Me especializo en automatización, redes SD-WAN, y desarrollo de soluciones tecnológicas que 
                simplifican procesos complejos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Me gusta <strong>aprender siempre</strong>, explorar nuevas tecnologías y mantenerme actualizado 
                en el mundo de TI. Fuera del trabajo, disfruto de la meditación y el deporte, actividades que 
                me ayudan a mantener el equilibrio y la claridad mental.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En este portafolio comparto mis proyectos y artículos sobre TI, automatización e innovación. 
                Mi objetivo es documentar mi aprendizaje y ayudar a otros profesionales en su camino tecnológico.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-[#0f4c81] mb-6">Mis Intereses</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-[#0f4c81] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Aprendizaje Continuo</h4>
                  <p className="text-gray-600 text-sm">Siempre explorando nuevas tecnologías</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-[#0f4c81] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Meditación</h4>
                  <p className="text-gray-600 text-sm">Práctica diaria para claridad mental</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Dumbbell className="w-6 h-6 text-[#0f4c81] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Deporte</h4>
                  <p className="text-gray-600 text-sm">Manteniendo cuerpo y mente activos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-[#0f4c81] mb-6">Conecta Conmigo</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0f4c81] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                title="Conéctate en LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
                title="Visita GitHub"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
