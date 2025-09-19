"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ModernoTranslucidoPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/moderno-translucido/portada.jpg",
      alt: "Pergolado moderno traslúcido - Vista exterior",
      title: "Vista Exterior Principal",
      description: "Pergolado con lamas de madera y estructura metálica negra al atardecer",
    },
    {
      src: "/images/moderno-translucido/imagen-2.jpg",
      alt: "Pergolado moderno traslúcido - Vista interior",
      title: "Vista Interior",
      description: "Efecto de luz y sombra creado por las lamas de madera",
    },
    {
      src: "/images/moderno-translucido/imagen-3.jpg",
      alt: "Pergolado moderno traslúcido - Pasillo cubierto",
      title: "Pasillo Cubierto",
      description: "Diseño de pasillo con piso de piedras y luz filtrada",
    },
    {
      src: "/images/moderno-translucido/imagen-4.jpg",
      alt: "Pergolado moderno traslúcido - Estructura de madera",
      title: "Detalle de Estructura",
      description: "Pergolado con lamas de madera natural y estructura metálica",
    },
    {
      src: "/images/moderno-translucido/imagen-5.jpg",
      alt: "Pergolado moderno traslúcido - Vista lateral",
      title: "Vista Lateral",
      description: "Estructura moderna con lamas de madera y vegetación circundante",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Botón Volver a Servicios */}
          <div className="mb-8 mt-16">
            <Link href="/#servicios">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Servicios
              </Button>
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                  <Image
                    src={images[currentImageIndex].src || "/placeholder.svg"}
                    alt={images[currentImageIndex].alt}
                    width={800}
                    height={600}
                    className="w-full h-[400px] lg:h-[500px] object-cover object-top"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Image Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-primary">{images[currentImageIndex].title}</h3>
                  <p className="text-gray-600 mt-1">{images[currentImageIndex].description}</p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative overflow-hidden rounded-lg transition-all ${
                      index === currentImageIndex ? "ring-2 ring-primary ring-offset-2" : "hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={120}
                      height={80}
                      className="w-full h-16 object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Pergolados Modernos Traslúcidos</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestros pergolados modernos traslúcidos combinan la elegancia de la madera natural con la funcionalidad
                  de estructuras metálicas de alta resistencia. Las lamas de madera permiten el paso controlado de la luz,
                  creando ambientes únicos con juegos de luz y sombra que cambian a lo largo del día.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ideales para patios, terrazas, pasillos y espacios exteriores que requieren protección parcial del sol
                  manteniendo la ventilación natural y la conexión con el exterior.
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Características Principales</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Lamas de Madera Natural</h4>
                      <p className="text-sm text-gray-600">Madera tratada resistente a la intemperie</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Estructura Metálica</h4>
                      <p className="text-sm text-gray-600">Perfiles de acero galvanizado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Luz Filtrada</h4>
                      <p className="text-sm text-gray-600">Control natural de la luminosidad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Ventilación Natural</h4>
                      <p className="text-sm text-gray-600">Circulación de aire constante</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Diseño Personalizable</h4>
                      <p className="text-sm text-gray-600">Adaptable a cualquier espacio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Bajo Mantenimiento</h4>
                      <p className="text-sm text-gray-600">Materiales de larga duración</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Especificaciones Técnicas</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Estructura:</span>
                      <span className="text-gray-600 ml-2">Perfiles de acero galvanizado</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Lamas:</span>
                      <span className="text-gray-600 ml-2">Madera tratada 2x4"</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Separación:</span>
                      <span className="text-gray-600 ml-2">Variable según diseño</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Acabado:</span>
                      <span className="text-gray-600 ml-2">Pintura antióxido y barniz UV</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Garantía:</span>
                      <span className="text-gray-600 ml-2">5 años estructura, 2 años madera</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Instalación:</span>
                      <span className="text-gray-600 ml-2">Profesional incluida</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/5493417052233?text=Hola,%20me%20interesa%20un%20presupuesto%20para%20Pergolado%20Moderno%20Traslúcido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar por WhatsApp
                  </Button>
                </Link>
                <Link href="tel:+5493417052233" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                </Link>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-2">💡 ¿Sabías que...?</h4>
                <p className="text-sm text-gray-700">
                  Los pergolados traslúcidos no solo proporcionan sombra parcial, sino que también crean microclimas que
                  pueden reducir la temperatura ambiente hasta 5°C, mejorando el confort en espacios exteriores durante
                  todo el año.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

