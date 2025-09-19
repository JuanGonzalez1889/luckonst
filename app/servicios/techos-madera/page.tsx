"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, MessageCircle, ChevronLeft, ChevronRight, Hammer, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TechosMaderaPage() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/images/techos-madera/portada.jpg",
      alt: "Galería de Madera Principal",
      title: "Galería de Madera Principal",
      description: "Estructura de madera natural con vigas vistas y diseño elegante",
    },
    {
      src: "/images/techos-madera/imagen-2.jpg",
      alt: "Vista Exterior Galería",
      title: "Vista Exterior Galería",
      description: "Pergolado de madera con columnas robustas y techo de tablones",
    },
    {
      src: "/images/techos-madera/imagen-3.jpg",
      alt: "Vista Interior Cielorraso",
      title: "Vista Interior Cielorraso",
      description: "Cielorraso de madera con vigas expuestas y acabado natural",
    },
    {
      src: "/images/techos-madera/imagen-4.jpg",
      alt: "Estructura Exterior Atardecer",
      title: "Estructura Exterior Atardecer",
      description: "Galería de madera con iluminación natural del atardecer",
    },
    {
      src: "/images/techos-madera/imagen-5.jpg",
      alt: "Vista Interior con Patio",
      title: "Vista Interior con Patio",
      description: "Interior de la galería con vista hacia el patio y piscina",
    },
    {
      src: "/images/techos-madera/imagen-6.jpg",
      alt: "Galería con Vista al Jardín",
      title: "Galería con Vista al Jardín",
      description: "Espacio cubierto con vista panorámica al jardín",
    },
    {
      src: "/images/techos-madera/imagen-7.jpg",
      alt: "Perspectiva Interior Completa",
      title: "Perspectiva Interior Completa",
      description: "Vista completa del interior de la galería de madera",
    },
    {
      src: "/images/techos-madera/imagen-8.jpg",
      alt: "Detalle Estructura Interior",
      title: "Detalle Estructura Interior",
      description: "Detalle de la estructura de madera y acabados interiores",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const specifications = [
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Madera Seleccionada",
      description:
        "Utilizamos maderas de primera calidad, tratadas para resistir la intemperie y mantener su belleza natural por años.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tratamiento Protector",
      description:
        "Aplicamos tratamientos especializados contra insectos, hongos y humedad para garantizar la durabilidad.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Instalación Rápida",
      description:
        "Nuestro equipo especializado completa la instalación en tiempos optimizados sin comprometer la calidad.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Garantía Extendida",
      description:
        "Ofrecemos garantía de 5 años en estructura y 2 años en acabados, respaldando la calidad de nuestro trabajo.",
    },
  ]

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
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/#servicios" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Volver a Servicios</span>
              </Link>
              
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="py-12 lg:py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Techo Tradicional</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Galerías y pergolados de madera natural con vigas vistas que aportan calidez y elegancia a tu hogar.
                Creamos espacios únicos que combinan la belleza natural de la madera con la funcionalidad moderna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/5493417052233?text=Hola,%20me%20interesa%20un%20presupuesto%20para%20techo%20tradicional"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Consultar por WhatsApp
                  </Button>
                </Link>
                <Link href="tel:+5493417052233">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-primary hover:text-white bg-transparent"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Galería de Proyectos</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explora nuestros trabajos realizados en techos tradicionales de madera, desde galerías elegantes hasta
                pergolados funcionales.
              </p>
            </div>

            {/* Main Image */}
            <div className="relative mb-8">
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images[currentImage].src || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover"
                  priority
                  style={{ objectPosition: "center 20%" }}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {currentImage + 1} / {images.length}
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white p-4 rounded-lg backdrop-blur-sm max-w-md">
                  <h3 className="font-semibold mb-1">{images[currentImage].title}</h3>
                  <p className="text-sm text-gray-200">{images[currentImage].description}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 lg:gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative h-16 lg:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImage === index
                      ? "ring-2 ring-primary ring-offset-2 scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="py-12 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Especificaciones Técnicas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conoce los detalles técnicos y características que hacen únicos nuestros techos tradicionales de madera.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{spec.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 lg:py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Listo para tu Proyecto Tradicional?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Contáctanos hoy mismo para recibir una cotización personalizada. Nuestro equipo de expertos te asesorará
                en cada paso del proceso, desde el diseño hasta la instalación final.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/5493417052233?text=Hola,%20me%20interesa%20un%20presupuesto%20para%20techo%20tradicional"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </Link>
                <Link href="tel:+5493417052233">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
<div
  className="py-12 lg:py-20 bg-gradient-to-r from-primary to-primary/90"
  style={{ background: "white", paddingTop: "1px" }}
></div>
      </div>
      <Footer />
    </>
  )
}
