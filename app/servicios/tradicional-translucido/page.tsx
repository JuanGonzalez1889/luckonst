"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, MessageCircle, Star, CheckCircle, Clock, Shield, Wrench } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TradicionalTranslucidoPage() {
  const images = [
    {
      src: "/images/tradicional-translucido/portada.jpg",
      alt: "Pergolado tradicional traslúcido - Vista principal",
    },
    {
      src: "/images/tradicional-translucido/imagen-2.jpg",
      alt: "Pergolado tradicional traslúcido - Vista exterior con quincho",
    },
    {
      src: "/images/tradicional-translucido/imagen-3.jpg",
      alt: "Pergolado tradicional traslúcido - Vista interior con mesa",
    },
    {
      src: "/images/tradicional-translucido/imagen-4.jpg",
      alt: "Pergolado tradicional traslúcido - Vista lateral completa",
    },
    {
      src: "/images/tradicional-translucido/imagen-5.jpg",
      alt: "Pergolado tradicional traslúcido - Detalle de estructura",
    },
    {
      src: "/images/tradicional-translucido/imagen-6.jpg",
      alt: "Pergolado tradicional traslúcido - Vista angular",
    },
  ]

  const specifications = [
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Estructura Mixta",
      description: "Combinación de madera natural y marcos metálicos para mayor durabilidad",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Lamas Espaciadas",
      description: "Tablones de madera con separación controlada para filtrado de luz",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Protección UV",
      description: "Tratamiento especial de la madera contra rayos ultravioleta",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Instalación Rápida",
      description: "Montaje eficiente con mínima interrupción de actividades",
    },
  ]

  const features = [
    "Madera tratada de primera calidad",
    "Marcos metálicos galvanizados",
    "Separación uniforme entre lamas",
    "Fijaciones de acero inoxidable",
    "Acabado natural protegido",
    "Diseño personalizable",
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            {/* Botón Volver a Servicios justo antes del título */}
            <div className="mb-8 text-left mt-16">
              <Link href="/#servicios">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Servicios
                </Button>
              </Link>
            </div>
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Tradicional Traslúcido</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Pergolados con lamas de madera espaciadas que permiten el paso controlado de luz natural, combinando la
                calidez de la tradición con la funcionalidad moderna.
              </p>
            </div>
            {/* Image Gallery */}
            <div className="max-w-6xl mx-auto">
              <ImageCarousel images={images} 
              />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Características Técnicas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Especificaciones detalladas de nuestros pergolados tradicionales traslúcidos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specifications.map((spec, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{spec.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{spec.title}</h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  ¿Por qué elegir nuestros pergolados tradicionales traslúcidos?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestros pergolados combinan la belleza natural de la madera con un diseño inteligente que permite el
                  control perfecto de la luz solar, creando espacios únicos y confortables.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-primary mb-6">Solicita tu Presupuesto</h3>
                  <p className="text-gray-600 mb-6">
                    Obtén una cotización personalizada para tu proyecto de pergolado tradicional traslúcido.
                  </p>

                  <div className="space-y-4">
                    <Link
                      href="https://wa.me/5493417052233?text=Hola! Me interesa obtener información sobre Tradicional Traslúcido. ¿Podrían enviarme un presupuesto?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Consultar por WhatsApp
                      </Button>
                    </Link>

                    <Link href="tel:+5493417052233">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Llamar Ahora
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">+7 años de experiencia en pergolados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Proceso de Instalación</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Seguimos un proceso estructurado para garantizar la calidad y durabilidad de tu pergolado
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consulta y Medición",
                  description: "Visitamos tu propiedad para evaluar el espacio y tomar medidas precisas",
                },
                {
                  step: "02",
                  title: "Diseño Personalizado",
                  description: "Creamos un diseño adaptado a tus necesidades y estilo arquitectónico",
                },
                
                {
                  step: "03",
                  title: "Instalación",
                  description: "Montamos tu pergolado con precisión y acabados profesionales de manera rápida",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}