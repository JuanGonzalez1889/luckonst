"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Eye, ArrowRight, Filter, ArrowLeft, Home, Play } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  location: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Casa Moderna con Estructura de Madera",
    category: "Residencial",
    image: "/casa-moderna-madera.webp",
    description: "Techo metálico con estructura de madera, combinando modernidad y tradición",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 2,
    title: "Estructura de Techo en Construcción",
    category: "Residencial",
    image: "/estructura-techo-construccion.webp",
    description: "Proceso de construcción de estructura de madera para techo residencial",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 3,
    title: "Casa con Terraza de Madera",
    category: "Residencial",
    image: "/casa-madera-terraza.webp",
    description: "Proyecto integral con estructura de madera vista y terraza",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 4,
    title: "Cochera con Estructura Metálica",
    category: "Residencial",
    image: "/proyecto-cochera-luckonst2.jpeg",
    description: "Cochera moderna con techo metálico y columnas de acero",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 5,
    title: "Cochera Moderna con Techo Metálico",
    category: "Residencial",
    image: "/techo-moderno-1.webp",
    description: "Cochera moderna con techo metálico plano y diseño contemporáneo",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 6,
    title: "Pérgola Metálica Moderna",
    category: "Residencial",
    image: "/techo-moderno-2.webp",
    description: "Pérgola metálica moderna con lamas horizontales para filtrado de luz",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 7,
    title: "Galería con Techo Metálico",
    category: "Residencial",
    image: "/techo-moderno-3.webp",
    description: "Galería con techo metálico y cielorraso de madera natural",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 8,
    title: "Estructura a Dos Aguas",
    category: "Residencial",
    image: "/techo-dos-aguas-1.webp",
    description: "Estructura de techo a dos aguas con vigas de madera vista",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 9,
    title: "Galería Comercial Esterillada",
    category: "Comercial",
    image: "/techo-esterillado-1.webp",
    description: "Galería comercial con techo esterillado de madera para filtrado de luz",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 10,
    title: "Cochera con Techo Esterillado",
    category: "Residencial",
    image: "/techo-esterillado-2.webp",
    description: "Cochera con techo esterillado y estructura de madera resistente",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 11,
    title: "Sistema de Canaletas Residencial",
    category: "Zinguería",
    image: "/zingueria-5.webp",
    description: "Instalación completa de canaletas y bajadas pluviales residenciales",
    location: "Rosario, Argentina",
    year: "2024",
  },
  {
    id: 12,
    title: "Extractores Industriales",
    category: "Industrial",
    image: "/zingueria-4.webp",
    description: "Instalación de extractores de aire y sistemas de ventilación industrial",
    location: "Rosario, Argentina",
    year: "2024",
  },
]

const categories = ["Todos", "Residencial", "Comercial", "Industrial", "Zinguería"]

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "Todos" || project.category === selectedCategory,
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Inicio
              </Link>
              <span>/</span>
              <span className="text-white">Proyectos</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Proyectos Realizados</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descubre algunos de nuestros trabajos más destacados en techos metálicos, estructuras de madera y
              zinguería. Cada proyecto refleja nuestro compromiso con la calidad y la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Video Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Trabajo en Acción</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mira cómo llevamos a cabo nuestros proyectos con profesionalismo, calidad y atención al detalle en cada
                etapa del proceso.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/placeholder.svg?height=400&width=800"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snapsave-app_1107590494552336_hd-8gw6p9Ho0KVWKJhClOr9tAcO02yPIv.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">LUCKONST - Especialistas en Techos</h3>
                  <p className="text-sm text-gray-200">Proceso completo de construcción y montaje</p>
                </div>
              </div>
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Galería de Proyectos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra galería completa de proyectos organizados por categoría. Cada imagen cuenta la historia de
              un trabajo bien hecho.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalles
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white">{project.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && filteredProjects.length > 9 && (
            <div className="text-center mb-12">
              <Button onClick={() => setShowAll(true)} size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Button>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nos encantaría ser parte de tu próximo proyecto. Contáctanos para una consulta gratuita y descubre cómo
              podemos hacer realidad tus ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
    href="https://wa.me/+5493417052233"
    target="_blank"
    rel="noopener noreferrer"
    style={{ zIndex: "1000" }}
  >
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Solicitar Presupuesto Gratuito
              </Button>
              </a>
              <Link href="/#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Contactar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
