"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  Home,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react"

const images = [
  {
    src: "/images/techos-modernos/portada.jpg",
    alt: "Techo moderno con estructura metálica negra y cielorraso beige",
    title: "Techo Moderno Principal",
  },
  {
    src: "/images/techos-modernos/imagen-2.jpg",
    alt: "Vista interior de techo moderno con columnas metálicas",
    title: "Vista Interior",
  },
  {
    src: "/images/techos-modernos/imagen-3.jpg",
    alt: "Detalle de cielorraso de madera con estructura metálica",
    title: "Detalle Cielorraso",
  },
  {
    src: "/images/techos-modernos/imagen-4.jpg",
    alt: "Cochera moderna con estructura metálica y piso de adoquines",
    title: "Cochera Moderna",
  },
  {
    src: "/images/techos-modernos/imagen-5.jpg",
    alt: "Estructura de techo moderno con columnas negras y cielorraso beige",
    title: "Vista Exterior",
  },
]

export default function TechosModernosPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="mb-8 mt-16">
          <Link href="/#servicios">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Servicios
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-blue-200 mb-6">
              <Home className="w-4 h-4 mr-1"></Home>
              <span className="text-white">LUCKONST</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Techos Modernos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Diseños contemporáneos con tecnología de vanguardia. Techos metálicos que combinan estética moderna con
              funcionalidad superior y durabilidad excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Galería de Proyectos</h2>

            {/* Main Image */}
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  width={800}
                  height={500}
                  className="w-full h-96 lg:h-[900px] object-cover object-[center_top]"
                />

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">{images[selectedImage].title}</h3>
                  <p className="text-gray-200 text-sm">{images[selectedImage].alt}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-4 ring-secondary scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-24 lg:h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Características Principales</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Diseño Contemporáneo</h3>
                    <p className="text-gray-600">
                      Líneas limpias y modernas que se adaptan perfectamente a la arquitectura contemporánea, creando
                      espacios elegantes y funcionales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Materiales Premium</h3>
                    <p className="text-gray-600">
                      Utilizamos acero galvanizado de primera calidad y acabados especiales que garantizan resistencia a
                      la corrosión y durabilidad excepcional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Instalación Rápida</h3>
                    <p className="text-gray-600">
                      Nuestro sistema de montaje optimizado permite instalaciones eficientes sin comprometer la calidad
                      del resultado final.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Beneficios</h2>
              <div className="space-y-4">
                {[
                  "Resistencia superior a condiciones climáticas extremas",
                  "Mantenimiento mínimo requerido",
                  "Excelente relación calidad-precio",
                  "Garantía extendida de 10 años",
                  "Diseño personalizable según necesidades",
                  "Instalación profesional incluida",
                  "Asesoramiento técnico especializado",
                  "Materiales certificados y de calidad",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Interesado en Techos Modernos?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Solicita una cotización gratuita y sin compromiso. Nuestros expertos te asesorarán para encontrar la
            solución perfecta para tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
    href="https://wa.me/+5493417052233"
    target="_blank"
    rel="noopener noreferrer"
    style={{ zIndex: "1000" }}
  >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/#servicios">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Servicios
              </Button>
            </Link>

            {/* <Link href="/proyectos">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Ver Proyectos Realizados</Button>
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
