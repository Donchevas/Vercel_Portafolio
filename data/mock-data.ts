
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'dashboard-sdwan',
    title: 'Dashboard SD-WAN',
    description: 'Panel de monitoreo en tiempo real para redes SD-WAN. Visualización de métricas de rendimiento, latencia, pérdida de paquetes y disponibilidad de enlaces. Incluye alertas automáticas y reportes personalizables.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['SD-WAN', 'Monitoreo', 'Dashboard', 'Redes'],
    link: '#',
  },
  {
    id: 'automatizacion-n8n',
    title: 'Automatización con n8n',
    description: 'Sistema de automatización de flujos de trabajo que integra Gmail, Google Sheets y múltiples APIs. Procesa correos electrónicos automáticamente, extrae información relevante y actualiza hojas de cálculo sin intervención manual.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop',
    tags: ['n8n', 'Automatización', 'APIs', 'Integración'],
    link: '#',
  },
]
