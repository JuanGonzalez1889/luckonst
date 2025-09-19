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
  Droplets,
  Layers,
  Wrench,
} from "lucide-react"

const images = [
  {
    src: "/cielorraso-pvc-1.jpeg",
    alt: "Galería con cielorraso de PVC blanco y estructura metálica",
    title: "Galería Residencial",
  },
  {
    src: "/cielorraso-pvc-2.jpeg",
    alt: "Cielorraso de PVC símil madera con estructura metálica",
    title: "PVC Símil Madera",
  },
  {
    src: "/cielorraso-pvc-3.jpeg",
    alt: "Cielorraso de PVC blanco en galería moderna",
    title: "Cielorraso PVC Blanco",
  },
  {
    src: "/cielorraso-pvc-4.jpeg",
    alt: "Vista lateral de galería con cielorraso de PVC",
    title: "Instalación Completa",
  },
]

export default function CielorrasoPvcPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

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
              <Link href="/#servicios" className="hover:text-white transition-colors">
                Servicios
              </Link>
              <span>/</span>
              <span className="text-white">Cielorraso de PVC</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cielorraso de PVC</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cielorrasos de PVC de alta calidad, resistentes a la humedad y de fácil mantenimiento. La solución
              perfecta para galerías, terrazas y espacios exteriores cubiertos.
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
                  className="w-full h-96 lg:h-[500px] object-cover"
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
            <div className="grid grid-cols-4 gap-4">
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
                    className="w-full h-20 lg:h-24 object-cover"
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
                    <Droplets className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Resistente a la Humedad</h3>
                    <p className="text-gray-600">
                      El PVC es naturalmente resistente a la humedad, ideal para espacios exteriores cubiertos y zonas
                      con alta exposición al clima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <Layers className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Variedad de Acabados</h3>
                    <p className="text-gray-600">
                      Disponible en múltiples acabados: blanco clásico, símil madera, y otros diseños que se adaptan a
                      cualquier estilo arquitectónico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <Wrench className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Fácil Mantenimiento</h3>
                    <p className="text-gray-600">
                      Solo requiere limpieza ocasional con agua y jabón. No necesita pintura ni tratamientos especiales
                      a lo largo del tiempo.
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
                      Sistema de instalación eficiente que permite completar el proyecto en menor tiempo sin comprometer
                      la calidad.
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
                  "Material 100% impermeable y resistente",
                  "No se deforma con cambios de temperatura",
                  "Excelente aislación térmica",
                  "Resistente a insectos y roedores",
                  "No requiere mantenimiento periódico",
                  "Instalación limpia y sin escombros",
                  "Garantía extendida del fabricante",
                  "Variedad de colores y texturas",
                  "Relación calidad-precio excepcional",
                  "Apto para todo tipo de climas",
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Aplicaciones Ideales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los cielorrasos de PVC son perfectos para diversos espacios y aplicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Galerías",
                description: "Espacios exteriores cubiertos con protección total",
                icon: Home,
              },
              {
                title: "Terrazas",
                description: "Ambientes de descanso y entretenimiento",
                icon: Shield,
              },
              {
                title: "Cocheras",
                description: "Protección vehicular con estilo moderno",
                icon: Award,
              },
              {
                title: "Quincho",
                description: "Espacios de reunión familiar y social",
                icon: Layers,
              },
            ].map((application, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Interesado en Cielorraso de PVC?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Solicita una cotización gratuita y sin compromiso. Te asesoramos para elegir el acabado perfecto para tu
            proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
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
    </div>
  )
}
